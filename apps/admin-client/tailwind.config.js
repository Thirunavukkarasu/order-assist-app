/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {},
  },
}
