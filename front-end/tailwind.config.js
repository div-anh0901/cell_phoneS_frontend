/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-banner" : "#d70018",
        "bg-baner-item": "hsla(0, 0%, 100%, .2)",
        "bg-phone" : 'rgb(253, 180, 180)',
        "bg-tablet" : 'rgb(255, 237, 213)',
        "bg-laptop" : 'rgb(254, 226, 226)',
        "bg-sound" : 'rgb(254, 249, 195)',
        "bg-watch" : 'rgb(224, 231, 255)',
        "bg-camera" : 'rgb(224, 242, 254)',
        "bg-accessory" : 'rgb(224, 242, 254)',
        "bg-tivi" : 'rgb(237, 233, 254)',
        "bg-newpaper": 'rgb(204, 251, 241)',
        "bg-pink": "rgb(224, 0, 51)"

      },
      backgroundImage: {
        'bg-discount': "url('/src/images/bg-discount-product.png')",
      },
      screens:{
        "zero": "0px",
        "md-800": "800px",
        "md-860": "860px",
        "xl-1200": "1200px",
        "xl-1300": "1300px",
        "xl-1500": "1500px",
        "xl-1600": "1600px",
        "xl-1700": "1700px",
      },
      boxShadow:{
        'menu': '0 1px 2px 0 rgba(60,64,67,.1)'
      },
      borderRadius: {
        "dot-left" : "0 100px 100px 0",
        "dot-right" : "100px 0px 0px 100px"
      },
      margin:{
        "dicount": "0 0 10px 10px"
      }
      
      
    },
  },
  plugins: [],
}

