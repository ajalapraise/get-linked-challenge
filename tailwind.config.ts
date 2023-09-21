import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      base: "14px",
      sm: "18px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      "2xl": "40px",
    },
    colors: {
      purple1: "#903AFF",
      purple2: "#FE34B9",
      purple3: "#150E28",
      purple4: "#150E28",
      purple5: "#D434FE",
    },
    extend: {
      fontFamily: {
        // Poppins: ["poppins", ...defaultTheme.fontFamily.sans],
        // Revalia: ["revalia", ...defaultTheme.fontFamily.sans],
        // sans: ["var(--Poppins)"],
      },
    },
  },
  plugins: [],
};
export default config;
