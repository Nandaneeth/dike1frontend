/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        light: {
          bg: '#ffffff',
          surface: '#f5f5f5',
          text: '#1a1a1a',
          border: '#e0e0e0',
        },
        dark: {
          bg: '#131416',
          surface: '#1e1e1e',
          text: '#ffffff',
          border: '#ffffff1a',
        },
      },
    },
  },
  plugins: [],
}
