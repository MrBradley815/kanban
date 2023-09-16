/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      red: {
        300: "#FF9898",
        400: "#EA5555",
      },
      blue: {
        300: "#A8A4FF",
        400: "#635FC7",
      },
      gray: {
        300: "#F4F7FD",
        400: "#E4EBFA",
        500: "#828FA3",
      },
      black: {
        300: "#3E3F4E",
        400: "#2B2C37",
        500: "#20212C",
        600: "#000112",
      },
      white: {
        400: "#FFFFFF",
      },
    },
    extend: {
      fontFamily: {
        plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
