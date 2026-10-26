// Remembers the matched items (so that the same item is not reported again after every refresh/restart
// and so that the complete list can be shown on demand).

import fs from 'node:fs';

export const ACTION_WARNED = 'warned';
export const ACTION_REJECTED = 'rejected';
export const ACTION_SCAN = 'found by scan';

const SAVE_DELAY_MS = 3000;

export const createStore = (filePath, logger) => {
  /** @type {Map<string, {path: string, type: 'file'|'directory', categories: string[], action: string, firstSeen: string}>} */
  let matches = new Map();
  /** @type {{path: string, reason: string}[]} items that could not be read during the last scan */
  let unreadable = [];
  let saveTimer;
  let dirty = false;

  const serialize = () => JSON.stringify({ version: 1, matches: [...matches.values()], unreadable });

  const load = () => {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      if (data && data.version === 1 && Array.isArray(data.matches)) {
        matches = new Map(data.matches.filter(m => m && typeof m.path === 'string').map(m => [m.path, m]));
        if (Array.isArray(data.unreadable)) {
          unreadable = data.unreadable.filter(u => u && typeof u.path === 'string');
        }
      }
    } catch (e) {
      if (e.code !== 'ENOENT') {
        logger.error(`Failed to load the saved matches from ${filePath}: ${e.message}`);
      }
    }
  };

  const saveNow = async () => {
    clearTimeout(saveTimer);
    saveTimer = undefined;
    if (!dirty) {
      return;
    }

    dirty = false;
    try {
      const tmp = `${filePath}.tmp`;
      await fs.promises.writeFile(tmp, serialize());
      await fs.promises.rename(tmp, filePath);
    } catch (e) {
      dirty = true;
      logger.error(`Failed to save the matches to ${filePath}: ${e.message}`);
    }
  };

  const scheduleSave = () => {
    dirty = true;
    if (!saveTimer) {
      saveTimer = setTimeout(saveNow, SAVE_DELAY_MS);
      if (saveTimer.unref) {
        saveTimer.unref();
      }
    }
  };

  // Synchronous save for shutdown
  const flushSync = () => {
    clearTimeout(saveTimer);
    saveTimer = undefined;
    if (!dirty) {
      return;
    }

    try {
      fs.writeFileSync(filePath, serialize());
      dirty = false;
    } catch (e) {
      logger.error(`Failed to save the matches to ${filePath}: ${e.message}`);
    }
  };

  load();

  return {
    get: (itemPath) => matches.get(itemPath),
    get size() {
      return matches.size;
    },
    all: () => [...matches.values()],
    getUnreadable: () => unreadable,
    setUnreadable: (list) => {
      unreadable = list;
      scheduleSave();
    },

    // Returns true if the path was not known before
    upsert: (record) => {
      const existing = matches.get(record.path);
      matches.set(record.path, {
        ...record,
        firstSeen: existing ? existing.firstSeen : new Date().toISOString(),
      });

      scheduleSave();
      return !existing;
    },

    remove: (itemPath) => {
      if (matches.delete(itemPath)) {
        scheduleSave();
        return true;
      }

      return false;
    },

    // Replaces everything (result of a complete scan)
    replaceAll: (records) => {
      const previous = matches;
      matches = new Map();
      for (const record of records) {
        const existing = previous.get(record.path);
        matches.set(record.path, {
          ...record,
          // Keep what we already know about the item
          action: existing ? existing.action : record.action,
          firstSeen: existing ? existing.firstSeen : new Date().toISOString(),
        });
      }

      scheduleSave();
    },

    saveNow,
    flushSync,
  };
};
