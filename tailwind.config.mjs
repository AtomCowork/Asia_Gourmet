/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif']
    },
    extend: {
      backgroundColor: {
        backGround: '#ffffff',
        primary: '#004091',
        highlight: '#ffc700',
        dangerRed: '#b8311e',
        coralRed: '#d68285',
        softblue: '#8CBBF2',
        skyblue: '#CEE4FF'
      },
      textColor: {
        backGround: '#ffffff',
        primary: '#004091',
        secondary: '#2E343F'
      }
    }
  },
  plugins: []
}
