/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        hdFonts: "#172A3A", //header font & password previewer
        bdFonts: "#2E3F4E", //paragragh font
        inputEl: "#2E3F4E", //placeholder and input
        accentGreen: "#1A5659", //primary green color
        disabled: "#1A56594D",
        btnHover: "#37A8AD",
        hoverBtn: "#09BC8A",
        placeholders: "#80A1A3", //redirect links
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
