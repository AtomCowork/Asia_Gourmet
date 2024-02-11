import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
import path from 'node:path'

const isGitHubPages = true
const folderName = path.basename(process.cwd()) + '/'
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'
const base = mode === 'production' && isGitHubPages ? '/' + folderName : '/'

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://atomcowork.github.io',
  // root: 'src',
  base,
  mode,
  envDir: './',
  publicDir: '../public',
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  },
  build: {
    outDir: './dist',
    assetsDir: './'
  }
})
