const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Heebo: ["Heebo"],
        Inter: ['"Inter"'],
        IBM: ["IBM Plex Sans"],
        MHei: ["M Hei PRC"],
        Noto: ["Noto Sans KR"],
      },
      backgroundImage: {
        backgroundOne: "url('/img/background.png')",
        backgroundTwo: "url('/img/backgroundTwo.png')",
        backgroundThree: "url('/img/backgroundThree.png')",
      },
    },
  },
  plugins: [],
};
