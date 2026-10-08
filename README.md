# Bright Ventures Holding SAL — Website

Bilingual (English / Arabic, RTL) company site: Home, Services, Company, Founder & CEO.
Originally generated with Kimi; adapted here into a Vite multi-page project.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
```

`dist/` is plain static files — deploy to any static host (Netlify, Vercel, Cloudflare Pages, S3…).

## Structure

| Path | Purpose |
|---|---|
| `index.html`, `services/`, `company/`, `ceo/` | Identical page shells; `src/app.js` picks the page from the URL path |
| `src/app.js` | All content and markup. Every string is `t('English', 'Arabic')` |
| `src/style.css` | All styles (RTL tweaks under `[dir=rtl]`) |
| `public/assets/` | Images served at `/assets/...` |
| `archive/unused-assets/` | Earlier images from the handoff that the site no longer references |
| `docs/kimi-handoff-README.txt` | Original handoff notes |

Language is stored in `localStorage` (`bright-language`) and toggled by the header button.

## Open items (from handoff)

- CEO portrait, biography and contact details are still pending.
- Keep existing translations, ISO certification wording and supplied brand assets.
