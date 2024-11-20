/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': '0px 0px 19px 0px #ffffff47',
      },
      fontFamily: {
        poppins: ['poppins', 'serif'], 
      },
      colors: {
        brand: '#F37021',
        nextusGray : '#A0A0A0',
      },
      backgroundColor: {
        'task-modal': 'rgb(130 130 130 / 41%)',
      },
      boxShadow: {
        'task-modal': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'task-modal': '3px',
      },
    },
  },
  plugins: [],
}