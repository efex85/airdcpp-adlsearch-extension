// Differential test: the JS matcher must give exactly the same matches as adlchecker.py
// (the original script, called through tools/diff_harness.py).
//
// node tools/diff-test.mjs [itemCount] [adlFile]

import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

import { parseAdl, toItem, matchItem } from '../src/adl.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const itemCount = parseInt(process.argv[2] || '120000', 10);
const adlFile = path.resolve(process.argv[3] || path.join(here, '..', 'test', 'ADLSearch.xml'));

// Deterministic PRNG
const mulberry32 = (seed) => () => {
  seed |= 0; seed = seed + 0x6D2B79F5 | 0;
  let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
};
const rnd = mulberry32(20261026);
const pick = (list) => list[Math.floor(rnd() * list.length)];
const chance = (p) => rnd() < p;

const xml = fs.readFileSync(adlFile, 'utf8');
const { rules } = parseAdl(xml);

// Vocabulary: words taken from the patterns themselves + hand written ones
const words = new Set();
for (const rule of rules) {
  for (const w of rule.pattern.match(/[A-Za-z][A-Za-z0-9]{1,}/g) || []) {
    words.add(w);
    words.add(w.toUpperCase());
    words.add(w.toLowerCase());
  }
}
[
  'Movie', 'Some', 'Show', 'Album', 'Artist', 'Cover', 'Covers', 'Proof', 'Sample', 'Subs', 'Season', 'Complete',
  'CAM', 'cam', 'Cam', 'TS', 'ts', 'Ts', 'BLUR', 'BLURRED', 'blurred', 'Blur', 'TC', 'R5', 'SCR', 'HC', 'XviD', 'DivX', 'x264', 'h.264', 'DVDR', 'BDr',
  'FLAC', 'LOSSLESS', 'MP3', 'WEB', 'NFO', 'SFV', 'S01E02', 'S10E11', 'E05', '2019', '1999', '2021',
  'Åsa', 'Ärlig', 'Öl', 'åäö', 'Smörgås', 'café', 'Zoë', 'ÀÉÎ', 'straße', 'Ísland', 'Œuvre', 'ǅtest', 'ΣΑΣ', 'σας', 'µ-micro', 'ſample', 'Kelvin', 'ß', 'ẞ', 'ǰ', 'ﬁle', 'ŉ', 'xxx', 'XXX',
  'imdb', 'rules', 'info', 'no', 'nfo', 'missing', 'track01', 'Track 02', 'copy', 'Kopia', 'kopia (2)', 'copie',
  'www', 'www.site.com', 'WWW.Site.COM', 'Thug', 'tree', 'a-wax',
].forEach(w => words.add(w));
const wordList = [...words];

const separators = ['.', '_', '-', ' ', '.-.', '..', '_-_', '(', ')', '[', ']'];
const extensions = [
  'nfo', 'NFO', 'sfv', 'SFV', 'rar', 'RAR', 'r00', 'r01', 'r99', 's00', 'z01', 'zip', 'ZIP', 'ace', 'c01', 'c13', 'a00', '001', '002', '123',
  'avi', 'AVI', 'mkv', 'mp4', 'mpg', 'mpeg', 'mov', 'wmv', 'm2ts', 'ts', 'vob', 'VOB', 'IFO', 'BUP', 'mp3', 'MP3', 'flac', 'FLAC',
  'jpg', 'JPG', 'jpeg', 'png', 'PNG', 'gif', 'log', 'cue', 'm3u', 'srt', 'sub', 'idx', 'txt', 'exe', 'iso', 'diz', 'torrent', 'dat', '!ut', '!bt', 'bc!', 'ut!',
  'part', 'bak', 'tmp', 'DS_Store', 'db', 'thm', 'asf', 'f4v', 'm2p', 'm4v', 'sha1', 'md5', 'par2', 'bad', 'bad1', 'missing', 'rev', 'p01',
  'log.jpg', 'rar.001', 'S01.avi', '2.avi', 'nfo.nfo', 'jpg.jpg', 'rar.rar', 'avi.avi', 'mp3.mp3', 'avi.mkv', 'int.nfo', 'read.nfo',
  '', '',
];

