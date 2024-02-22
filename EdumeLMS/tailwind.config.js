/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        // image for About page
        'hero': "url('/src/pages/component/img/icons8-team-CrW-TbykPBQ-unsplash.jpg')",
        'student': "url('/src/pages/component/img/Twitter Ad 1600x400 px (1).jpeg')",
        
        
      },
      fontFamily: {
        adelia: ["ADELIA", "cursive"],
      },
    },
  },
  plugins: [ ],
}

