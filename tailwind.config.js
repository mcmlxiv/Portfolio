module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "770px",
      // => @media (min-width: 770px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gradientColorStops: (theme) => ({
        secondaryBg: "#457B9D",
        secondaryLighterBg: "#c3dbfa",
        greyAltBg: "#ededed",
      }),
      colors: {
        primaryDarker: "#000f33",
        primaryDark: "#00143d",
        primaryDar: "#032f6c",
        primary: "#003b75",
        secondary: "#457B9D",
        secondaryLighter: "#c3dbfa",
        tertiary: "#E63946",
        goldAlt: "#ffba08",
        whiteCream: "#F1FAEE",
        whiteAlt: "#ccd6f6",
        greyAlt: "#ededed",
        greyLighter: "#f5f5f5",
        "regal-blue": "#243c5a",
      },
      animation: {
        bounceSlow: "bounce 2s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        upShift: `upShift 1s ease-out`,
      },
      zIndex: {
        1: "1",
        5: "5",
        8: "8",
      },
      keyframes: {
        upShift: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
