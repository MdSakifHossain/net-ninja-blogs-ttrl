/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        Quicksand: [`"Quicksand"`, "Sans-Serif"],
        Poppins: [`"Poppins"`, "Sans-Serif"]
    },
    extend: {},
  },
  plugins: [],
}