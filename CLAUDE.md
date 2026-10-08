# Bright Ventures Holding SAL website

Vanilla JS + Vite multi-page static site. No framework.

- `src/app.js` renders every page client-side into `#app`; route = first URL path segment (`home`, `services`, `company`, `ceo`).
- All visible text goes through `t(en, ar)`. Any new or changed copy needs both English and Arabic; do not alter existing translations or certification wording (ISO 9001:2015) without the user's say-so.
- Adding a page: create `<name>/index.html` (copy of `index.html`), add it to `vite.config.js` inputs, the nav list in `header()`, the `render()` switch and the title map.
- Assets live in `public/assets/` and are referenced as `/assets/...`.
- Run `npm run dev` to preview, `npm run build` to verify, `npm run format` to format.
