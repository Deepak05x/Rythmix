/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-425': { 'min' : '375px' , 'max' : '424px'},
        'max-640': { 'min' : '425px' , 'max': '639px' }, // Custom max-width breakpoint
        'max-768': { 'min' : '640px' , 'max' : '767px'},
        'max-1024': { 'min' : '768px' , 'max' : '1023px'},
        'max-1280': { 'min' : '1024px' , 'max' : '1279px'},
        'max-1440': { 'min' : '1280px' , 'max' : '1440px'},
        'max-2000': { 'min' : '1441px' , 'max' : '2000px'}
      },
    },
  },
  plugins: [],
}

