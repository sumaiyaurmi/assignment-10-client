/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          openSens: "'Open Sans', 'sans-serif' ",
        },
      },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "sunset"],
  },
}

