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
        '13': '4rem',
        '14': '4.5rem',
      },
      colors: {
        'orange-1200': '#F8624C',
        'orange-1100': '#F26C4F',
        'orange-1300': '#DC664A',
        'gray-1200': '#9C9C9C',
        'gray-1100': '#C1C1C1',
        'gray-1300': '#8A8A8A',
        'dark-1200': '#131313'
      },

    },
  },
  plugins: [],
}
