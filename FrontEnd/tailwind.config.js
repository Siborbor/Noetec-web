/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      negro: "#2C2C2C",
      amarillo: "#FED940",
      azul: "#1683F8",
      rojo: "#FE4040",
      blanco: "#FFFFFF",
      celeste: "#1683F8"
    },
    extend: {
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, 
        },
      },
    },
  },
  plugins: [],
};
