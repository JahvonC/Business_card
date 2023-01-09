/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['*.html'],
  content: ['./components/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}