/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./about/*.{html,js}", "./contact/*.{html,js}", "./menu/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./assets/css/main.css -o ./assets/css/output.css --watch