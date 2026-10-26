// Bundles the extension and all of its dependencies into a single file.
// (The application doesn't run "npm install" for extensions, so everything must be shipped.)

import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

fs.rmSync(path.join(root, 'dist'), { recursive: true, force: true });

const result = await build({
  entryPoints: [path.join(root, 'src', 'index.js')],
  outfile: path.join(root, 'dist', 'main.js'),
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node16',
  // The websocket library requires these two native add-ons. Nothing is installed next to the bundle, so use
  // the plain JavaScript implementations that the packages themselves ship as their fallback.
  alias: {
    'bufferutil': path.join(root, 'node_modules', 'bufferutil', 'fallback.js'),
    'utf-8-validate': path.join(root, 'node_modules', 'utf-8-validate', 'fallback.js'),
  },
  legalComments: 'linked',
  logLevel: 'info',
  metafile: true,
});

const size = fs.statSync(path.join(root, 'dist', 'main.js')).size;
console.log(`dist/main.js: ${(size / 1024).toFixed(0)} KiB`);
