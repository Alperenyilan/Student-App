/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.{jsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: "#e53e3e",
        success: "#38a169",
      },
    },
  },
  plugins: [],
};
