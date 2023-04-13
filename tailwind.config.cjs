/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(17, 24, 39)',
        'background-light': '#f6f8fd',
      },
      gridTemplateColumns: {
        movie: 'repeat(auto-fill, minmax(180px, 1fr))',
        'movie-sm': 'repeat(auto-fill, minmax(175px, 1fr))',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}
