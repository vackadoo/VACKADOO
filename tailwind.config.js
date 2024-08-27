// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './index.html',
//     "./App.css",
//     "./index.css",
//     './components/**/*.{html,js,jsx,css}',
//     "./src/**/*.{js,jsx,css}",
//     './constants/**/*.{html,js,jsx}',
//     './pages/**/*.{html,js,jsx}',
//     "./css/**/*.css",
//   ],
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//     // Other plugins...
//   ],
// }
// // tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         marquee: 'marquee 5s linear infinite', // Faster duration (5 seconds)
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './index.html',
//     "./App.css",
//     "./index.css",
//     './components/**/*.{html,js,jsx,css}',
//     "./src/**/*.{js,jsx,css}",
//     './constants/**/*.{html,js,jsx}',
//     './pages/**/*.{html,js,jsx}',
//     "./css/**/*.css",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         marquee: 'marquee 1s linear infinite', // Faster duration (5 seconds)
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//     // Other plugins...
//   ],
// };

module.exports = {
  content: [
    './index.html',
    "./App.css",
    "./index.css",
    './components/**/*.{html,js,jsx,css}',
    "./src/**/*.{js,jsx,css}",
    './constants/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    "./css/**/*.css",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 0.1s linear infinite', // Maximum speed (0.2 seconds)
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // Other plugins...
  ],
};
