"""Runs the matching logic of the ORIGINAL adlchecker.py (same file, unmodified) over a corpus.

Usage: python3 diff_harness.py <config dir containing ADLSearch.xml> <corpus.json> <output.json>

corpus.json: [{"path": str, "isDir": bool, "size": int}, ...]
output.json: [[matched rule index, ...], ...]  (index = position among the active regex rules)
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import adlchecker  # noqa: E402

config_dir, corpus_path, out_path = sys.argv[1:4]

with open(corpus_path, encoding='utf-8') as f:
    corpus = json.load(f)

sizes = {}
adlchecker.getsize_proxy = lambda full_path: sizes.get(full_path, -1)

adl = adlchecker.get_adl_items(adlchecker.object(Path=config_dir))

results = []
for entry in corpus:
    full_path = entry['path']
    # adlchecker.py works with names (last path segment)
    name = full_path.replace('\\', '/').rstrip('/').split('/')[-1]
    sizes[full_path] = entry['size']
    item = adlchecker.object(
        Type='Directory' if entry['isDir'] else 'File',
        Name=name,
        Directory=os.path.dirname(full_path),
        Path=full_path,
    )
    results.append([i for i, rule in enumerate(adl) if adlchecker.is_adl_match(rule, item)])

with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(results, f)

print(f'python: {len(adl)} rules, {len(corpus)} items, {sum(len(r) for r in results)} matches')
