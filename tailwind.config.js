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
//         marquee: 'marquee 10s linear infinite',
//         marquee2: 'marquee2 10s linear infinite',// Maximum speed (0.2 seconds)
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(0%)' },
//           '100%': { transform: 'translateX(-100%)' },

//         },
//         marquee2: {
//           '0%': { transform: 'translateX(100%)' },
//           '100%': { transform: 'translateX(0%)' },
//         },
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'),
//     // Other plugins...
//   ],
// };


// module.exports = {
//   content: [
//     './index.html',
//     './components/**/*.{html,js,jsx}',
//     './constants/**/*.{html,js,jsx}',
//     './pages/**/*.{html,js,jsx}',
//     './src/**/*.{js,jsx,css}',
//     './css/**/*.css',
//   ],
//   theme: {
//     extend: {
//       animation: {
//         marquee: 'marquee 10s linear infinite', // Adjusted for smoother scrolling
//         marquee2: 'marquee2 10s linear infinite', // Same duration to sync animations
//       },
//       keyframes: {
//         marquee: {
//           '0%': { transform: 'translateX(100%)' }, // Start from the right
//           '100%': { transform: 'translateX(-100%)' }, // Move to the left
//         },
        
//         marquee2: {
//           '0%': { transform: 'translateX(0%)' }, // Start from the left
//           '100%': { transform: 'translateX(-100%)' }, // Move to the left
//         },
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/aspect-ratio'), // Including aspect-ratio plugin
//     // Add more plugins if needed...
//   ],
// };


module.exports = {
  content: [
    './index.html',
    './components/**/*.{html,js,jsx}',
    './constants/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    './src/**/*.{js,jsx,css}',
    './css/**/*.css',
  ],
  // theme: {
  //   extend: {
  //     animation: {
  //       marquee: 'marquee 10s linear infinite',
  //       marqueeMobile: 'marquee 5s linear infinite', // Faster animation for mobile
  //     },
  //     keyframes: {
  //       marquee: {
  //         '0%': { transform: 'translateX(100%)' },
  //         '100%': { transform: 'translateX(-100%)' },
  //       },
  //       marqueeMobile: {
  //         '0%': { transform: 'translateX(100%)' },
  //         '100%': { transform: 'translateX(-100%)' },
  //       },
  //     },
  //   },
  // },



 
    theme: {
      extend: {
        animation: {
          marquee: 'marquee  20s linear infinite',
          marquee2: 'marquee 25s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        },
      },
    },

  
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
