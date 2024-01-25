/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1DB954",
        secondary: "#21A04E",
        paragraph: "#C4C4C4",
        title: "#ffffff",
        background: "#000000",
        tertiary: "#142B1C",
        dark: "#191414",
        shadow: "#A2A2A2",
        selected: "#036d19",
        "card-background": "#0D0D0D",
        "card-border": "#333333",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(14rem, 3fr))",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
