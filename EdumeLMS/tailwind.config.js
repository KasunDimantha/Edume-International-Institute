/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'h29': '29px',
        'h100' : '100vh',
        'h25' : '25px'
      },
      width: {
        'w250': '250px',
        'w29': '29px',
        'w100%' : '100%',
      }
    },
  },
  plugins: [ ],
}

