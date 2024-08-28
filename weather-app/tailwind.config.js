/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#000b1f',
        'custom-light': '#6b7c99',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(315deg, #000b1f 0%, #6b7c99 94%)',
      },
    },
  },
  plugins: [],
}

// background-color: #1d2951;background-image:%20linear-gradient(315deg,%20#1d2951%200%,%20#dbe7fc%2074%);