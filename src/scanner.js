// Walks the shared directories on disk and runs the ADL rules for every file and directory.
// The share roots themselves are not checked (same as in adlchecker.py).

import fs from 'node:fs';
import path from 'node:path';

import { matchItem, toItem } from './adl.js';

const CHUNK_SIZE = 64;

// Size of a file in bytes, -1 if it can't be read
export const statSize = async (filePath) => {
  try {
    const stat = await fs.promises.stat(filePath);
    return stat.isFile() ? stat.size : -1;
  } catch (e) {
    return -1;
  }
};

const yieldToEventLoop = () => new Promise(resolve => setImmediate(resolve));

// options:
//   roots        directories to scan
//   rules        parsed ADL rules
//   isIgnored    (path) => boolean, items that are never reported (ADLSearch.ignorelist)
//   isExcluded   async (path) => boolean, items that are not part of the share (the item and its content are skipped)
//   shouldStop   () => boolean
//   getSize      async (path) => number
export const scanPaths = async ({ roots, rules, isIgnored, isExcluded, shouldStop, getSize = statSize, onError }) => {
  const stats = { files: 0, directories: 0, excluded: 0, errors: 0 };
  const results = [];
  const visitedLinks = new Set();
  const pending = [...roots];

  const processEntry = async (directory, entry) => {
    const fullPath = path.join(directory, entry.name);
    let isDirectory = entry.isDirectory();
    let isFile = entry.isFile();

    if (entry.isSymbolicLink()) {
      try {
        const target = await fs.promises.stat(fullPath);
        isDirectory = target.isDirectory();
        isFile = target.isFile();

        if (isDirectory) {
          // Avoid endless loops
          const real = await fs.promises.realpath(fullPath);
          if (visitedLinks.has(real)) {
            return;
          }

          visitedLinks.add(real);
        }
      } catch (e) {
        stats.errors++;
        if (onError) {
          onError(fullPath, e);
        }

        return;
      }
    }

    if (!isDirectory && !isFile) {
      return;
    }

    if (isExcluded && await isExcluded(fullPath)) {
      stats.excluded++;
      return;
    }

    const item = toItem(fullPath, isDirectory);
    if (isDirectory) {
      stats.directories++;
      pending.push(fullPath);
    } else {
      stats.files++;
    }

    if (isIgnored && isIgnored(item.path)) {
      return;
    }

    const matched = await matchItem(rules, item, getSize);
    if (matched.length) {
      results.push({ item, rules: matched });
    }
  };

  while (pending.length) {
    if (shouldStop && shouldStop()) {
      break;
    }

    const directory = pending.pop();
    let entries;
    try {
      entries = await fs.promises.readdir(directory, { withFileTypes: true });
    } catch (e) {
      stats.errors++;
      if (onError) {
        onError(directory, e);
      }

      continue;
    }

    for (let start = 0; start < entries.length; start += CHUNK_SIZE) {
      const chunk = entries.slice(start, start + CHUNK_SIZE);
      await Promise.all(chunk.map(entry => processEntry(directory, entry).catch((e) => {
        stats.errors++;
        if (onError) {
          onError(path.join(directory, entry.name), e);
        }
      })));

      // Keep the extension responsive (the application pings it regularly)
      await yieldToEventLoop();
    }
  }

  return { results, stats };
};
