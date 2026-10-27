'use strict';

import fs from 'node:fs';
import path from 'node:path';

import { addContextMenuItems } from 'airdcpp-apisocket';
import SettingsManager from 'airdcpp-extension-settings';

import { parseAdl, toItem, matchItem, categoriesOf, parseIgnoreList, stripTrailingSeparators } from './adl.js';
import { createStore, ACTION_WARNED, ACTION_REJECTED, ACTION_SCAN } from './store.js';
import { formatReport, formatSummary } from './report.js';
import { scanPaths, statSize } from './scanner.js';
import { withDeadline } from './util.js';

const CONFIG_VERSION = 1;
const SCAN_ACCESS = 'settings_edit';
const WARNING_FLUSH_DELAY_MS = 10000;

export const HOOK_FILE = 'share_file_validation_hook';
export const HOOK_NEW_DIRECTORY = 'new_share_directory_validation_hook';

const hasScanAccess = (permissions) => {
  return permissions.indexOf('admin') !== -1 || permissions.indexOf(SCAN_ACCESS) !== -1;
};

// Maximum time for answering a file/directory check of the application
const HOOK_DEADLINE_MS = 3000;
const SLOW_HOOK_MS = 500;
const STATS_INTERVAL_MS = 10000;
const TIMED_OUT = Symbol('timed out');

const READ_ERRORS = {
  EACCES: 'permission denied',
  EPERM: 'operation not permitted',
  ENOENT: 'does not exist (broken link, or removed during the scan)',
  ELOOP: 'too many levels of symbolic links',
  ENOTDIR: 'not a directory',
  EIO: 'input/output error',
  ENAMETOOLONG: 'path too long',
};

const describeReadError = (e) => {
  const meaning = READ_ERRORS[e.code];
  return meaning ? `${e.code}: ${meaning}` : (e.code ? `${e.code}: ${e.message}` : e.message);
};

const getSettingDefinitions = () => [
  {
    key: 'check_share_changes',
    title: 'Check files and directories when they are added to share',
    type: 'boolean',
    default_value: true,
    help: 'Matches are reported as warnings in the event log: new directories when they are added, and the files of a directory after it has been hashed.',
  }, {
    key: 'reject_matched',
    title: 'Do not share matched files and directories',
    type: 'boolean',
    default_value: false,
    help: 'Matched files are left out from the share. Directories are left out only when they are new (the whole directory is then not shared). NOTE: the application then asks the extension about every file during share refreshes, which can make refreshes of big shares much slower. Leave this off if you only want warnings.',
  }, {
    key: 'respect_ignorelist',
    title: 'Ignore the items listed in ADLSearch.ignorelist',
    type: 'boolean',
    default_value: true,
    help: 'Ignored items are neither reported nor left out from share. The file is read from the same directory as ADLSearch.xml.',
  }, {
    key: 'max_warnings',
    title: 'Maximum number of individual warnings in a row',
    type: 'number',
    default_value: 100,
    help: 'The rest is summarized in a single warning to avoid flooding the event log. Use /adl matches to see all matches.',
  },
];

