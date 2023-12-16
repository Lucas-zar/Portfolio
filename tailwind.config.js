/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/*.html","*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

