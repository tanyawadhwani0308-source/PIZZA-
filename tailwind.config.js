/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tenya-red': '#D41B2C',
        'tenya-yellow': '#FFC107',
        'tenya-dark': '#100E0E',
        'tenya-cream': '#FDFBF7',
      },
      fontFamily: {
        heading: ['"Alfa Slab One"', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'checkerboard': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0zm20 20h20v20H20z' fill='%23000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
