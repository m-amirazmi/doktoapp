const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        secondary: colors.sky,
        info: colors.blue,
        success: colors.green,
        warning: colors.yellow,
        danger: colors.red,
        light: '#CBD5E1',
        white: colors.white,
        dark: '#334155'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
