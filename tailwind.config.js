/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#58949C",
        secondColor: "#344345",
        accentColor: "#FEF8C4",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        navGlow: "0px 0px 25px 11px rgba(255,255,255,0.48);",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), ["prettier-plugin-tailwindcss"]],
};
