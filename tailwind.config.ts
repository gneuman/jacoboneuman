import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f0f9",
          100: "#cce1f3",
          200: "#99c3e7",
          300: "#66a5db",
          400: "#3387cf",
          500: "#0069c3", // Base blue
          600: "#00549c",
          700: "#003f75",
          800: "#002147", // Oxford Blue
          900: "#001a39",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
