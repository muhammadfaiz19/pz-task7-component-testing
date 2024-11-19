/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary : '#161616',
      secondary : '#1A1A1A',
      text : '#DDDDDD',
      purple: {
        500: '#9B4DFF', // You can adjust these values as needed
      },
      pink: {
        500: '#EC4899',
      },
      red: {
        500: '#F87171',
      },
      blue : {
        500 : '#3B82F6'
      }
    },
    extend: {},
  },
  plugins: [],
}

