import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site: 'https://atomcowork.github.io'
	// base: '/Asia_Gourmet',
	// base: './',
	// trailingSlash: 'never',
	// build: {
	// 	// inlineStylesheets: 'always',
	// }
})
