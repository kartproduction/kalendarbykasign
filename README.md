# Kalendar by Kasign — main website

The public website for the Kalendar app. It is a separate project from the app: it only needs plain files, no build step.

## Pages
- `index.html` — main website (designs, features, FAQ, download buttons)
- `download.html` — phone download page ("GET THE APP"). Android visitors to the homepage are sent here once per visit; delete the small script near the top of `index.html` to turn that off.
- `privacy.html` — contact email is set.

## Setup
1. Open `config.js` and set `appRepo` to your app repository (`owner/repo`).
   - Download buttons link to the newest `.apk` in that repo's Releases.
   - "Open app" links to the web app at `https://OWNER.github.io/REPO/` (override with `webApp`).
   - Or set `apkUrl` to a direct APK link.
2. Create a GitHub repo for the website and push these files to `main`.
3. Settings > Pages > Source: **GitHub Actions**. The site publishes at `https://YOUR-USERNAME.github.io/WEBSITE-REPO/`.

Photos, quotes and fonts remain the property of their owners.
