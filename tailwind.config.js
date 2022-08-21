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
          yellow: '#ffe10f',
          blue: '#0584dc',
          red: '#ea1317',
          orange: '#ff7b02',
          purple: '#9e30ba',
        },
      },
      fontFamily: {
        fredoka: ['Fredoka', 'sans-serif'],
        fredokaOne: ['Fredoka One', 'cursive'],
      },
      backgroundImage: {
        'discover-background': "url('/assets/img/discover-background.png')",
        'emodus-background': "url('/assets/img/emodus-background.svg')",
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
