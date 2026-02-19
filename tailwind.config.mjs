/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F1DE',
        coffee: '#463325',
        'coffee-light': '#6B5D4D',
        amber: '#D4A84B',
        'light-beige': '#E8E4DA',
        divide: '#E5E0D5',
        orange: '#E58E35',
        sage: '#A9C6B8',
        mustard: '#CDB245',
        'dark-strip': '#752A18',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
