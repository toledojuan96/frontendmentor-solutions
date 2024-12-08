/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.tsx",
      "./src/*.tsx",
      "./index.html"
  ],
  theme: {
    extend: {},
      fontFamily: {
        youngSerif: ["YoungSerif", "sans-serif"],
          outfit: ["Outfit", "sans-serif"],
      }
  },
  plugins: [],
}

