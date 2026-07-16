import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"], theme: { extend: { fontFamily: { sans: ["var(--font-inter)", "sans-serif"] }, colors: { ink: "#0f172a", brand: "#2563eb", cyan: "#06b6d4" }, boxShadow: { glow: "0 0 55px rgba(37,99,235,.22)" } } }, plugins: [] };
export default config;
