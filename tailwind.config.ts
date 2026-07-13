import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f3efe8",
        "cream-dark": "#ece5d8",
        ink: "#1c1a17",
        gold: {
          DEFAULT: "#b08c4f",
          light: "#c9a05f",
          dark: "#8a6a34",
        },
        charcoal: "#211f1c",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,0.15)",
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
