# Bright Ventures Holding SAL — Website

Bilingual company site, live at https://brightventuresholding.com (Netlify, deploys on every push to `master`).

| Page | English | Arabic (RTL) |
|---|---|---|
| Home (group intro, Value of Agreement chart, Vardenia, Virgin Valley, Tomato Sky, Bright, Be Right) | `/` | `/ar/` |
| Founder & CEO | `/ceo/` | `/ar/ceo/` |

The old `/services/`, `/company/` and `/businesses/` addresses (and their `/ar/` versions) redirect to
the matching homepage section via `public/_redirects` (Netlify).

Content comes from Kimi handoff packages (latest: 12 October 2026, see `docs/`), ported into this Vite project.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
npm run images     # regenerate public/assets/ from assets-src/
```

## How it works

Every page is pre-rendered to complete HTML at build time, so search engines and link previews
(WhatsApp, LinkedIn…) see the real content, title and description of each page in each language.

| Path | Purpose |
|---|---|
| `src/content.js` | All page content, titles, descriptions and SEO tags. Every string is `t('English', 'Arabic')` |
| `src/style.css` | All styles (RTL tweaks under `[dir=rtl]`) |
| `src/main.js` | The only browser JS: the mobile menu toggle |
| `vite.config.js` | `prerender` plugin: fills each HTML shell from `content.js`, writes `sitemap.xml` |
| `index.html`, `ceo/`, `ar/…` | Identical HTML shells, one per page and language |
| `assets-src/` | Original images (edit or replace here, then `npm run images`) |
| `public/assets/` | Generated, optimized images (WebP in 700/1200px widths, favicons, `og-image.jpg`) |
| `public/robots.txt` | Points crawlers at the sitemap |
| `public/_redirects` | Netlify redirects for the pages merged into the homepage |
| `archive/unused-assets/` | Earlier images from the handoff that the site no longer uses |
| `docs/` | Handoff notes from each Kimi package |

## After deploying

- Submit `https://brightventuresholding.com/sitemap.xml` in Google Search Console.

## Open items (from handoff)

- Public contact details, CEO portrait and biography are still pending.
- Keep existing translations, ISO certification wording and supplied brand assets.
