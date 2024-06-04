/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF7518',      
        'red': '#D70040',
        'brown': '#967969',
        'green': '#00A36C', 
        'blue':'#0096FF',           
        'purple':'#C181D8',
                
      },
    },
  },
  plugins: [],
}

