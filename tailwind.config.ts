import defaultTheme from "tailwindcss/defaultTheme";

export default {
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        green100: "#051509",
        green200: "#22292A",
        green300: "#4EAF60",
        green400: "#56B855",
        green500: "#46D26C",
        green600: "#62D981",
        green700: "#7DE393",
        green800: "#D3F5CE",
        green900: "#E6F2EE",
        green1000: "#F7FEEF",
        green1100: "#FFFFFF",
        lemon: "#8DCC7B",
        orange: "#FFA046",
        red: "#FE6845",
        gray100: "#555C5D",
        "gray-light": "#C2C2C2",
        primary: "#0000FF",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },

      screens: {
        xs: "512px",
        // => @media (min-width: 512px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1600px",
        // => @media (min-width: 1600px) { ... }
        "4xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
};
