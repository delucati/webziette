/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'ziette-gold': '#D4A843',
        'ziette-gold-light': '#E8C670',
        'ziette-brown': '#6B3A2A',
        'ziette-brown-dark': '#4A2818',
        'ziette-cream': '#FDF8F0',
        'ziette-beige': '#F5EDE0',
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
