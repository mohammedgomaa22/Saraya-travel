/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#bca560',
        light: '#e4cc76',
        dark: '#6d5332',
        main_bg: '#bca56050',
      },

    },
  },
  plugins: [],
}