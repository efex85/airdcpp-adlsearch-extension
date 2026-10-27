// End-to-end test: runs the BUNDLED extension (dist/main.js) as a separate process against a fake
// AirDC++ API server (test/fake-server.mjs) and checks what it sends to the API.

import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { startFakeServer } from './fake-server.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const EXT_NAME = 'airdcpp-adl-checker';

const ADL = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<ADLSearch><SearchGroup>
<Search><SearchString RegEx="1">\\.(exe|bat)$</SearchString><SourceType>Filename</SourceType><DestDirectory>&lt;  Executables  &gt;</DestDirectory><IsActive>1</IsActive><MaxSize>-1</MaxSize><MinSize>-1</MinSize><SizeType>B</SizeType></Search>
<Search><SearchString RegEx="1">\\.mkv$</SearchString><SourceType>Filename</SourceType><DestDirectory>&lt;  Too Small Video  &gt;</DestDirectory><IsActive>1</IsActive><MaxSize>1</MaxSize><MinSize>-1</MinSize><SizeType>KiB</SizeType></Search>
<Search><SearchString RegEx="1">^sample$</SearchString><SourceType>Directory</SourceType><DestDirectory>&lt;  Sample Dirs  &gt;</DestDirectory><IsActive>1</IsActive><MaxSize>-1</MaxSize><MinSize>-1</MinSize><SizeType>B</SizeType></Search>
<Search><SearchString RegEx="1">\\.nfo$</SearchString><SourceType>Filename</SourceType><DestDirectory>&lt;  Possibly Nfo  &gt;</DestDirectory><IsActive>1</IsActive><MaxSize>-1</MaxSize><MinSize>-1</MinSize><SizeType>B</SizeType></Search>
<Search><SearchString RegEx="1">\\.zip$</SearchString><SourceType>Filename</SourceType><DestDirectory>&lt;  Inactive  &gt;</DestDirectory><IsActive>0</IsActive><MaxSize>-1</MaxSize><MinSize>-1</MinSize><SizeType>B</SizeType></Search>
</SearchGroup></ADLSearch>`;

let adlPath, tmp, server, child, childOutput = '', shareRoot, logPath, configPath;

const lastEvents = () => server.state.events;
const eventsWith = (text) => lastEvents().filter(e => e.text.includes(text));

const startExtension = async (featureLevel) => {
  childOutput = '';
  // Run the bundle from a directory without node_modules: it must not depend on anything installed next to it
  const extDir = path.join(tmp, 'ext');
  fs.mkdirSync(extDir, { recursive: true });
  fs.copyFileSync(path.join(root, 'dist', 'main.js'), path.join(extDir, 'main.js'));
  child = spawn(process.env.EXT_NODE || process.execPath, [
    path.join(extDir, 'main.js'),
    `--name=${EXT_NAME}`,
    `--apiUrl=127.0.0.1:${server.port}/api/v1/`,
    '--authToken=test-token',
    `--logPath=${logPath}`,
    `--settingsPath=${configPath}`,
    `--appPid=${process.pid}`,
    '--signalReady=true',
    '--debug',
  ], { stdio: ['ignore', 'pipe', 'pipe'] });
  child.stdout.on('data', d => { childOutput += d; });
  child.stderr.on('data', d => { childOutput += d; });
  await server.waitFor(() => server.state.ready, 10000, 'extension ready');
};

const stopExtension = async () => {
  if (!child) return;
  const exited = new Promise(resolve => child.once('exit', resolve));
  child.kill('SIGTERM');
  await exited;
  child = undefined;
};

before(async () => {
  assert.ok(fs.existsSync(path.join(root, 'dist', 'main.js')), 'run "npm run build" first');
  tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'adl-e2e-'));
  shareRoot = path.join(tmp, 'share');
  logPath = path.join(tmp, 'logs') + path.sep;
  // Same layout as in the application: <Settings>/extensions/<name>/settings/ and <Settings>/ADLSearch.xml
  configPath = path.join(tmp, 'Settings', 'extensions', EXT_NAME, 'settings') + path.sep;
  adlPath = path.join(tmp, 'Settings', 'ADLSearch.xml');
  fs.mkdirSync(shareRoot);
  fs.mkdirSync(logPath);
  fs.mkdirSync(configPath, { recursive: true });
  fs.writeFileSync(adlPath, ADL);

  server = await startFakeServer({ apiFeatureLevel: 6 });
  server.state.shareRoots = [shareRoot];
  await startExtension();
});

after(async () => {
  await stopExtension();
  await server.close();
  fs.rmSync(tmp, { recursive: true, force: true });
});

test('registers settings, hooks, listeners and signals ready', () => {
  const keys = server.state.definitions.map(d => d.key).sort();
  assert.deepEqual(keys, ['check_share_changes', 'max_warnings', 'reject_matched', 'respect_ignorelist']);
  assert.ok(server.state.hooks.new_share_directory_validation_hook, 'directory hook');
  // The per-file hook makes share refreshes slow: it must not be used unless files are kept out of the share
  assert.ok(!server.state.hooks.share_file_validation_hook, 'no per-file hook by default');
  assert.ok(server.state.listeners.includes('hash/listeners/hasher_directory_finished'));
  assert.ok(server.state.listeners.some(p => p === 'hubs/listeners/hub_text_command'));
  assert.ok(server.state.listeners.some(p => p === 'private_chat/listeners/private_chat_text_command'));
  assert.ok(server.state.listeners.some(p => p === `extensions/${EXT_NAME}/listeners/extension_settings_updated`) ||
            server.state.listeners.some(p => p.includes('extension_settings_updated')));
  assert.equal(eventsWith('loaded 4 rules')[0].severity, 'info');
});

const dirEvent = (dir) => server.sendEvent('hasher_directory_finished', { path: dir + '/', size: 0 });
const settle = (ms = 400) => new Promise(r => setTimeout(r, ms));

test('default mode: matches in a hashed directory are reported as WARNINGS (no per-file hook needed)', async () => {
  const dir = path.join(shareRoot, 'Movie.A');
  fs.mkdirSync(dir);
  fs.writeFileSync(path.join(dir, 'virus.exe'), 'x');
  fs.writeFileSync(path.join(dir, 'small.mkv'), Buffer.alloc(10));
  fs.writeFileSync(path.join(dir, 'big.mkv'), Buffer.alloc(5000));
  fs.writeFileSync(path.join(dir, 'clean.txt'), 'x');
  fs.writeFileSync(path.join(dir, 'archive.zip'), 'x');
  dirEvent(dir);
  await server.waitFor(() => eventsWith('virus.exe').length === 1 && eventsWith('small.mkv').length === 1, 5000, 'warnings');
  const [exe] = eventsWith('virus.exe');
  assert.equal(exe.severity, 'warning');
  assert.match(exe.text, /Executables/);
  assert.doesNotMatch(exe.text, /not shared/);
  assert.match(eventsWith('small.mkv')[0].text, /Too Small Video/);
  await settle();
  // Size limit respected, clean files and inactive rules ignored
  assert.equal(eventsWith('big.mkv').length + eventsWith('clean.txt').length + eventsWith('archive.zip').length, 0);
});

test('default mode: the same file is not warned about again', async () => {
  dirEvent(path.join(shareRoot, 'Movie.A'));
  await settle(800);
  assert.equal(eventsWith('virus.exe').length, 1);
});

test('default mode: a hashed directory whose own name matches is reported', async () => {
  const dir = path.join(shareRoot, 'Movie.A', 'Sample');
  fs.mkdirSync(dir);
  dirEvent(dir);
  await server.waitFor(() => eventsWith('Sample').length === 1, 5000, 'directory warning');
  assert.match(eventsWith('Sample')[0].text, /\(directory\).*Sample Dirs/);
});

test('default mode: new directories are checked with the (cheap) directory hook', async () => {
  const completion = await server.fireHook('new_share_directory_validation_hook', { path: '/share/Other/Sample', new_parent: true });
  assert.equal(completion.action, 'resolve');
  await server.waitFor(() => eventsWith('/share/Other/Sample').length === 1, 5000, 'directory warning');
  assert.equal(eventsWith('/share/Other/Sample')[0].severity, 'warning');
});

test('reject mode: enabling it adds the per-file hook', async () => {
  server.setSettings({ reject_matched: true });
  await server.waitFor(() => server.state.hooks.share_file_validation_hook, 5000, 'file hook added');
});

test('reject mode: matched file is rejected with adl_match and marked as not shared', async () => {
  fs.writeFileSync(path.join(shareRoot, 'other.exe'), 'x');
  const completion = await server.fireHook('share_file_validation_hook', { path: path.join(shareRoot, 'other.exe'), size: 1 });
  assert.equal(completion.action, 'reject');
  assert.equal(completion.reject_id, 'adl_match');
  assert.match(completion.message, /Executables/);
  await server.waitFor(() => eventsWith('other.exe').length === 1, 5000, 'warning');
  assert.match(eventsWith('other.exe')[0].text, /not shared/);
  assert.equal(eventsWith('other.exe')[0].severity, 'warning');
});

test('reject mode: clean files are still accepted', async () => {
  const completion = await server.fireHook('share_file_validation_hook', { path: '/share/clean.txt', size: 1 });
  assert.equal(completion.action, 'resolve');
});

test('reject mode: size limits use the size from the hook data (the file system is not touched)', async () => {
  // These files don't exist: the answer can only come from the `size` in the hook data
  const tiny = await server.fireHook('share_file_validation_hook', { path: '/nonexistent/tiny.mkv', size: 10 });
  const huge = await server.fireHook('share_file_validation_hook', { path: '/nonexistent/huge.mkv', size: 5000 });
  assert.equal(tiny.action, 'reject');
  assert.equal(huge.action, 'resolve');
});

test('reject mode: a new matching directory is rejected', async () => {
  const completion = await server.fireHook('new_share_directory_validation_hook', { path: '/share/Movie/Sample', new_parent: true });
  assert.equal(completion.action, 'reject');
  assert.equal(completion.reject_id, 'adl_match');
});

test('reject mode: a payload without a path is accepted (never blocks the share)', async () => {
  const completion = await server.fireHook('share_file_validation_hook', { something: 1 });
  assert.equal(completion.action, 'resolve');
});

test('a hashed directory check keeps the "not shared" mark of a rejected file', async () => {
  const askList = async () => {
    const count = server.state.statusMessages.length;
    server.sendEvent('hub_text_command', { command: 'adl', args: ['list'], permissions: ['admin'], owner: 'x' }, 7);
    await server.waitFor(() => server.state.statusMessages.length === count + 1, 5000, 'status message');
    return server.state.statusMessages.at(-1).data.text.match(/(\d+) kept out of share/)[1];
  };

  const before = await askList();
  assert.ok(Number(before) >= 1);
  dirEvent(shareRoot); // contains other.exe
  await settle(800);
  assert.equal(await askList(), before);
});

test('turning the share check off removes both hooks, turning it on adds them back', async () => {
  server.setSettings({ check_share_changes: false });
  await server.waitFor(() => !server.state.hooks.share_file_validation_hook && !server.state.hooks.new_share_directory_validation_hook, 5000, 'hooks removed');
  const before = eventsWith('late.exe').length;
  fs.writeFileSync(path.join(shareRoot, 'Movie.A', 'late.exe'), 'x');
  dirEvent(path.join(shareRoot, 'Movie.A'));
  await settle(800);
  assert.equal(eventsWith('late.exe').length, before, 'no warnings while the check is off');

  server.setSettings({ check_share_changes: true });
  await server.waitFor(() => server.state.hooks.share_file_validation_hook && server.state.hooks.new_share_directory_validation_hook, 5000, 'hooks added back');
});

test('turning reject mode off removes the per-file hook', async () => {
  server.setSettings({ reject_matched: false });
  await server.waitFor(() => !server.state.hooks.share_file_validation_hook, 5000, 'file hook removed');
  assert.ok(server.state.hooks.new_share_directory_validation_hook);
});

test('/adl list answers in the chat', async () => {
  const count = server.state.statusMessages.length;
  server.sendEvent('hub_text_command', { command: 'adl', args: ['list'], permissions: ['admin'], owner: 'x' }, 7);
  await server.waitFor(() => server.state.statusMessages.length === count + 1, 5000, 'status message');
  const msg = server.state.statusMessages.at(-1);
  assert.equal(msg.path, 'hubs/7/status_message');
  assert.match(msg.data.text, /matched items/);
  assert.match(msg.data.text, /Executables/);
});

test('chat commands are ignored without admin or settings_edit permission', async () => {
  const before = server.state.statusMessages.length;
  server.sendEvent('hub_text_command', { command: 'adl', args: ['list'], permissions: ['hubs_view'], owner: 'x' }, 7);
  await new Promise(r => setTimeout(r, 400));
  assert.equal(server.state.statusMessages.length, before);
});

test('/adl scan walks the share and reports the matches', async () => {
  fs.mkdirSync(path.join(shareRoot, 'Release', 'Sample'), { recursive: true });
  fs.writeFileSync(path.join(shareRoot, 'Release', 'setup.bat'), 'x');
  fs.writeFileSync(path.join(shareRoot, 'Release', 'fine.txt'), 'x');
  server.sendEvent('hub_text_command', { command: 'adl', args: ['scan'], permissions: ['admin'], owner: 'x' }, 7);
  await server.waitFor(() => eventsWith('scan completed').length === 1, 8000, 'scan result');
  assert.equal(eventsWith('scan completed')[0].severity, 'warning');
  await server.waitFor(() => eventsWith('setup.bat').length === 1, 5000, 'setup.bat warning');
  assert.equal(eventsWith('fine.txt').length, 0);
  assert.equal(eventsWith('Sample').length >= 1, true);
});

test('/adl matches opens the report in the viewer (feature level 6)', async () => {
  server.sendEvent('hub_text_command', { command: 'adl', args: ['matches'], permissions: ['admin'], owner: 'x' }, 7);
  await server.waitFor(() => server.state.viewed.length === 1, 8000, 'view_files');
  const upload = server.state.uploads.at(-1);
  assert.equal(upload.auth, 'Bearer test-token');
  assert.match(upload.body, /ADL checker: matched items/);
  // hook-reported item that is not on disk is dropped by the scan, the rejected real file keeps its marker
  assert.match(upload.body, /other\.exe {4}\[not shared\]/);
  assert.match(upload.body, /setup\.bat/);
  assert.deepEqual(server.state.viewed[0].data, { text: true });
});

test('items that could not be read are counted and listed in /adl matches', async () => {
  // (a broken symbolic link can't be read; permission errors can't be produced reliably when the tests run as root)
  fs.symlinkSync(path.join(tmp, 'does-not-exist'), path.join(shareRoot, 'broken-link'));
  const scans = eventsWith('scan completed').length;
  server.sendEvent('hub_text_command', { command: 'adl', args: ['scan'], permissions: ['admin'], owner: 'x' }, 7);
  await server.waitFor(() => eventsWith('scan completed').length === scans + 1, 8000, 'second scan');
  assert.match(eventsWith('scan completed').at(-1).text, /1 items could not be read \(listed in \/adl matches\)/);

  const uploads = server.state.uploads.length;
  server.sendEvent('hub_text_command', { command: 'adl', args: ['matches'], permissions: ['admin'], owner: 'x' }, 7);
  await server.waitFor(() => server.state.uploads.length === uploads + 1, 8000, 'matches report');
  const body = server.state.uploads.at(-1).body;
  assert.match(body, /Unreadable: {2}1 /);
  assert.match(body, /Could not be read during the last scan/);
  assert.match(body, /broken-link {4}\[ENOENT: does not exist/);
  assert.match(body, /setup\.bat/);
});

test('matches persist across restarts and are not warned about again', async () => {
  await stopExtension();
  assert.ok(fs.existsSync(path.join(configPath, 'matches.json')), 'matches.json written on exit');
  const saved = JSON.parse(fs.readFileSync(path.join(configPath, 'matches.json'), 'utf8'));
  const setupBat = path.join(shareRoot, 'Release', 'setup.bat');
  assert.ok(saved.matches.some(m => m.path === setupBat));
  assert.equal(saved.unreadable.length, 1);

  server.state.ready = false;
  server.state.hooks = {};
  const before = eventsWith('setup.bat').length;
  await startExtension();
  await server.waitFor(() => server.state.hooks.new_share_directory_validation_hook, 5000, 'hook');
  dirEvent(path.join(shareRoot, 'Release'));
  await settle(800);
  assert.equal(eventsWith('setup.bat').length, before);
});

test('changing ADLSearch.xml is NOT picked up automatically, only on reload (command or menu)', async () => {
  const r1 = path.join(shareRoot, 'R1');
  const r2 = path.join(shareRoot, 'R2');
  fs.mkdirSync(r1);
  fs.mkdirSync(r2);
  fs.writeFileSync(path.join(r1, 'lib.dll'), 'x');
  fs.writeFileSync(path.join(r2, 'ctl.ocx'), 'x');

  fs.writeFileSync(adlPath, ADL.replace('(exe|bat)', '(exe|bat|dll)'));
  const before = eventsWith('loaded 4 rules').length;

  // No automatic check
  await settle(1500);
  dirEvent(r1);
  await settle(600);
  assert.equal(eventsWith('lib.dll').length, 0);

  // Reload from the menu
  server.sendEvent('extension_menuitem_selected', {
    hook_id: EXT_NAME, menu_id: 'extension', menuitem_id: 'adl_reload',
    selected_ids: [EXT_NAME], entity_id: undefined, permissions: ['admin'], supports: ['form'], form_values: {},
  });
  await server.waitFor(() => eventsWith('loaded 4 rules').length === before + 1, 5000, 'menu reload');
  dirEvent(r1);
  await server.waitFor(() => eventsWith('lib.dll').length === 1, 5000, 'dll warning');

  // Reload by command
  fs.writeFileSync(adlPath, ADL.replace('(exe|bat)', '(exe|bat|ocx)'));
  server.sendEvent('hub_text_command', { command: 'adl', args: ['reload'], permissions: ['admin'], owner: 'x' }, 7);
  await server.waitFor(() => eventsWith('loaded 4 rules').length === before + 2, 5000, 'command reload');
  dirEvent(r2);
  await server.waitFor(() => eventsWith('ctl.ocx').length === 1, 5000, 'ocx warning');
});

test('extension menu: items are listed for this extension only and clicking one works', async () => {
  const listData = { selected_ids: [EXT_NAME], entity_id: undefined, permissions: ['admin'], supports: ['form'] };
  const listed = await server.fireHook('extension_list_menuitems', listData);
  assert.equal(listed.action, 'resolve');
  assert.deepEqual(listed.data.menuitems.map(i => i.id), ['adl_scan', 'adl_reload', 'adl_matches']);

  const other = await server.fireHook('extension_list_menuitems', { ...listData, selected_ids: ['airdcpp-something-else'] });
  assert.equal(other.action, 'resolve');
  assert.deepEqual(other.data.menuitems, []);

  const viewed = server.state.viewed.length;
  server.sendEvent('extension_menuitem_selected', {
    hook_id: EXT_NAME, menu_id: 'extension', menuitem_id: 'adl_matches',
    selected_ids: [EXT_NAME], entity_id: undefined, permissions: ['admin'], supports: ['form'], form_values: {},
  });
  await server.waitFor(() => server.state.viewed.length === viewed + 1, 8000, 'matches opened from the menu');
});
