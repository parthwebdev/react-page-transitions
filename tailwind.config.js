/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono", "sans-serif"],
        darker: ["Darker Grotesque"],
      },
    },
  },
  plugins: [],
};
