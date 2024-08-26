const flowbite = require('flowbite-react/tailwind');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        dkgray: '#303030',
      },
      fontFamily: {
        heading: '"Playwrite US Trad", cursive',
      },
      screens: {
        // Only apply to devices that can hover, are at least "md" size, and user does not have prefers-reduced-motion set
        // So we can conditionally hide things only if they will appear on hover but always show them otherwise
        'can-hover': {
          raw: '(hover: hover) and (min-width: 768px) and (prefers-reduced-motion: no-preference)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 3s ease-in-out',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0, display: 'none' },
          '1%': { opacity: 0, display: 'inline' },
          '100%': { opacity: 1, display: 'inline' },
        },
      }),
    },
    screens: {
      md: '768px',
      lg: '992px',
      xl: '1280px',
    },
  },
  darkMode: 'media',
  plugins: [
    flowbite.plugin(),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
              'animation-fill-mode': 'forwards',
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
