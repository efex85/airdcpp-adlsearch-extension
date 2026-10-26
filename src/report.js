// Text formats for the list of matched items

import { ACTION_REJECTED } from './store.js';

const pad = (n) => String(n).padStart(2, '0');

const formatTime = (date) => {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
};

// Groups the matches by category (the order follows the order of the rules in the ADL file)
const groupByCategory = (records, categoryOrder) => {
  const groups = new Map(categoryOrder.map(category => [category, []]));
  for (const record of records) {
    for (const category of record.categories) {
      if (!groups.has(category)) {
        groups.set(category, []);
      }

      groups.get(category).push(record);
    }
  }

  for (const [category, items] of groups) {
    if (!items.length) {
      groups.delete(category);
    } else {
      items.sort((a, b) => a.path.localeCompare(b.path));
    }
  }

  return groups;
};

const countTypes = (records) => {
  const directories = records.filter(r => r.type === 'directory').length;
  return { files: records.length - directories, directories };
};

// Full list (same layout as the output of adlchecker.py: category, followed by the paths)
export const formatReport = ({ records, categoryOrder, adlFile, ruleCount, now = new Date() }) => {
  const { files, directories } = countTypes(records);
  const lines = [
    'ADL checker: matched items',
    `Created:     ${formatTime(now)}`,
    `ADL file:    ${adlFile}`,
    `Rules used:  ${ruleCount}`,
    `Matches:     ${records.length} (${files} files, ${directories} directories)`,
    '',
  ];

  for (const [category, items] of groupByCategory(records, categoryOrder)) {
    lines.push(category);
    for (const record of items) {
      lines.push(record.action === ACTION_REJECTED ? `${record.path}    [not shared]` : record.path);
    }

    lines.push('');
  }

  if (!records.length) {
    lines.push('No matches.');
  }

  return lines.join('\n');
};

// Short overview for chat
export const formatSummary = ({ records, categoryOrder, adlFile, ruleCount, rejectEnabled }) => {
  const { files, directories } = countTypes(records);
  const rejected = records.filter(r => r.action === ACTION_REJECTED).length;
  const lines = [
    '',
    `ADL checker: ${records.length} matched items (${files} files, ${directories} directories), ${rejected} kept out of share`,
    `Rules: ${ruleCount} from ${adlFile}`,
    `Do not share matched items: ${rejectEnabled ? 'on' : 'off'}`,
  ];

  for (const [category, items] of groupByCategory(records, categoryOrder)) {
    lines.push(`  ${category}: ${items.length}`);
  }

  if (records.length) {
    lines.push('Use /adl matches to open the complete list');
  }

  return lines.join('\n');
};
