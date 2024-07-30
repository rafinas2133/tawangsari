/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mist: {
          DEFAULT:"#dc251e",     
        },
        card: {
          DEFAULT:"#021526",     
        },
        greendead: {
          DEFAULT:"#01923F",     
        }
      }
    },
  },
  plugins: [],
}

