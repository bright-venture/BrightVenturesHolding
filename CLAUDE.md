# Bright Ventures Holding SAL website

Vanilla JS + Vite static site, pre-rendered at build time. No framework. Live on Netlify (push to `master` deploys).

- `src/content.js` holds all content and renders each page as an HTML string via `renderPage(page, lang)`; the `prerender` plugin in `vite.config.js` injects it into the HTML shells (`index.html`, `ar/index.html`) in both dev and build. Content runs in Node at build time: no `window`/`document` there. Browser JS is only `src/main.js`.
- All visible text goes through `t(en, ar)`. Any new or changed copy needs both English and Arabic; do not alter existing translations or certification wording (ISO 9001:2015) without the user's say-so.
- Internal links must use `u('/path/')` so Arabic pages link to `/ar/...`.
- Adding a page: add it to `PAGES` and the title/description maps in `meta()`, the page function map in `renderPage()`, the nav list in `header()`, and create `<name>/index.html` and `ar/<name>/index.html` (copies of `index.html`).
- Images: originals in `assets-src/`, run `npm run images` to regenerate `public/assets/` (never edit that folder by hand). Photos are referenced with `${photo('name')}` (700/1200 px srcset).
- Updates arrive as Kimi zips (`site/app.js`, `site/style.css`, `site/assets/`). Port them by mapping into `src/content.js` (keep `u()` links, `photo()` images, the pre-render section at the bottom) and `src/style.css` (drop Kimi's Google Fonts `@import` and keep our Fontsource `@import`s at the top: fonts are self-hosted; `.lang` becomes `.nav .lang` because it is a link here). The rendered text, links and layout should match the zip exactly; compare against the zip served locally.
- `public/_headers` sets a strict Content-Security-Policy: only the site's own files (fonts are self-hosted via `@fontsource/*`), no inline scripts, styles or event handlers. Kimi's skip link uses inline `style`/`onfocus`/`onblur`; when porting, use `<a class="skip" href="#main">` (styled in `src/style.css`). Any new external resource (embed, analytics, font) must be added to the policy.
- Removed pages get a 301 in `public/_redirects` (English and `/ar/`).
- The Founder & CEO page, its menu link and the homepage leadership strip were removed at the user's request (12 Oct 2026). Kimi packages may still contain them: leave them out when porting unless the user asks otherwise.
- Vardenia uses its English logo (`vardenia-logo-en.webp`) on Arabic pages too, at the user's request; Kimi packages switch to `vardenia-logo-ar.webp` in Arabic, so drop that when porting. The Tomato Sky card shows the official logo (`assets-src/tomato-sky-logo.jpg`, from the user's PDF) instead of Kimi's `tomato-sky-hero.webp` image; keep it when porting. Avoid em dashes (—) in site copy.
- Verify with `npm run build`; format with `npm run format`.
