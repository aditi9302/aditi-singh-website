# aditi-singh.com

Source for my personal academic website, deployed with **GitHub Pages** at <https://www.aditi-singh.com>.

A small static, multi-page site in a *dark-academia* style with a light/dark toggle that follows the visitor across pages. No build step — just plain HTML, CSS, and a little JavaScript.

## About

I am an Assistant Professor at the [Centre for Advanced Financial Research and Learning (CAFRAL)](https://www.cafral.org.in/), an organisation promoted by the [Reserve Bank of India](https://www.rbi.org.in/). The site has three pages:

| URL | Source |
| --- | --- |
| `/` | [`index.html`](index.html) — home (bio, contact, research areas) |
| `/research` | [`research/index.html`](research/index.html) — working papers, work in progress, book chapters, policy papers |
| `/teaching` | [`teaching/index.html`](teaching/index.html) — courses at Shiv Nadar University and Brown University |

## Repository structure

```
.
├── index.html              # Home page (served at /)
├── research/index.html     # Research page (served at /research)
├── teaching/index.html     # Teaching page (served at /teaching)
├── image website.jpg       # Hero portrait
├── favicon-dark.svg        # Tab icon for dark theme
├── favicon-light.svg       # Tab icon for light theme
├── CNAME                   # Custom domain (www.aditi-singh.com)
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
├── robots.txt              # Crawler directive
├── sitemap.xml             # Sitemap for search engines
├── STYLE-GUIDE.md          # Design system / brand reference for new documents
├── .gitignore
└── README.md               # This file
```

## Design

- **Typography:** [EB Garamond](https://fonts.google.com/specimen/EB+Garamond) (body) and [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (display) via Google Fonts.
- **Palette:** Espresso background with antique-gold accents in dark mode; warm parchment with the same accents in light mode.
- **Theme toggle:** A sun/moon button in the nav switches the palette. The choice is carried across pages via a URL parameter and persisted in `localStorage`, so it does not reset as the visitor navigates or returns.
- **Favicons:** `favicon-dark.svg` and `favicon-light.svg` swap to match the active theme.
- **Clean URLs:** `/research` and `/teaching` are served via folder-based routing (`research/index.html`, `teaching/index.html`), so no `.html` extensions appear in addresses.

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch (root). The `CNAME` file binds it to `www.aditi-singh.com`; the apex (`aditi-singh.com`) is configured upstream to 301-redirect to `www` with the path preserved.

## Development

The site is plain static HTML and needs no build step. To edit:

1. Clone the repo.
2. Edit the relevant HTML file.
3. Open it directly in a browser for a quick visual check, or run a tiny local server (e.g. `python -m http.server`) if you want the clean URLs to resolve locally.
4. Commit and push — GitHub Pages rebuilds automatically.

## Analytics

Google Analytics 4 (`gtag.js`) is loaded in the `<head>` of each page for basic page-view tracking.

---

© Aditi Singh.
