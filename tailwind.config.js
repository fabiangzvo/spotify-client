/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        secondary: "#21A04E",
        title: "#C4C4C4",
        paragraph: "#ffffff",
        background: "#000000",
        tertiary: "#142B1C",
        dark: "#191414",
        shadow: "#A2A2A2",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(12rem, 3fr))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
