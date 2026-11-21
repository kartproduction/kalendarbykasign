# Kalendar by Kasign — website

The public website for **Kalendar by Kasign**: https://kartproduction.github.io/kalendarbykasign/

It shows the designs, lets visitors try a sample of each collection, and sends them to the app.

- **Web app:** https://kartproduction.github.io/kalendar/
- **Android app (APK):** the download page picks the newest APK from [kartproduction/kalendar Releases](https://github.com/kartproduction/kalendar/releases)
- **App source:** https://github.com/kartproduction/kalendar

> **View-only source.** The website, designs, photos and branding are not free to copy or reuse. See [LICENSE](LICENSE).

## Folder structure

```
kalendarbykasign/
├── index.html        main page (design samples, features, FAQ)
├── download.html     phone download page ("GET THE APP")
├── privacy.html
├── license.html
├── config.js         points the site at the app repo (edit here)
├── links.js          finds the newest APK and fills the links
├── LICENSE
├── README.md
└── .github/workflows/  publishes the site to GitHub Pages
```

Only website files belong in this repository. App files (`www/`, `package.json`, `capacitor.config.json`, build scripts) belong in the `kalendar` repository.

## config.js

```js
window.KK = {
  appRepo: "kartproduction/kalendar",
  webApp: "https://kartproduction.github.io/kalendar/",
  apkUrl: ""   // leave empty to use the newest APK in Releases
};
```

## Update the site

Upload the changed file in the repo root (**Add file > Upload files**). GitHub Pages publishes it within a minute or two. Use a hard refresh to see changes.

## Contact

GitHub: [@kartproduction](https://github.com/kartproduction)

## Design previews (shots/)

The "See them in action" strip on the home page shows `shots/01.jpg` to `shots/10.jpg`. If a `.jpg` is missing, it falls back to `shots/01.png` to `shots/10.png`, which are previews made from the app with placeholder artwork. To show your own photos: open the app, choose a design, **Save PNG** (portrait), convert it to a `.jpg` about 360×640 or larger, and upload it as `shots/NN.jpg` (01 = Pure Minimal, 02 = Modern Neutral, 03 = Mountain Serenity, 04 = Earth & Sky, 05 = Daily Inspiration, 06 = Life in Perspective, 07 = Nepali Heritage, 08 = Nepal Panorama, 09 = Botanical Grace, 10 = Blooming Seasons).

## Link preview image

`og-image.png` (1200×630) is the picture shown when the site is shared on WhatsApp, Facebook and similar apps. Keep it in the top folder.

## Calendar data (Nepali dates and festivals)

`data/calendar-data.json` is read by the app. Edit it when the government publishes a new holiday list or you correct a BS year, then run `python3 scripts/check-calendar-data.py data/calendar-data.json` and commit. Full steps are in `data/README.md`. Raise `version` every time, or the app ignores the change.

## Other pages and features

- `credits.html`: third-party licenses, fonts, photographs and data sources.
- "What's new" list on the home page: edit the `<ul class="wn">` list in `index.html`.
- Nepali version of the home page: the **नेपाली / English** button in the top bar. Translations are in the `NS` list at the top of the script in `index.html`. Please have a Nepali speaker review them.
