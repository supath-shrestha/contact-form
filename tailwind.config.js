/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main': 'hsl(148, 38%, 91%)',
        'button': 'hsl(169, 82%, 27%)',
        'error': 'hsl(0, 66%, 54%)',
        'label': 'hsl(187, 24%, 22%)',
        'bcolor': 'hsl(186, 15%, 59%)',
      },
      fontFamily: {
        'karla': ["Karla", "sans-serif"],
      }
    },
  },
  plugins: [],
}

