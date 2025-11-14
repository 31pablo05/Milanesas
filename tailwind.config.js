/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#D4AF37',
        'golden-light': '#F5E6D3',
        'beige-light': '#FFF8E1',
        'red-soft': '#DC3545',
        'red-accent': '#C92A2A',
        'brown-warm': '#8B4513',
        'brown-light': '#A0826D',
        'green-natural': '#25D366',
        'cream': '#FFF8E1',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}