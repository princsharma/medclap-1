import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette pulled from the MedClap logo
        navy: {
          DEFAULT: "#1A2A5E",
          deep: "#131F47",
          soft: "#2B3D7A",
        },
        gold: {
          DEFAULT: "#F4B62E",
          deep: "#D89A14",
          soft: "#F8CB60",
        },
        cream: {
          DEFAULT: "#FAF6EE",
          warm: "#F4EEDF",
        },
        ink: {
          DEFAULT: "#0F1018",
          soft: "#4A4D5C",
        },
        divider: {
          DEFAULT: "#E8E2D4",
          soft: "#EFEAD9",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
