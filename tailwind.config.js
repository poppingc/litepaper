const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          900: '#181C1A',
        },
        green: {
          primary: '#55FF79',
          secondary: '#61FF7A',
          tertiary: '#00FF39',
        },
      },
      backgroundImage: {
        'text-roadmap-title':
          'linear-gradient(294.72deg, #D1DD43 9.05%, #46DD43 79.28%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        '.site-container': {
          width: '100%',
          'max-width': '1060px', // 1020px + 2 * 20px
          'margin-left': 'auto',
          'margin-right': 'auto',
          'padding-left': '20px',
          'padding-right': '20px',
        },
      });

      addComponents({
        '.text-with-gradient': {
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
        },
      });
    }),
  ],
};
