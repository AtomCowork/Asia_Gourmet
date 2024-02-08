import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://atomcowork.github.io',
  // base: '/Asia_Gourmet',
  // build: {
  // inlineStylesheets: 'always',
  // }

  // base: './',
  // brotliSize: false,
  // trailingSlash: 'never',
  vite: {
    build: {
      rollupOptions: {
        output: {
          // entryFileNames: 'entry.[hash].mjs',
          // chunkFileNames: 'chunks/chunk.[hash].mjs',
          // assetFileNames: 'dist/_astro/asset.[hash][extname]'
          // assetFileNames: '_astro/output[extname]'
          // base: './'
        }
      }
    }
  }
})
