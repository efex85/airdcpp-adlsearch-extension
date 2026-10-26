# ADL checker for AirDC++ Web Client

Checks your share against an `ADLSearch.xml` file (the same rules and the same matching logic as `adlchecker.py`).

* **Warnings in the event log** when a file or directory that matches a rule is added to the share (shown with severity *warning*).
* **Do not share matched files** (option, off by default): the matched file is left out of the share when the share is refreshed. Directories can be left out only when they are new in the share.
* **See all matches**: `/adl matches` (or the extension menu item *Show ADL matches*) opens the complete list, grouped by category, in the application's text viewer.
* **Scan the whole share** on demand: `/adl scan` or the menu item *Check the share against the ADL rules*.

## Install

AirDC++ doesn't install dependencies for extensions; everything is bundled in `dist/main.js`.

1. Copy the folder `airdcpp-adl-checker` (it contains `package.json` and `dist/main.js`) to the `extensions` directory in the application settings directory, e.g. `…/Settings/extensions/airdcpp-adl-checker`.
2. Restart the application (the directory is scanned only at startup).
3. Make sure `ADLSearch.xml` is in the application settings directory (the folder that contains `extensions`). Check the event log for `ADL checker: loaded N rules`.

Requires a Node.js version supported by the application (developed and tested on Node 22) and application API feature level 4 or newer. Opening the match list in the viewer needs feature level 6 or newer; with an older version the list is saved to `adl-matches.txt` in the extension's log directory instead.

## Settings

| Setting | Default | |
|---|---|---|
| Check files and directories when they are added to share | on | Warnings (and rejections). Existing files are checked again during share refreshes, but a file is warned about only once. |
| Do not share matched files and directories | off | |
| Ignore the items listed in ADLSearch.ignorelist | on | Exact full paths, one per line, in `ADLSearch.ignorelist` next to `ADLSearch.xml`. |
| Maximum number of individual warnings in a row | 100 | The rest is summarized in a single warning. |

`ADLSearch.xml` and `ADLSearch.ignorelist` are reloaded automatically when they change.

## Commands (hub/private chat; need admin or settings_edit permission)

`/adl scan`, `/adl matches`, `/adl list` (counts per category), `/adl reload`, `/help`

## Matching rules

Only active regular expression entries are used (`RegEx="1"`, `IsActive=1`), the same as in `adlchecker.py`: source types Filename / Directory / Full Path, size limits (B/KiB/MiB/GiB, -1 = no limit, ignored for directories). Boost regexes are converted to JavaScript ones; an entry whose pattern can't be converted exactly is skipped and reported in the event log instead of being guessed.

## Known limitations

* Verified against `adlchecker.py` with your `ADLSearch.xml` on ~364,000 generated names: identical results, with one known difference: the letters `İ`/`ı` (Python case-folds `İ` to `i`, JavaScript doesn't).
* The application's file validation hook payload isn't documented; the extension uses only its `path` field, and logs the property names it received once (see the extension log). If the path were missing, files would be accepted, never blocked.
* Left-out files stay on disk, they are simply not shared. After you disable the option, they are shared again on the next refresh.
