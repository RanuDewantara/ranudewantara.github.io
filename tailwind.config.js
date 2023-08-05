/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'huruf1' : ['Ubuntu Mono'],
        'huruf2' : ['Square721 BT'],
        'huruf3' : ['Consolas'],
        'huruf4' : ['Play'],
        'huruf5' : ['Prosto_One'],
        'huruf6' : ['Oxanium'],
        'huruf7' : ['Tektur'],
        'huruf8' : ['Coda'],
        'huruf9' : ['Goldman'],
        'huruf10' : ['Amarante'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

