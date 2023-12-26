/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'primary' : 'rgb(var(--primary))',
      'secondary' : 'rgb(var(--secondary))',
      'muted' : 'rgb(var(--muted))',
      'warning' : 'rgb(var(--warning))',
      'danger' : 'rgb(var(--danger))',
      'black' : 'rgb(var(--black))',
    },
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
      serif: ['Cormorant Garamond', 'serif']
    },
    extend: {},
  },
  plugins: [],
};