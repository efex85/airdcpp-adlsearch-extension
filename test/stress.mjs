// Manual stress test (not part of "npm test"): many file checks at once, with the real ADLSearch.xml
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startFakeServer } from './fake-server.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const N = Number(process.argv[2] || 20000);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'adl-stress-'));
const configPath = path.join(tmp, 'Settings', 'extensions', 'airdcpp-adl-checker', 'settings') + path.sep;
fs.mkdirSync(configPath, { recursive: true });
fs.mkdirSync(path.join(tmp, 'logs'));
fs.copyFileSync(path.join(root, 'test', 'ADLSearch.xml'), path.join(tmp, 'Settings', 'ADLSearch.xml'));
fs.copyFileSync(path.join(root, 'dist', 'main.js'), path.join(tmp, 'main.js'));

const server = await startFakeServer({ apiFeatureLevel: 6 });
const child = spawn(process.execPath, [path.join(tmp, 'main.js'), '--name=airdcpp-adl-checker',
  `--apiUrl=127.0.0.1:${server.port}/api/v1/`, '--authToken=t', `--logPath=${path.join(tmp, 'logs')}/`,
  `--settingsPath=${configPath}`, `--appPid=${process.pid}`, '--signalReady=true'], { stdio: 'inherit' });
await server.waitFor(() => server.state.ready, 15000, 'ready');

const names = (i) => i % 7 === 0 ? `/ShareUnraid/Movies/Movie.${i}.2021.1080p.BluRay.x264-GRP/movie.${i}.mkv`
  : i % 11 === 0 ? `/ShareUnraid/Movies/Movie.${i}.2021.1080p.BluRay.x264-GRP/Sample/sample.${i}.mkv`
  : i % 13 === 0 ? `/ShareUnraid/Movies/Movie.${i}/setup.${i}.exe`
  : `/ShareUnraid/TV/Show.${i}/S01E01.1080p.WEB.H264-GRP/file.${i}.mkv`;

const t0 = Date.now();
// fire all at once, like a refresh of a big folder
for (let i = 0; i < N; i++) {
  server.sendHook('share_file_validation_hook', { path: names(i), size: (i * 7919) % 9000000000 });
}
console.log(`sent ${N} in ${Date.now() - t0} ms`);
await server.waitFor(() => Object.keys(server.state.completions).length >= N, 120000, `${N} answers`);
const total = Date.now() - t0;
const rejected = Object.values(server.state.completions).filter(c => c.action === 'reject').length;
console.log(`all ${N} answered in ${total} ms (${(N / total * 1000).toFixed(0)} checks/s), rejected: ${rejected}`);
console.log(`warning events: ${server.state.events.filter(e => e.severity === 'warning').length}`);
child.kill('SIGTERM');
await new Promise(r => setTimeout(r, 300));
await server.close();
fs.rmSync(tmp, { recursive: true, force: true });
process.exit(0);
