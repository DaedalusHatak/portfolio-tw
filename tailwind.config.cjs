/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3.5rem',
      },
      colors: {
        'orange-1200': '#F8624C',
        'orange-1100': '#F26C4F'
      },
    },
  },
  plugins: [],
}
