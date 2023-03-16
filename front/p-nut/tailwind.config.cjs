/** @type {import('tailwindcss').Config} */

const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_300 = { ...Array.from(Array(301)).map((_, i) => `${i}px`) };
const px0_400 = { ...Array.from(Array(401)).map((_, i) => `${i}px`) };
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
const px0_600 = { ...Array.from(Array(601)).map((_, i) => `${i}px`) };
const px0_700 = { ...Array.from(Array(701)).map((_, i) => `${i}px`) };
const px0_800 = { ...Array.from(Array(801)).map((_, i) => `${i}px`) };

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
    extend: {
      fontFamily: {
        sans: "Noto Sans KR",
        nanum: "Nanum Square",
      },
      spacing: {
        1200: "1200px",
        ...px0_800,
      },
      colors: {
        prettywhite: "#FDFDFD",
        DEFAULT: "#212121",
        "#7F807F": "#7F807F",
        "#ECECEC": "#ECECEC",
        "#2F80ED": "#2F80ED",
        "#AEAFAE": "#AEAFAE",
        "#7F807F": "#7F807F",
        "#F5F5F5": "#F5F5F5",
        "#2F80ED": "#2F80ED",
      },
      fontSize: px0_100,
      borderRadius: px0_100,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
