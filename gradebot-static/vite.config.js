import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/landingPage/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        'getting-started': resolve(__dirname, 'getting-started.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
})
