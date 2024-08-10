/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        atlys: "1.5px",
      },
      colors: {
        atlysBlack: {
          1: "#131319",
          2: "#191920",
        },
        atlysGray: {
          1: "#27292D",
          2: "#6B6C70",
          3: "#C5C7CA",
          4: "#969696",
          5: "#343434",
          6: "#35373B",
          7: "#7F8084",
        },
        atlysBlue: {
          DEFAULT: "#4A96FF",
        },
      },
    },
  },
  plugins: [],
};
