/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        myLocalFont: ['Cairo', 'sans-serif'],
        externalFont: ['Crown', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
        // Add other weights as needed
      },
    },
  },
  plugins: [],
};