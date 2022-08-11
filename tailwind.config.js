const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './assets/js/*.js'],
  theme: {
    extend: {
      colors: {
        emodus: {
          white: colors.slate[50],
          black: colors.slate[900],
          red: '#ea1317',
          blue: '#0584dc',
          orange: '#ff7b02',
        },
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        fredokaOne: ['Fredoka One', 'cursive'],
      },
    },
  },
  corePlugins: {
    aspectRatio: false, // disabling the aspectRatio core plugin to avoid
    //                     conflicts with the native aspect-ratio utilities
    //                     included in Tailwind CSS v3.0 in order to use
    //                     @tailwindcss/aspect-ratio plugin.
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
