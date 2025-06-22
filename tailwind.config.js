/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        beige: {
          50: '#FDFCFA',
          100: '#F7F6F4',
          200: '#EFEEE9',
        },
      },
    },
  },
  plugins: [],
};