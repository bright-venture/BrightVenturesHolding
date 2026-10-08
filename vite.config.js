import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { LANGS, PAGES, pagePath, renderPage, sitemap } from './src/content.js'

const root = import.meta.dirname

// Each page/language has an HTML shell (e.g. ar/services/index.html) whose
// placeholders are filled with the markup from src/content.js, so every page
// ships as complete HTML that search engines and link previews can read.
function prerender() {
  let server
  return {
    name: 'prerender',
    configureServer(s) {
      server = s
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith('/src/content.js')) {
        server.ws.send({ type: 'full-reload' })
        return []
      }
    },
    transformIndexHtml: {
      order: 'post',
      async handler(html, ctx) {
        // In dev, reload content.js on every request so edits show up without a restart.
        const render = server
          ? (await server.ssrLoadModule('/src/content.js')).renderPage
          : renderPage
        const dirs = ctx.path.split('/').filter((p) => p && !p.endsWith('.html'))
        const lang = dirs[0] === 'ar' ? 'ar' : 'en'
        const page = (lang === 'ar' ? dirs[1] : dirs[0]) || 'home'
        const { dir, head, body } = render(page, lang)
        return html
          .replace('<html lang="en">', () => `<html lang="${lang}" dir="${dir}">`)
          .replace('<!--head-->', () => head)
          .replace('<!--app-->', () => body)
      },
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap() })
    },
  }
}

export default defineConfig({
  plugins: [prerender()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        PAGES.flatMap((page) =>
          LANGS.map((lang) => [
            `${lang}-${page}`,
            resolve(root, `.${pagePath(page, lang)}index.html`),
          ]),
        ),
      ),
    },
  },
})
