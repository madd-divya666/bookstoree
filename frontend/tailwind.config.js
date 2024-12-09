/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';  // Import daisyui using ES module syntax

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,  // Use daisyui as a plugin directly
  ],
}
