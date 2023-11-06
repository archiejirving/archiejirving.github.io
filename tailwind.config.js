/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "nav-bg": "rgb(240, 240, 240)",
    },
    fontFamily: {
      "Trebuchet": ["Trebuchet MS", "sans-serif"],
    },},
  },
  plugins: [],
}
