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
        background: "#191414",
        tertiary: "#142B1C",
        dark: "#121212",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