const roots = ['/share', '/mnt/data/Share', 'C:\\Share', 'D:\\Media\\Share', '/home/user/Shared Files'];
const folders = ['Movies', 'Music', 'TV', 'proof', 'Proof', 'PROOF', 'Sample', 'sample', 'Covers', 'covers', 'Cover', '[Covers]', 'Subs', 'XXX', 'Misc', 'CD1', 'Featurette'];


// Names/paths built to exercise rules that random words rarely reach
const specialNames = [
  ['12345.VOB', false], ['VIDEO_TS.IFO', false], ['VTS_01_1.VOB', false], ['VTS_12_ABC.BUP', false], ['00001.m2ts', false], ['00001.MPG', false],
  ['@eaDir', true], ['@EADIR', true], ['@eaDir.x', true],
  ['AlbumArt_{4A5B6C}_Large.jpg', false], ['AlbumArtSmall.jpg', false], ['VTS_01_0.png', false], ['Folder(Small).jpg', false], ['ZuneAlbumArt.png', false],
  ['cover.jpg', false], ['Front.jpeg', false], ['a.jpg', false], ['xy.png', false], ['Front-Back.jpg', false], ['cd1-a.jpg', false], ['Folder-b.png', false],
  ['cdcovers_x.jpg', false], ['Foo-sample_s.jpg', false], ['x_tvm.png', false], ['extrafanart', true], ['ExtraThumbs', true], ['Artwork', true], ['Scans', true], ['screenshots', true],
  ['track01.mp3', false], ['01.mp3', false], ['12-track.nfo', false], ['3.flac', false], ['No-NFO.nfo', false], ['no.nfo.nfo', false], ['missing.nfo', false], ['abd-missing.nfo', false], ['foo-no_nfo_here.nfo', false],
  ['Movie.2010.CUSTOM.PAL.DVDR-GRP', true], ['Movie.CSTM.x264.BLURAY-GRP', true], ['Show-CSTM-NTSC-', true], ['Movie.2010.CAM.XviD-GRP', true], ['Movie.2010.TS.XviD-GRP', true], ['Movie.2010.ts.XviD-GRP', true],
  ['Movie.2010.BLURRED.DVDR-GRP', true], ['Movie.2010.blurred.DVDR-GRP', true], ['Movie.2010.R5.XviD.DVDR-GRP', true], ['A.Serbian.Film.2010-GRP', true], ['rapelay', true], ['Foo-MeGaHeRTZ', true], ['Foo-megahertz', true],
  ['-Foo.nfo', false], ['_nds-lite.nfo', false], ['-FX-test.avi', false], ['00-254-254-2012.nfo', false], ['6581.nfo', false], ['123456789.avi', false],
  ['sample.vob', false], ['Foo.vob', false], ['x.m2ts', false], ['x.z01', false], ['x.zip', false], ['x.c01', false], ['x.ace', false],
  ['Movie.2010.S01E02.HDTV.avi', false], ['Show.S01.avi', false], ['Show.EP12.mpg', false], ['Show.1x02.mov', false], ['Show.102.mp4', false], ['Movie.sample.avi', false], ['Movie.1999.avi', false], ['Musicvid.avi', false],
  ['Foo.avi.avi', false], ['Foo.nfo.nfo', false], ['Foo.rar.001', false], ['Foo.log.jpg', false], ['Foo.AVI.rar', false],
  ['Foo (1).rar', false], ['Foo(2).nfo', false], ['Foo-(1).nfo', false], ['Kopia av Foo.nfo', false], ['Copy of x', true], ['kopie (3) y', true], ['copy y', true],
  ['0123456789abcdef.nfo', false], ['0123456789abcdef0123456789abcdef.rar', false], ['abcdefghijklmnopqrstuvwxyz.avi', false],
  ['Foo.UNKNOWNEXT', false], ['Foo.exe', false], ['Foo.TXT', false], ['Foo.nfo', false], ['Foo.sfv', false], ['Foo.diz', false], ['Foo.m3u', false], ['Foo.cue', false], ['Foo.log', false],
  ['foo.bad', false], ['foo.md5', false], ['foo-sha1', false], ['foo.p01', false], ['foo.par2', false], ['foo-rev', false],
  ['100%.nfo', false], ['Foo [01 of 12].mp3', false], ['[IMDB] Foo.nfo', false], ['-[IMDB]Foo.nfo', false], ['Foo [Cd5Coll3ct0r].nfo', false], ['Foo (12F).nfo', false], ['Foo (10MB).avi', false], ['Foo_screens_Foo.nfo', false],
  ['results.nfo', false], ['rushchk.log', false], ['Foo.auCDtect.log.nfo', false], ['WS_FTP.log', false],
  ['(Incomplete) Foo', true], ['[BP] Foo', true], ['-nuked-Foo', true], ['NUKED-Foo', true], ['(no-nfo) Foo', true], ['_missing_files_Foo', true], ['Foo-Bar Baz-GRP', true], ['Foo Bar', true], ['Foo.Bar.Baz-GRP ', true],
  ['www.site.com.nfo', false], ['Foo.www.site.com.nfo', false], ['www.thug.com', true], ['WWW.Tree.org', true], ['www.a-wax.com.nfo', false],
  ['tde.png', false], ['nf-2012.jpg', false], ['rules.nfo', false], ['site.rules.nfo', false], ['hs-rules.nfo', false], ['aOr.nfo', false], ['a51.nfo', false], ['StarBase.NFO', false], ['00-CRC.100.nfo', false],
  ['Foo.torrent', false], ['Foo.!ut', false], ['Foo.bc!', false], ['Foo.dat', false],
];

