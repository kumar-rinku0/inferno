import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#171717",
        },
        white: "#ffffff",
        transparent: "transparent",
        current: "currentColor",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config