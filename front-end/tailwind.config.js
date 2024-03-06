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
      }
      
    },
  },
  plugins: [],
}

