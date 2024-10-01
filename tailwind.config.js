/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        myLocalFont: ['Cairo', 'sans-serif'],
        externalFont: ['Crown', 'sans-serif'],
      },
      boxShadow: {
        'custom-1': '3px 3px 3px 0px #FFF4D4 inset',
        'custom-2': '0px -4px 3px 0px #2F211240 inset',
        'custom-3': '0px 0px 10px 0px #000000',
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