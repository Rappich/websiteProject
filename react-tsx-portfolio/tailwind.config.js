/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: { poppins: ['Poppins', 'sans-serif'], },
      colors: {
        'text-primary': '#555555', // rgb(85, 85, 85)
        'text-dark': '#353535',    // rgb(53, 53, 53)
        'border-light': '#A3A3A3',  // rgb(163, 163, 163)
        'border-medium': '#B5B5B5', // rgb(181, 181, 181)
        'bg-light': '#FAFAFA',     // rgb(250, 250, 250)
      },
      height: {
        '17vh': '17vh', '80vh': '80vh', '83vh': '83vh', '94vh': '94vh',
        '96vh': '96vh', '70vh': '70vh', '40vh': '40vh', '26vh': '26vh',
        '34vh': '34vh', 'screen-fit': 'fit-content',
      },
      margin: { '40': '10rem', },
      spacing: { '40': '10rem', },
      minHeight: { 'fit': 'fit-content', },
      width: { 'fit': 'fit-content', }
    },
  },
  plugins: [],
}