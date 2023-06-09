/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'rgba-red': 'rgba(230, 75, 47, 0.59)',
      },
    },
    fontFamily: {
      'noto-serif': ['"Noto Serif"', 'serif']
    },
  },
  plugins: [],
}