export default function (socket, extension) {
  const logger = socket.logger;
  const cleanups = [];
  let stopped = false;

  extension.onStart = async (sessionInfo) => {
    // ---------------------------------------------------------------------------------------------
    // SETTINGS
    const settings = SettingsManager(socket, {
      extensionName: extension.name,
      configFile: extension.configPath + 'config.json',
      configVersion: CONFIG_VERSION,
      definitions: getSettingDefinitions(),
    });

    await settings.load();

    // ---------------------------------------------------------------------------------------------
    // EVENT LOG
    const postEvent = (text, severity) => {
      return socket.post('events', { text, severity }).catch((e) => {
        logger.error(`Failed to post an event log message: ${e.message}`);
      });
    };

    // Individual match warnings are limited to avoid flooding the log (the rest is summarized)
    let warningsInRow = 0;
    let suppressedWarnings = 0;
    let warningTimer;

    const flushWarnings = () => {
      clearTimeout(warningTimer);
      warningTimer = undefined;
      if (suppressedWarnings > 0) {
        postEvent(`ADL checker: ${suppressedWarnings} more matches were not logged individually (use /adl matches to see all of them)`, 'warning');
      }

      warningsInRow = 0;
      suppressedWarnings = 0;
    };

    const warn = (text) => {
      const max = Math.max(0, Number(settings.getValue('max_warnings')) || 0);
      if (warningsInRow < max) {
        warningsInRow++;
        postEvent(text, 'warning');
      } else {
        suppressedWarnings++;
      }

      clearTimeout(warningTimer);
      warningTimer = setTimeout(flushWarnings, WARNING_FLUSH_DELAY_MS);
    };

    // ---------------------------------------------------------------------------------------------
    // STATE
    const store = createStore(extension.configPath + 'matches.json', logger);

    const adl = {
      file: undefined,
      rules: [],
      categoryOrder: [],
      ignoreList: new Set(),
    };

    // ...\Settings\extensions\<extension name>\settings\ -> ...\Settings\ (the application settings directory)
    const resolveAdlFile = () => path.resolve(extension.configPath, '..', '..', '..', 'ADLSearch.xml');

    const loadIgnoreList = async (adlFile) => {
      const ignoreFile = path.join(path.dirname(adlFile), 'ADLSearch.ignorelist');
      try {
        adl.ignoreList = parseIgnoreList(await fs.promises.readFile(ignoreFile, 'utf8'));
      } catch (e) {
        adl.ignoreList = new Set();
        if (e.code !== 'ENOENT') {
          logger.error(`Failed to read ${ignoreFile}: ${e.message}`);
        }
      }
    };

    // announce: post the result to the event log
    const loadAdl = async (announce) => {
      const file = resolveAdlFile();
      try {
        const parsed = parseAdl(await fs.promises.readFile(file, 'utf8'));
        adl.file = file;
        adl.rules = parsed.rules;
        adl.categoryOrder = [...new Set(parsed.rules.map(rule => rule.label))];
        await loadIgnoreList(file);

        logger.info(`Loaded ${parsed.rules.length} ADL rules from ${file} (${parsed.stats.inactive} inactive entries, ${parsed.skipped.length} skipped, ${adl.ignoreList.size} ignored paths)`);
        if (announce) {
          postEvent(`ADL checker: loaded ${parsed.rules.length} rules from ${file}`, 'info');
        }

        for (const skipped of parsed.skipped) {
          const text = `ADL checker: entry "${skipped.label}" was skipped: ${skipped.reason} (${skipped.pattern.slice(0, 80)})`;
          logger.error(text);
          postEvent(text, 'warning');
        }

        return true;
      } catch (e) {
        const text = adl.rules.length
          ? `ADL checker: failed to reload ${file}, the previously loaded ${adl.rules.length} rules are still in use: ${e.message}`
          : `ADL checker: can't load ${file}: ${e.message}. Place ADLSearch.xml in the application settings directory.`;

        logger.error(text);
        postEvent(text, adl.rules.length ? 'warning' : 'error');
        return false;
      }
    };

    // ---------------------------------------------------------------------------------------------
    // MATCHING
    const isIgnored = (itemPath) => {
      return settings.getValue('respect_ignorelist') && adl.ignoreList.has(stripTrailingSeparators(itemPath));
    };

    const describe = (record, rejected) => {
      return `ADL match (${record.type}): ${record.path} [${record.categories.join(' | ')}]${rejected ? ' - not shared' : ''}`;
    };

    let loggedPayload = {};

    // Checks one item against the rules and records/reports a match.
    // Returns the reject message if the item must be left out of the share (only when canReject is true).
    const evaluateItem = async (itemPath, isDirectory, getSize, canReject) => {
      const item = toItem(itemPath, isDirectory);
      if (isIgnored(item.path)) {
        store.remove(item.path);
        return null;
      }

      const matched = await matchItem(adl.rules, item, getSize);
      if (!matched.length) {
        store.remove(item.path);
        return null;
      }

      const categories = categoriesOf(matched);
      const reject = canReject && !!settings.getValue('reject_matched');
      const existing = store.get(item.path);

      const record = {
        path: item.path,
        type: isDirectory ? 'directory' : 'file',
        categories,
        // An item that was left out of the share stays marked as such when it's seen again by a later check
        action: reject || (!canReject && existing && existing.action === ACTION_REJECTED) ? ACTION_REJECTED : ACTION_WARNED,
      };

      const isNew = store.upsert(record);
      if (isNew) {
        warn(describe(record, record.action === ACTION_REJECTED));
      }

      return reject ? `ADL match: ${categories.join(', ')}` : null;
    };

    // AirDC++ waits for the answer of every file during share refreshes, so the answer must always be quick.
    // The hook data has `path` and `size` (seen in the extension log), so the file system is not touched at all.
    const checkHookItem = async (hookName, data, isDirectory) => {
      if (!settings.getValue('check_share_changes') || !adl.rules.length) {
        return null;
      }

      const itemPath = data && data.path;
      if (typeof itemPath !== 'string' || !itemPath.length) {
        if (!loggedPayload[`${hookName}-invalid`]) {
          loggedPayload[`${hookName}-invalid`] = true;
          logger.error(`Unexpected ${hookName} data without a path (properties: ${Object.keys(data || {}).join(', ')}), the item was accepted`);
        }

        return null;
      }

      if (!loggedPayload[hookName]) {
        loggedPayload[hookName] = true;
        logger.info(`${hookName} data properties: ${Object.keys(data).join(', ')}`);
      }

      const getSize = Number.isFinite(data.size) && data.size >= 0 ? async () => data.size : statSize;
      return evaluateItem(itemPath, isDirectory, getSize, true);
    };

    // Counters for the extension log (to see how the application uses the hooks)
    const hookStats = { received: 0, answered: 0, inFlight: 0, slowest: 0, reported: 0 };
    let lastTick = Date.now();
    const statsTimer = setInterval(() => {
      const now = Date.now();
      const lag = now - lastTick - STATS_INTERVAL_MS;
      lastTick = now;
      if (lag > 2000) {
        logger.warn(`The extension was blocked for about ${lag} ms`);
      }

      if (hookStats.received !== hookStats.reported || hookStats.inFlight > 0) {
        logger.info(`File checks: ${hookStats.received - hookStats.reported} new, ${hookStats.received} in total, ${hookStats.inFlight} waiting, slowest answer ${hookStats.slowest} ms, pending API requests ${socket.getPendingRequestCount()}`);
        hookStats.reported = hookStats.received;
        hookStats.slowest = 0;
      }
    }, STATS_INTERVAL_MS);
    statsTimer.unref();
    cleanups.push(() => clearInterval(statsTimer));

    const createHookHandler = (hookName, isDirectory) => {
      return async (data, accept, reject) => {
        const started = Date.now();
        hookStats.received++;
        hookStats.inFlight++;
        let rejectMessage = null;
        try {
          // Never keep the application waiting: if the check takes too long, the item is accepted
          const result = await withDeadline(checkHookItem(hookName, data, isDirectory), HOOK_DEADLINE_MS, TIMED_OUT);
          if (result === TIMED_OUT) {
            logger.error(`${hookName} took more than ${HOOK_DEADLINE_MS} ms for ${data && data.path}, the item was accepted`);
          } else {
            rejectMessage = result;
          }
        } catch (e) {
          // Never block the share because of an extension error
          logger.error(`${hookName} failed for ${JSON.stringify(data)}: ${e.stack || e.message}`);
        }

        const elapsed = Date.now() - started;
        hookStats.inFlight--;
        hookStats.answered++;
        hookStats.slowest = Math.max(hookStats.slowest, elapsed);
        if (elapsed > SLOW_HOOK_MS) {
          logger.warn(`${hookName} was slow (${elapsed} ms): ${data && data.path}`);
        }

        if (rejectMessage) {
          reject('adl_match', rejectMessage);
        } else {
          accept();
        }
      };
    };

    // ---------------------------------------------------------------------------------------------
    // MANUAL SCAN
    let scanning = false;
    let stopScan = false;

    const runScan = async () => {
      if (scanning) {
        postEvent('ADL checker: a scan is already running', 'info');
        return;
      }

      if (!adl.rules.length) {
        postEvent('ADL checker: no ADL rules are loaded, the scan was not started', 'error');
        return;
      }

      scanning = true;
      stopScan = false;
      try {
        postEvent('ADL checker: scanning the share...', 'info');
        const startTime = Date.now();

        const groupedRoots = await socket.get('share/grouped_root_paths');
        const roots = [...new Set(groupedRoots.reduce((reduced, group) => reduced.concat(group.paths), []))];

        const unreadable = [];
        const { results, stats } = await scanPaths({
          roots,
          rules: adl.rules,
          isIgnored,
          shouldStop: () => stopScan,
          onError: (itemPath, e) => {
            logger.verbose(`Scan: failed to read ${itemPath}: ${e.message}`);
            unreadable.push({ path: itemPath, reason: describeReadError(e) });
          },
        });

        if (stopScan) {
          return;
        }

        const records = results.map(({ item, rules }) => ({
          path: item.path,
          type: item.isDirectory ? 'directory' : 'file',
          categories: categoriesOf(rules),
          action: ACTION_SCAN,
        }));

        const newRecords = records.filter(record => !store.get(record.path));
        store.replaceAll(records);
        store.setUnreadable(unreadable);
        newRecords.forEach(record => warn(describe(record, false)));

        const seconds = ((Date.now() - startTime) / 1000).toFixed(1);
        let text = `ADL checker: scan completed in ${seconds} s: ${stats.files} files and ${stats.directories} directories checked, ${records.length} matches (${newRecords.length} new)`;
        if (stats.errors) {
          text += `, ${stats.errors} items could not be read (listed in /adl matches)`;
        }

        flushWarnings();
        await postEvent(text, records.length ? 'warning' : 'info');
      } catch (e) {
        logger.error(`Scan failed: ${e.stack || e.message}`);
        postEvent(`ADL checker: scan failed: ${e.message}`, 'error');
      } finally {
        scanning = false;
      }
    };

    // ---------------------------------------------------------------------------------------------
    // MATCH LIST
    const reportData = () => ({
      records: store.all(),
      categoryOrder: adl.categoryOrder,
      adlFile: adl.file || resolveAdlFile(),
      ruleCount: adl.rules.length,
      unreadable: store.getUnreadable(),
    });

    // Opens the text in the viewer of the application (same method as in the release validator extension)
    const openInViewer = async (text, name) => {
      if (sessionInfo.system_info.api_feature_level < 6) {
        throw new Error('The application version is too old for opening the list');
      }

      if (typeof globalThis.fetch !== 'function') {
        throw new Error('This Node.js version has no fetch support');
      }

      const baseUrl = (extension.server.secure ? 'https://' : 'http://') + extension.server.address;
      const upload = await globalThis.fetch(`${baseUrl}/temp`, {
        method: 'POST',
        headers: {
          'Authorization': `${sessionInfo.token_type} ${sessionInfo.auth_token}`,
        },
        body: text,
      });

      const tempFileId = upload.headers.get('location');
      if (!upload.ok || !tempFileId) {
        throw new Error(`Upload failed (HTTP ${upload.status})`);
      }

      const tempShare = await socket.post('share/temp_shares', {
        file_id: tempFileId,
        cid: sessionInfo.system_info.cid,
        name,
      });

      try {
        await socket.post(`view_files/${tempShare.item.tth}`, { text: true });
      } finally {
        await socket.delete(`share/temp_shares/${tempShare.item.id}`);
      }
    };

    const showMatches = async () => {
      const text = formatReport(reportData());
      const name = `ADL matches ${new Date().toLocaleString()}`;
      try {
        await openInViewer(text, name);
      } catch (e) {
        // Fall back to a file
        const file = path.join(extension.logPath, 'adl-matches.txt');
        try {
          await fs.promises.writeFile(file, text);
          postEvent(`ADL checker: ${store.size} matches saved to ${file} (could not open the list in the application: ${e.message})`, 'info');
        } catch (writeError) {
          postEvent(`ADL checker: failed to show the matches: ${e.message}; failed to save them to ${file}: ${writeError.message}`, 'error');
        }
      }
    };

    // ---------------------------------------------------------------------------------------------
    // HOOKS
    const subscriberInfo = {
      id: extension.name,
      name: 'ADL checker',
    };

    // The application asks about every file separately during share refreshes and waits for each answer, which can
    // make refreshes of big shares very slow. The per-file hook is therefore used only when files must be kept out
    // of the share. Otherwise matches are reported after the files have been hashed (see below).
    const hookRemovers = {};
    let hookSync = Promise.resolve();

    const syncHooks = () => {
      hookSync = hookSync.then(async () => {
        if (stopped) {
          return;
        }

        const check = !!settings.getValue('check_share_changes');
        const wanted = {
          [HOOK_NEW_DIRECTORY]: check,
          [HOOK_FILE]: check && !!settings.getValue('reject_matched'),
        };

        for (const hookName of Object.keys(wanted)) {
          if (wanted[hookName] && !hookRemovers[hookName]) {
            try {
              hookRemovers[hookName] = await socket.addHook('share', hookName, createHookHandler(hookName, hookName === HOOK_NEW_DIRECTORY), subscriberInfo);
              logger.info(`Hook ${hookName} added`);
            } catch (e) {
              const text = `ADL checker: failed to add the hook ${hookName}: ${e.message}`;
              logger.error(text);
              postEvent(text, 'error');
            }
          } else if (!wanted[hookName] && hookRemovers[hookName]) {
            const remove = hookRemovers[hookName];
            delete hookRemovers[hookName];
            try {
              await remove();
              logger.info(`Hook ${hookName} removed`);
            } catch (e) {
              logger.error(`Failed to remove the hook ${hookName}: ${e.message}`);
            }
          }
        }
      }).catch(e => logger.error(`Failed to update the hooks: ${e.stack || e.message}`));

      return hookSync;
    };

    await loadAdl(true);
    await syncHooks();

    // ---------------------------------------------------------------------------------------------
    // HASHED DIRECTORIES
    // After a directory has been hashed, its files are checked from the disk (outside the share refresh, nobody waits for this)
    const hashedQueue = new Set();
    let hashedRunning = false;

    const checkHashedDirectory = async (directory) => {
      await evaluateItem(directory, true, statSize, false);

      let entries;
      try {
        entries = await fs.promises.readdir(directory, { withFileTypes: true });
      } catch (e) {
        logger.verbose(`Hashed directory check: failed to read ${directory}: ${e.message}`);
        return;
      }

      for (const entry of entries) {
        if (entry.isFile()) {
          await evaluateItem(path.join(directory, entry.name), false, statSize, false);
        }
      }
    };

    const drainHashedQueue = async () => {
      if (hashedRunning) {
        return;
      }

      hashedRunning = true;
      try {
        while (hashedQueue.size && !stopped) {
          const [directory] = hashedQueue;
          hashedQueue.delete(directory);
          try {
            await checkHashedDirectory(directory);
          } catch (e) {
            logger.error(`Hashed directory check failed for ${directory}: ${e.stack || e.message}`);
          }
        }
      } finally {
        hashedRunning = false;
      }
    };

    const onDirectoryHashed = (data) => {
      if (!settings.getValue('check_share_changes') || !adl.rules.length) {
        return;
      }

      const directory = data && data.path;
      if (typeof directory !== 'string' || !directory.length) {
        if (!loggedPayload['hashed-invalid']) {
          loggedPayload['hashed-invalid'] = true;
          logger.error(`Unexpected hasher_directory_finished data without a path (properties: ${Object.keys(data || {}).join(', ')})`);
        }

        return;
      }

      if (!loggedPayload['hashed']) {
        loggedPayload['hashed'] = true;
        logger.info(`hasher_directory_finished data properties: ${Object.keys(data).join(', ')}`);
      }

      hashedQueue.add(stripTrailingSeparators(directory));
      drainHashedQueue();
    };

    try {
      await socket.addListener('hash', 'hasher_directory_finished', onDirectoryHashed);
    } catch (e) {
      const text = `ADL checker: failed to listen to hashed directories: ${e.message}`;
      logger.error(text);
      postEvent(text, 'error');
    }

    // ---------------------------------------------------------------------------------------------
    // CHAT COMMANDS
    const checkChatCommand = (data) => {
      const { command, args, permissions } = data;
      if (!hasScanAccess(permissions)) {
        return null;
      }

      if (command === 'help') {
        return {
          severity: 'info',
          type: 'private',
          text: `

  ADL checker commands

  /adl scan - Check the whole share
  /adl matches - Open the list of all matched files and directories
  /adl list - Show the number of matches for each category
  /adl reload - Reload ADLSearch.xml
`,
        };
      }

      if (command !== 'adl' || !args.length) {
        return null;
      }

      switch (args[0]) {
        case 'scan': {
          runScan();
          return { severity: 'info', type: 'system', text: 'Scan started, see the event log for the results' };
        }
        case 'matches': {
          showMatches();
          return { severity: 'info', type: 'system', text: `Opening the list of ${store.size} matches...` };
        }
        case 'list': {
          return {
            severity: 'info',
            type: 'private',
            text: formatSummary({ ...reportData(), rejectEnabled: !!settings.getValue('reject_matched') }),
          };
        }
        case 'reload': {
          loadAdl(true);
          return { severity: 'info', type: 'system', text: 'Reloading ADLSearch.xml, see the event log for the result' };
        }
        default:
          return null;
      }
    };

    const onChatCommand = (type, data, entityId) => {
      const statusMessageData = checkChatCommand(data);
      if (statusMessageData) {
        socket.post(`${type}/${entityId}/status_message`, {
          ...statusMessageData,
          owner: data.owner,
        }).catch(e => logger.error(`Failed to send the command response: ${e.message}`));
      }
    };

    await socket.addListener('hubs', 'hub_text_command', onChatCommand.bind(null, 'hubs'));
    await socket.addListener('private_chat', 'private_chat_text_command', onChatCommand.bind(null, 'private_chat'));

    // ---------------------------------------------------------------------------------------------
    // MENU ITEMS (extension menu)
    try {
      addContextMenuItems(
        socket,
        [
          {
            id: 'adl_scan',
            title: 'Check the share against the ADL rules',
            icon: { semantic: 'yellow broom' },
            access: SCAN_ACCESS,
            onClick: async () => {
              await runScan();
            },
            filter: ({ selectedIds }) => Array.isArray(selectedIds) && selectedIds.indexOf(extension.name) !== -1,
          }, {
            id: 'adl_reload',
            title: 'ADL Reload',
            icon: { semantic: 'yellow refresh' },
            access: SCAN_ACCESS,
            onClick: async () => {
              await loadAdl(true);
            },
            filter: ({ selectedIds }) => Array.isArray(selectedIds) && selectedIds.indexOf(extension.name) !== -1,
          }, {
            id: 'adl_matches',
            title: 'Show ADL matches',
            icon: { semantic: 'yellow list' },
            access: SCAN_ACCESS,
            onClick: async () => {
              await showMatches();
            },
            filter: ({ selectedIds }) => Array.isArray(selectedIds) && selectedIds.indexOf(extension.name) !== -1,
          },
        ],
        'extension',
        subscriberInfo,
      );
    } catch (e) {
      logger.error(`Failed to add the menu items: ${e.message}`);
    }

    settings.onValuesUpdated = (updated) => {
      if (Object.prototype.hasOwnProperty.call(updated, 'check_share_changes') || Object.prototype.hasOwnProperty.call(updated, 'reject_matched')) {
        syncHooks();
      }
    };

    cleanups.push(() => {
      stopScan = true;
      flushWarnings();
      store.flushSync();
    });
  };

  extension.onStop = () => {
    if (stopped) {
      return;
    }

    stopped = true;
    cleanups.forEach((cleanup) => {
      try {
        cleanup();
      } catch (e) {
        logger.error(`Cleanup failed: ${e.message}`);
      }
    });
  };
};
