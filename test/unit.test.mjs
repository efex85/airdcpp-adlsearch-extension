import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { convertPattern, compileAdlRegex } from '../src/regex-convert.js';
import { parseAdl, matchItem, toItem } from '../src/adl.js';
import { formatReport } from '../src/report.js';

const here = path.dirname(fileURLToPath(import.meta.url));

test('regex conversion: case-insensitive by default', () => {
  assert.ok(compileAdlRegex('\\.exe$').test('SETUP.EXE'));
});

test('regex conversion: (?-i: group stays case-sensitive', () => {
  const re = compileAdlRegex('(?-i:ABC)def');
  assert.ok(re.test('ABCDEF'));
  assert.ok(!re.test('abcdef'));
});

test('regex conversion: \\d and \\w are Unicode aware like Boost', () => {
  assert.ok(compileAdlRegex('^\\w+$').test('åäö'));
});

test('regex conversion: unsupported constructs throw instead of guessing', () => {
  assert.throws(() => convertPattern('[\\W]'));
});

test('the real ADLSearch.xml parses (56 active regex rules, none skipped)', () => {
  const parsed = parseAdl(fs.readFileSync(path.join(here, 'ADLSearch.xml'), 'utf8'));
  assert.equal(parsed.rules.length, 56);
  assert.equal(parsed.skipped.length, 0);
  assert.ok(parsed.rules.every(r => /^<.*>$/.test(r.label)));
});

test('matching: size limits and directories', async () => {
  const xml = `<ADLSearch><SearchGroup><Search><SearchString RegEx="1">\\.mkv$</SearchString><SourceType>Filename</SourceType><DestDirectory>small</DestDirectory><IsActive>1</IsActive><MaxSize>1</MaxSize><MinSize>-1</MinSize><SizeType>KiB</SizeType></Search></SearchGroup></ADLSearch>`;
  const { rules } = parseAdl(xml);
  assert.equal((await matchItem(rules, toItem('/a/x.mkv', false), async () => 1024)).length, 1);
  assert.equal((await matchItem(rules, toItem('/a/x.mkv', false), async () => 1025)).length, 0);
});

test('report marks rejected items', () => {
  const text = formatReport({
    records: [{ path: '/a/x.exe', type: 'file', categories: ['<  E  >'], action: 'rejected' }],
    categoryOrder: ['<  E  >'], adlFile: 'ADLSearch.xml', ruleCount: 1,
  });
  assert.match(text, /\/a\/x\.exe {4}\[not shared\]/);
});

test('report lists unreadable items', () => {
  const text = formatReport({
    records: [], categoryOrder: [], adlFile: 'ADLSearch.xml', ruleCount: 1,
    unreadable: [{ path: '/a/locked', reason: 'EACCES: permission denied' }],
  });
  assert.match(text, /Unreadable: {2}1 /);
  assert.match(text, /\/a\/locked {4}\[EACCES: permission denied\]/);
});
