import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        paper: {
          DEFAULT: "#faf9f6",
          soft: "#f4f2ed",
          card: "#fffdf9",
        },
        ink: {
          900: "#1a1a1a",
          800: "#2a2a2a",
          700: "#3a3a3a",
          600: "#52525b",
          500: "#6b6b6b",
          400: "#9a9a9a",
          300: "#b8b6af",
        },
        accent: {
          DEFAULT: "#1e3a8a",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
