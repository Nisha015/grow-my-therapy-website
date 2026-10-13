import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF7F2",
        sand: "#F1EBE0",
        ink: "#25302A",
        muted: "#56635B",
        sage: {
          50: "#F1F5F1",
          100: "#DDE7DF",
          200: "#C3D3C6",
          300: "#A3BAA8",
          500: "#6B8872",
          700: "#3E5647",
          800: "#304339",
          900: "#22312A",
        },
        clay: {
          DEFAULT: "#B9805F",
          dark: "#8A5A42",
          soft: "#EAD6C8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        body: ["var(--font-body)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(34, 49, 42, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
