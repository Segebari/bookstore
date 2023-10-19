/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '33rem',
      },
    },

    



    backgroundImage: {
      'herobg': "url('/src/assets/hero-curved-bg.svg')",
    }
  },
  plugins: [],
}