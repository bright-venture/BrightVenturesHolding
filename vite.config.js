import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const page = (p) => resolve(import.meta.dirname, p)

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: page('index.html'),
        services: page('services/index.html'),
        company: page('company/index.html'),
        ceo: page('ceo/index.html'),
      },
    },
  },
})
