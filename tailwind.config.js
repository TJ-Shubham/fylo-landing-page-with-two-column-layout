/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      fontFamily:{
        display:['Open Sans', 'sans-serif'],
        displayHeading:['Raleway', 'sans-serif'],
      },
      colors:{
        'color1':'hsl(238, 22%, 44%)',
        'color2':'hsl(243, 87%, 12%)',
        'color3':'hsl(224, 93%, 58%)',
        'color4':'hsl(240, 75%, 98%)',
        'color5':'hsl(170, 45%, 43%)',
      },
      backgroundImage: {
        'pattern': "url('/images/bg-curve-mobile.svg')",
        'desktop-pattern':'url(/images/bg-curve-desktop.svg)'
      },
    },
  },
  plugins: [],
}

