import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#272727"
        },
        primary: {
          100: "#E3F2F1",
          200: "#69B6AC"
        }
      },
      fontFamily: {
        sans: ["var(--font-source-sans-3)"],
        roboto: ["var(--font-roboto)"]
      }
    }
  },
  darkMode: "class",
  plugins: []
};

export default config;
