/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './assets/js/*.js'],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false, // disabling the aspectRatio core plugin to avoid
    //                     conflicts with the native aspect-ratio utilities
    //                     included in Tailwind CSS v3.0 in order to use
    //                     @tailwindcss/aspect-ratio plugin.
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
