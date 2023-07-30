/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
