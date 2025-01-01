module.exports = {
  content: [
    './index.html',
    './components/**/*.{html,js,jsx}',
    './constants/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
    './src/**/*.{js,jsx,css}',
    './css/**/*.css',
  ],
    theme: {
      extend: {
        animation: {
          scroll:
          "scroll var(--animation-duration, 10s) var(--animation-direction, forwards) linear infinite",
          // Default speed for larger screens
          marquee: 'marquee 15s linear infinite',
          // Faster speed for mobile screens
          marqueeMobile: 'marqueeMobile 70s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          marqueeMobile: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          scroll: {
            to: {
              transform: "translate(calc(-50% - 0.5rem))",
            },}
          
        },
      },
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      
    ],
  };
  