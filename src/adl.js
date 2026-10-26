// ADLSearch.xml parsing and item matching.
// This is a port of parse_adl_item and is_adl_match from adlchecker.py.

import { XMLParser } from 'fast-xml-parser';
import { compileAdlRegex } from './regex-convert.js';

const SOURCE_FILE = 'Filename';
const SOURCE_DIRECTORY = 'Directory';
const SOURCE_PATH = 'Full Path';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  // Search strings may contain significant whitespace
  trimValues: false,
  parseTagValue: false,
  parseAttributeValue: false,
  isArray: (name) => name === 'Search' || name === 'SearchGroup',
});

const textOf = (node) => {
  if (node === undefined || node === null) {
    return undefined;
  }

  if (typeof node === 'object') {
    return node['#text'] !== undefined ? String(node['#text']) : '';
  }

  return String(node);
};

// Same units as get_byte_size in adlchecker.py (anything unknown is bytes)
const toBytes = (sizeText, sizeType) => {
  const value = parseInt(sizeText, 10);
  if (Number.isNaN(value)) {
    throw new Error(`Invalid size "${sizeText}"`);
  }

  if (value < 0) {
    return -1;
  }

  switch ((sizeType || '').toLowerCase()) {
    case 'mib': return value * 1024 * 1024;
    case 'kib': return value * 1024;
    case 'gib': return value * 1024 * 1024 * 1024;
    default: return value;
  }
};

const trimLabel = (label) => (label || '').trim();

// Returns { rules, skipped, stats }
export const parseAdl = (xmlText) => {
  const text = xmlText.charCodeAt(0) === 0xFEFF ? xmlText.slice(1) : xmlText;
  const doc = parser.parse(text);

  if (!doc || !doc.ADLSearch) {
    throw new Error('Not an ADLSearch file (missing the ADLSearch root element)');
  }

  const searches = [];
  for (const group of doc.ADLSearch.SearchGroup || []) {
    if (group && group.Search) {
      searches.push(...group.Search);
    }
  }

  const rules = [];
  const skipped = [];
  const stats = {
    total: searches.length,
    inactive: 0,
    plainText: 0,
    unsupported: 0,
  };

  searches.forEach((entry, position) => {
    const searchNode = entry.SearchString;
    const pattern = textOf(searchNode) || '';
    const isRegex = searchNode && typeof searchNode === 'object' ? searchNode['@_RegEx'] : undefined;
    const isActive = textOf(entry.IsActive);

    // Same filter as in adlchecker.py: only active regular expression entries are used
    if (isActive !== '1') {
      stats.inactive++;
      return;
    }

    if (isRegex !== '1') {
      stats.plainText++;
      skipped.push({ position, label: trimLabel(textOf(entry.DestDirectory)), pattern, reason: 'Active entry is not a regular expression (skipped, same as adlchecker.py)' });
      return;
    }

    try {
      const sizeType = textOf(entry.SizeType);
      const rule = {
        // Position among the used rules (equal to the order in adlchecker.py)
        index: rules.length,
        position,
        label: trimLabel(textOf(entry.DestDirectory)),
        sourceType: textOf(entry.SourceType),
        pattern,
        regex: compileAdlRegex(pattern),
        minSize: toBytes(textOf(entry.MinSize), sizeType),
        maxSize: toBytes(textOf(entry.MaxSize), sizeType),
      };

      rule.hasSizeLimits = rule.minSize !== -1 || rule.maxSize !== -1;
      rules.push(rule);
    } catch (e) {
      stats.unsupported++;
      skipped.push({ position, label: trimLabel(textOf(entry.DestDirectory)), pattern, reason: e.message });
    }
  });

  return { rules, skipped, stats };
};

const sourceMatches = (rule, isDirectory) => {
  switch (rule.sourceType) {
    case SOURCE_FILE: return !isDirectory;
    case SOURCE_DIRECTORY: return isDirectory;
    case SOURCE_PATH: return true;
    default: return false;
  }
};

const sizeMatches = (rule, size) => {
  if (size < 0) {
    return false;
  }

  return (rule.minSize === -1 || size >= rule.minSize) && (rule.maxSize === -1 || size <= rule.maxSize);
};

// Path helpers (work with both separators, the paths come from the application)
export const stripTrailingSeparators = (p) => {
  let end = p.length;
  while (end > 1 && (p[end - 1] === '/' || p[end - 1] === '\\')) {
    end--;
  }

  return p.slice(0, end);
};

export const toItem = (rawPath, isDirectory) => {
  const path = stripTrailingSeparators(rawPath);
  const lastSeparator = Math.max(path.lastIndexOf('/'), path.lastIndexOf('\\'));
  return {
    path,
    name: lastSeparator === -1 ? path : path.slice(lastSeparator + 1),
    isDirectory,
  };
};

// Returns the list of rules matching the item.
// getSize is an async function returning the size in bytes (or -1 if it can't be read);
// it is called only if a rule that matches by name needs the size.
export const matchItem = async (rules, item, getSize) => {
  const matched = [];
  let size;

  for (const rule of rules) {
    if (!sourceMatches(rule, item.isDirectory)) {
      continue;
    }

    const subject = rule.sourceType === SOURCE_PATH ? item.path : item.name;
    if (!rule.regex.test(subject)) {
      continue;
    }

    if (!item.isDirectory && rule.hasSizeLimits) {
      if (size === undefined) {
        size = await getSize(item.path);
      }

      if (!sizeMatches(rule, size)) {
        continue;
      }
    }

    matched.push(rule);
  }

  return matched;
};

// Unique category labels (the DestDirectory values), in rule order
export const categoriesOf = (matchedRules) => {
  return [...new Set(matchedRules.map(rule => rule.label))];
};

// ADLSearch.ignorelist: one full path per line (same file that adlchecker.py reads)
export const parseIgnoreList = (text) => {
  const paths = new Set();
  for (const line of text.split(/\r?\n/)) {
    if (line.length) {
      paths.add(stripTrailingSeparators(line));
    }
  }

  return paths;
};
