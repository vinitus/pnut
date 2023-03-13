/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/*.{html,js,jsx}",
    "./src/Pages/*.{html,js,jsx}",
    "./src/UI/*.{html,js,jsx}",
    "./src//*.{html,js,jsx}",
    "./src/*.{html,js,jsx}",
    "./index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: { fontFamily: { sans: "Noto Sans KR", nanum: "Nanum Square" } },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
