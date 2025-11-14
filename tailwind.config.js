/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#F9C74F',
        'beige-light': '#FFF8E7',
        'red-soft': '#E63946',
        'brown-light': '#8D6E63',
        'green-natural': '#4CAF50',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}