/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        aliancia: {
          blue: '#00BFFF',
          black: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
}
