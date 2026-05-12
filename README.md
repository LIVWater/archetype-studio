# Archetype Studio — Website

Marketing-with-purpose website for Archetype Studio. Static HTML, zero build step.

## Structure

```
.
├── index.html           # Homepage
├── about.html           # About / studio story
├── portfolio.html       # Work / case studies
├── shop.html            # Services & packages (with cart)
├── assets/
│   ├── images/          # Page imagery (hero bgs, bento, flip cards, CTA bg)
│   ├── logos/           # Brand mark + wordmark SVGs
│   └── clients/         # Client logos
├── vercel.json          # Vercel routing + cache headers
├── .gitignore
└── README.md
```

All four pages share a consistent navigation bar (Home · About · Work · Shop + "Start a Project" CTA) and a consistent CTA-section + footer pattern, originally extracted from `shop.html`.

## Local preview

No build step. Open `index.html` directly, or serve the folder:

```bash
# Python (built-in)
python3 -m http.server 8000

# Node
npx serve .
```

Visit http://localhost:8000.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, **Import Project** → pick the repo.
3. Framework Preset: **Other** (static). Build command: leave blank. Output directory: leave blank (root).
4. Deploy.

`vercel.json` enables `cleanUrls` (so `/about` resolves to `about.html`), sets long cache headers on `/assets/*`, and adds basic security headers.

## Deploy to GitHub Pages

1. Push to a repo.
2. **Settings → Pages → Source: main / root**.
3. Site is published at `https://<user>.github.io/<repo>/`.

GitHub Pages does not honour `vercel.json` — `cleanUrls` will not be active there, so the in-page links (which already include `.html`) are what makes the site work on either host.

## Editing

Each page is a single self-contained `.html` file with inline `<style>` and `<script>`. The shared nav + footer markup is duplicated across pages on purpose (no build step). When changing nav links or footer columns, update all four files.

## Asset paths

All asset references are relative to the page (`assets/images/…`, `assets/logos/…`, `assets/clients/…`). Don't introduce `../` paths.
