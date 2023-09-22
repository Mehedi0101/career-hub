/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark1': '#1A1919',
        'dark2': '#474747',
        'dark3': '#757575',
        'primary1': '#7E90FE',
        'primary2': '#9873FF',
        'light1': '#ffffffb3',
        'light2': '#ffffff66'
      },
    },
  },
  plugins: [require("daisyui")],
}