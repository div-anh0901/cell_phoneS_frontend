/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-banner" : "#d70018",
        "bg-baner-item": "hsla(0, 0%, 100%, .2)"
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
      }
      
    },
  },
  plugins: [],
}

