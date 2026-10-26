AirDCpp web client ADLSearch plugin \
use this to scan your own share for unwanted files. You will need a ADLSearch.xml (not included).

Quick install link: https://raw.githubusercontent.com/efex85/airdcpp-adlsearch-extension/main/quickinstall/airdcpp-adl-checker-1.0.3.tgz

1. Place your preferred ADLSearch.xml in /config
2. Go to Settings > Extensions > Extension catalog > Install from URL > Paste the link above to the latest build
3. Go back to "Manage installed" and click "Manage" on "airdcpp-adl-checker". Set the settings you want.
4. Profit!

You can run a manual scan trough the Manage dropdown, or view matches. The results are posted in the Events log.

Commands:

- /adl scan - checks the whole share against the ADL rules and reports the matches in the event log.
- /adl matches - opens the complete list of matches, grouped by category, with [not shared] marked on items that were kept out.
- /adl list - posts a short summary in the chat: the number of matches, the number kept out of the share, whether “Do not share” is on, and a count per category.
- /adl reload - reloads ADLSearch.xml right away. This isn’t normally needed, because the file reloads on its own when it changes. The check runs every 10 seconds.

<img width="946" height="523" alt="Screenshot 2026-10-26 210906" src="https://github.com/user-attachments/assets/7e21a23c-365e-4b0d-ae16-4a28ce424f29" />

<img width="1940" height="1041" alt="Screenshot 2026-10-26 211537" src="https://github.com/user-attachments/assets/454c9eb6-d446-4281-9834-01a8fdd1cf7c" />
