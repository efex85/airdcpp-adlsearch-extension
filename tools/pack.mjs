// Creates dist-package/airdcpp-adl-checker-<version>.tgz (npm pack layout: package/ root) and a plain folder + zip.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const out = path.join(root, 'dist-package');
const stage = path.join(out, 'stage');

fs.rmSync(out, { recursive: true, force: true });
const pkgDir = path.join(stage, 'package');
fs.mkdirSync(path.join(pkgDir, 'dist'), { recursive: true });

for (const file of fs.readdirSync(path.join(root, 'dist'))) {
  fs.copyFileSync(path.join(root, 'dist', file), path.join(pkgDir, 'dist', file));
}

fs.copyFileSync(path.join(root, 'README.md'), path.join(pkgDir, 'README.md'));

// Everything is bundled: no scripts or dependencies are needed at runtime
const { scripts, devDependencies, ...runtimePkg } = pkg;
fs.writeFileSync(path.join(pkgDir, 'package.json'), JSON.stringify(runtimePkg, null, 2) + '\n');

const tgz = `${pkg.name}-${pkg.version}.tgz`;
execFileSync('tar', ['-czf', path.join(out, tgz), '-C', stage, 'package']);

// Plain folder (for copying into the extensions directory) as zip
const folder = path.join(out, pkg.name);
fs.cpSync(pkgDir, folder, { recursive: true });
try {
  execFileSync('zip', ['-qr', path.join(out, `${pkg.name}-${pkg.version}.zip`), pkg.name], { cwd: out });
} catch (e) {
  // "zip" is not available everywhere (e.g. Windows): the .tgz is enough, or copy the folder manually
  console.log('zip not available, skipping the .zip (the folder is kept as dist-package/' + pkg.name + ')');
  fs.rmSync(stage, { recursive: true, force: true });
  console.log(fs.readdirSync(out).join('\n'));
  process.exit(0);
}
fs.rmSync(stage, { recursive: true, force: true });
fs.rmSync(folder, { recursive: true, force: true });
console.log(fs.readdirSync(out).join('\n'));
