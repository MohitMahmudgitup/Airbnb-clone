/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'maje': '1050px', // custom breakpoint
      },
    },
  },
  plugins: [],
}