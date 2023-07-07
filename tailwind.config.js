/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        "light-green": "#D2E892",
        "dark-green": "#8CAA34",
        "normal-text": "#364C6F",
        "custom-gray": "rgb(230,230,230)",
        "light-gray": "#D2DEEB",
        "input-border": "#D6E1E8"
      },
      backgroundImage: {
        'gradient-bg': 'linear-gradient(90deg, rgba(28,52,91,0.05) 0%, rgba(23,73,151,0.0295) 100%);',
      },
    },
  },
  plugins: []
};
