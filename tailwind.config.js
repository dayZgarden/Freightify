/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroTruck': 'url(https://cdllife.com/wp-content/uploads/2021/01/steer-2.jpg)',
      },
      keyframes: {
        'moveAround' : {
          '0%' : {
            transform: 'translate(0, 0)',
          },
          '25%' :{
            transform: 'translate(10px, 10px)'
          },
          '50%' : {
            transform: 'translate(0, 20px)'
          },
          '75%' : {
            transform: 'translate(-10px, 10px)'
          },
          '100%' : {
            transform: 'translate(0, 0)'
          },
        },
      },
      animation: {
        moveAround : 'moveAround 2s infinite'
      },
      boxShadow: {
        'light': '0px 0px 4px 4px rgba(0, 0, 0, .07)',
      }
    },
  },
  plugins: [],
}