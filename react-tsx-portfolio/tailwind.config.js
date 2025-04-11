/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Keep your content paths
  ],
  theme: {
    extend: { // Keep all your theme extensions
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'text-primary': '#555555',
        'text-dark': '#353535',
        'border-light': '#A3A3A3',
        'border-medium': '#B5B5B5',
        'bg-light': '#FAFAFA',
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
  plugins: [
    // Add any other Tailwind plugins you might be using here
  ],
}