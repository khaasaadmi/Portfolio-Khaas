/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F8FF',
          100: '#CCF1FF',
          200: '#99E3FF',
          300: '#66D6FF',
          400: '#33C8FF',
          500: '#00BBFF',
          600: '#0096CC',
          700: '#007099',
          800: '#004B66',
          900: '#002533',
        },
      },
      animation: {
        'scroll-y': 'scroll-y 15s linear infinite',
      },
      keyframes: {
        'scroll-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }
        }
      }
    },
  },
  plugins: [],
};