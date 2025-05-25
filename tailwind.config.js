/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          maroon: {
            700: '#800000',
            800: '#660000',
            900: '#4d0000',
          }
        }
      },
    },
    plugins: [],
  }