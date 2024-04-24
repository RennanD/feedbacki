/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",

      rocketseat: {
        light: "#B585FB",
        base: "#9956F6",
        dark: "#8234E9",
        low: "#361362",
      },

      discover: {
        light: "#6A80FF",
        base: "#4863F7",
        dark: "#3249CB",
        low: "#182049",
      },

      gray: {
        100: "#E1E1E6",
        200: "#C4C4CC",
        300: "#8D8D99 ",
        400: "#7C7C8A",
        500: "#505059",
        600: "#323238",
        700: "#29292E",
        800: "#202024",
        900: "#121214",
        950: "#09090A",
      },

      danger: {
        light: "#FE6E78",
        base: "#E61836",
        low: "#4E0312",
      },

      warning: {
        light: "#F48F56",
        base: "#E14915",
        low: "#40100A",
      },

      success: {
        light: "#29E0A9",
        base: "#00A277",
        low: "#002F27",
      },

      new: {
        light: "#FFCD1E",
        base: "#CE8800",
        low: "#431F05",
      },

      transparent: "transparent",
    },

    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      mono: ["var(--font-martian-mono)", "mono"],
      title: ["var(--font-plus-jakarta)", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