const specialPaths = [
  ['/share/Movie.2010.1080p.BDr.x264-GRP/sample/sample.m2ts', false],
  ['C:\\Share\\Movie.BDr.GRP\\Sample\\x.ts', false],
  ['/share/Movie.2010.BDr.x264-GRP/sample/y.avi', false],
  ['/share/Movie.2010.x264-GRP/proof/proof.jpg', false],
  ['/share/Movie.2010.x264-GRP/proof/proof.png', false],
  ['/share/Movie.2010.x264-GRP/proof/proof.txt', false],
  ['/share/Movie.2010.x264-GRP/proof/proof.r00', false],
  ['/share/Movie.2010.x264-GRP/Proof/proof.nfo', false],
  ['/share/Music/Artist-Album-2010-GRP/Covers/front.jpg', false],
  ['/share/Music/Artist-Album-2010-GRP/covers/front.jpg', false],
  ['/share/XXX/Foo-GRP/Covers/front.jpg', false],
  ['/share/Music/Artist-Album-FLAC-2010-GRP/foo.log', false],
  ['/share/Music/Artist-Album-2010-GRP/foo.log', false],
  ['/share/Music/Artist-Album-2010-GRP/foo-log.jpg', false],
  ['/share/Music/Artist-(LOSSLESS)-GRP/foo.log', false],
  ['/share/TV/Show.S01E02.HDTV-GRP/show.s01e02.nfo', false],
  ['/share/TV/Show.2010.HDTV-GRP/show.nfo', false],
  ['/share/TV/Show.2010.HDTV-GRP/Show.S01E02.nfo', false],
];

const randomWord = () => pick(wordList);
const randomName = (withExt) => {
  const partCount = 1 + Math.floor(rnd() * 4);
  let name = '';
  for (let i = 0; i < partCount; i++) {
    if (i) {
      name += pick(separators);
    }

    name += randomWord();
  }

  if (chance(0.15)) {
    name = pick(['-', '.', '_', '(', ' ', '[']) + name;
  }

  if (chance(0.1)) {
    name += pick(['-GRP', '-grp', '-Åsa', '-GRÅ', '-RiTUAL', '-MeGaHeRTZ', '-PsO', '-Cheetah-TV', ' (1)', '(2)', '-1']);
  }

  if (chance(0.03)) {
    name = pick(['a', 'ab', '1', '12', 'x']);
  }

  if (chance(0.03)) {
    name = [...'0123456789abcdef'].sort(() => rnd() - 0.5).join('').slice(0, pick([16, 32, 40]));
  }

  if (withExt) {
    const ext = pick(extensions);
    return ext ? `${name}.${ext}` : name;
  }

  return name;
};

