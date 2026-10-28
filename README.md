# Kalendar by Kasign

An offline-first calendar app and web app with 10 designs, portrait and landscape layouts, PNG/PDF export, Nepali (BS) dates, festivals, events, and customization.

**Live web app:** https://kartproduction.github.io/kalendarbykasign/
**Android APK:** see the [Releases](https://github.com/kartproduction/kalendar/releases) page

> **View-only source.** This repository is public so you can see how the app was made and learn from it. The code is **not** free to copy, host, or reuse. See [License](#license).

---

## Features

- 10 calendar designs (colors, fonts, quotes, art styles)
- Portrait and landscape layouts
- Export as PNG or PDF
- Nepali Bikram Sambat (BS) dates, 2082–2088 BS, alongside AD dates
- Festivals and public events
- Add your own events
- Works offline after the first visit
- Installable on a phone home screen (web app) or as an Android app

## How it was made

| Part | Technology |
| --- | --- |
| App code | HTML, CSS, JavaScript (single `www/index.html`) |
| Android app | [Capacitor](https://capacitorjs.com/) (Filesystem and Share plugins) |
| PDF export | [jsPDF](https://github.com/parallax/jsPDF) (MIT) |
| Web hosting | GitHub Pages, deployed by GitHub Actions |
| APK builds | GitHub Actions (debug build and signed release) |

**Project structure**

```
kalendar/
├── www/                 # the app (HTML, CSS, JS, assets)
├── scripts/             # build helper scripts
├── .github/workflows/   # GitHub Actions (web deploy, APK build)
├── capacitor.config.json
├── package.json
├── LICENSE
└── README.md
```

**Notes on the data**

- `DESIGNS` holds names, colors, fonts, quotes, art type, and collection for each design.
- `BSD` holds the BS month lengths for 2082–2088. Year 2083 matches published calendars; other years come from public tables and are not independently verified. Anchor date: Baisakh 1, 2083 = 14 Apr 2026.
- `FEST` is the festival list, stored as `[start, end, name]` in AD dates.

## Build notes (for the maintainer)

<details>
<summary>Build the APK online (no Android Studio needed)</summary>

1. Push this repo to GitHub.
2. Open **Actions → Build APK → Run workflow**.
3. After a few minutes, the APK `Kalendar-v1.0.N.apk` appears under **Releases**.

This is a debug-signed build for testing. Each run uses a new debug key, so a newer build may not install over an older one (uninstall first). For updates that install over the top, use the signed release below.
</details>

<details>
<summary>Local setup</summary>

```
npm install @capacitor/core @capacitor/android @capacitor/filesystem @capacitor/share jspdf
npm install -D @capacitor/cli
npx cap add android
npm run sync
```

Then open `android/` in Android Studio, or run `npm run apk:debug`. The APK is created in `android/app/build/outputs/apk/debug/`. Test on a real phone.
</details>

<details>
<summary>Signed release APK</summary>

1. Create a keystore once and back it up:
   `keytool -genkey -v -keystore release.jks -alias kalendar -keyalg RSA -keysize 2048 -validity 10000`
2. In GitHub **Settings → Secrets**, add `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD`, `KEY_PASSWORD`, and `KEY_ALIAS`.
3. Tag and push: `git tag v1.0.0 && git push origin v1.0.0`. The signed APK is attached to the release.

Never commit the keystore or passwords. Use the same key for every update.
</details>

<details>
<summary>Web app (GitHub Pages)</summary>

Go to **Settings → Pages → Source: GitHub Actions**. The deploy workflow publishes the `www/` folder. The app works offline after the first visit.
</details>

<details>
<summary>Photos and app icon</summary>

- Add `03.jpg` to `10.jpg` in `www/assets/images/`. They load automatically. Photos added inside the app last only for the session.
- `assets/icon-only.png` is a placeholder. Replace it with your logo, then run `npx @capacitor/assets generate --android` after `npx cap add android`.
</details>

If a build fails, check the current Capacitor Android docs, because Capacitor, Gradle, and Java requirements change over time.

## Contributing

Bug reports and suggestions are welcome through [Issues](https://github.com/kartproduction/kalendar/issues). Pull requests are accepted for review, but the owner decides what gets merged. By submitting a contribution, you agree it may be used in this project under the same license.

## License

Copyright (c) 2026 kartproduction. All rights reserved.

The source code is visible for **viewing and learning only**. You may not copy, host, redistribute, modify for your own use, or build derivative products from it without written permission. See [LICENSE](LICENSE) for the full terms.

Third-party components (such as jsPDF, Capacitor, and any fonts) keep their own licenses. Photos, fonts, and quotes used in the designs have their own rights and are not covered by any permission to reuse this code.

## Contact

GitHub: [@kartproduction](https://github.com/kartproduction)
