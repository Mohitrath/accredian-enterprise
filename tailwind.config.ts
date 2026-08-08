import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand: { 50: "#eef4ff", 100: "#dce8ff", 200: "#b6cdff", 300: "#85acff", 400: "#4f7fff", 500: "#2a56f5", 600: "#1c3fd1", 700: "#1731a6", 800: "#152a80", 900: "#131f5c", 950: "#0b1338" }, accent: { 400: "#ffb648", 500: "#ff9d1a", 600: "#e37f00" }, ink: { 50: "#f6f7fb", 100: "#eceef5", 400: "#7d84a0", 600: "#4c5270", 800: "#252a42", 900: "#151830" } },
    fontFamily: { sans: ["Inter", "-apple-system", "Segoe UI", "system-ui", "Roboto", "sans-serif"] },
    boxShadow: { soft: "0 10px 40px -12px rgba(19, 31, 92, 0.18)", card: "0 4px 24px -6px rgba(21, 24, 48, 0.10)" },
    backgroundImage: { "hero-grid": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)" },
    maxWidth: { "8xl": "90rem" }
  } }, plugins: []
};
export default config;
