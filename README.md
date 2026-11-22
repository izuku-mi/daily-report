# Daily Report

Jana Priya Wines daily stock, sales, cash, and expense report.

## Structure

- `index.html` - application markup
- `styles.css` - shared design system and responsive styles
- `js/ledger.js` - ledger calculations and report validation
- `js/i18n.js` - Telugu/English translation and transliteration
- `js/app.js` - application state, UI, backup, and PDF/report actions
- `manifest.webmanifest`, `icon.svg`, `sw.js` - PWA metadata and offline support

Serve the folder through HTTP (for example `python3 -m http.server 4173`) because service workers require secure contexts or localhost.