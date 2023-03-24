/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#010409",
        white: "#f2f2f2",
        primary: "#a371f7",
      },
    },
    plugins: [
      function ({ addVariant }) {
        addVariant("child", "& > *");
        addVariant("child-hover", "& > *:hover");
      },
    ],
  },
};