// All size boundaries used by the rules (and neighbours)
const boundarySizes = new Set([-1, 0, 1, 2, 9, 10, 11, 12, 35, 36, 37, 38, 100, 1023, 1024, 1025]);
for (const rule of rules) {
  for (const base of [rule.minSize, rule.maxSize]) {
    if (base >= 0) {
      [base - 1, base, base + 1].forEach(v => v >= 0 && boundarySizes.add(v));
    }
  }
}
const boundaryList = [...boundarySizes].filter(v => v >= 0);
const randomSize = () => {
  if (chance(0.7)) {
    return pick(boundaryList);
  }

  return Math.floor(rnd() ** 3 * 5 * 1024 * 1024 * 1024);
};

const corpus = [];
for (let n = 0; n < itemCount; n++) {
  const root = pick(roots);
  const sep = root.includes('\\') ? '\\' : '/';
  const depth = Math.floor(rnd() * 3);
  let dir = root;
  for (let d = 0; d < depth; d++) {
    dir += sep + (chance(0.5) ? pick(folders) : randomName(false));
  }

  if (chance(0.12)) {
    const [specialName, specialIsDir] = pick(specialNames);
    corpus.push({ path: `${dir}${sep}${specialName}`, isDir: specialIsDir, size: specialIsDir ? 0 : randomSize() });
    continue;
  }

  if (chance(0.05)) {
    const [specialPath, specialIsDir] = pick(specialPaths);
    corpus.push({ path: specialPath, isDir: specialIsDir, size: specialIsDir ? 0 : randomSize() });
    continue;
  }

  const isDir = chance(0.3);
  const name = randomName(!isDir);
  corpus.push({
    path: `${dir}${sep}${name}`,
    isDir,
    size: isDir ? 0 : randomSize(),
  });
}

// Run Python (the original script logic)
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'adl-diff-'));
const corpusFile = path.join(tmp, 'corpus.json');
const pyOut = path.join(tmp, 'python.json');
fs.writeFileSync(corpusFile, JSON.stringify(corpus));

const configDir = path.join(tmp, 'config');
fs.mkdirSync(configDir);
fs.copyFileSync(adlFile, path.join(configDir, 'ADLSearch.xml'));

const py = spawnSync('python3', [path.join(here, 'diff_harness.py'), configDir, corpusFile, pyOut], { encoding: 'utf8', maxBuffer: 1 << 28 });
process.stdout.write(py.stdout || '');
if (py.status !== 0) {
  console.error(py.stderr);
  process.exit(2);
}

const expected = JSON.parse(fs.readFileSync(pyOut, 'utf8'));

// Run JS
let mismatches = 0;
let jsMatches = 0;
const perRule = new Map();
for (let n = 0; n < corpus.length; n++) {
  const entry = corpus[n];
  const item = toItem(entry.path, entry.isDir);
  const matched = (await matchItem(rules, item, async () => entry.size)).map(r => r.index);
  jsMatches += matched.length;
  matched.forEach(i => perRule.set(i, (perRule.get(i) || 0) + 1));

  const same = matched.length === expected[n].length && matched.every((v, i) => v === expected[n][i]);
  if (!same) {
    mismatches++;
    if (mismatches <= 15) {
      console.log('MISMATCH', JSON.stringify(entry), 'js:', matched, 'python:', expected[n]);
    }
  }
}

const unusedRules = rules.filter(r => !perRule.has(r.index)).map(r => `${r.index}:${r.label}`);
console.log(`js: ${rules.length} rules, ${corpus.length} items, ${jsMatches} matches`);
console.log(`rules never matched by the corpus (coverage gaps): ${unusedRules.length ? unusedRules.join(' | ') : 'none'}`);
console.log(mismatches === 0 ? 'RESULT: identical to adlchecker.py' : `RESULT: ${mismatches} MISMATCHES`);
fs.rmSync(tmp, { recursive: true, force: true });
process.exit(mismatches === 0 ? 0 : 1);
