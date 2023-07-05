/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-green': '#D2E892',
        'button-green-text': '#364C6F',
        'custom-grey': 'rgb(230,230,230)',
        'input-border': '#D6E1E8'
      },
      backgroundImage: {
        'gradient-bg':
          'linear-gradient(90deg, rgba(28,52,91,0.05) 0%, rgba(23,73,151,0.0295) 100%);'
      }
    }
  },
  plugins: []
};
