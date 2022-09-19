/** @type {import('tailwindcss').Config} */ 
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities}){
      const utilities ={
        ".bg-hero":{
          "background-image": "url('/hero.png')"
        },
        ".bg-checkout":{
          "background-image": "url('/bgcheckout.png')"
        },
        ".bg-form":{
          "background-image": "url('/bg-form.png')"

        }
      };
      addUtilities(utilities)
    })
  ],
}