import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e0d0b",
        paper: "#f6f1e7", // ivory
        bone: "#ede6d6",
        sand: "#ddd2bb",
        gold: "#b8975a", // champagne gold
        goldlight: "#d8c292",
        clay: "#b8613f",
        moss: "#4f5d4a",
        blush: "#e9cfc4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.045em", luxe: "0.22em" },
      boxShadow: {
        soft: "0 1px 2px rgba(14,13,11,.05), 0 10px 40px rgba(14,13,11,.07)",
        lift: "0 2px 4px rgba(14,13,11,.06), 0 18px 50px rgba(14,13,11,.14)",
        gold: "0 0 0 1px rgba(184,151,90,.5), 0 10px 30px rgba(184,151,90,.25)",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(14px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideLeft: { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0)" } },
        sheetUp: { "0%": { transform: "translateY(100%)" }, "100%": { transform: "translateY(0)" } },
        pop: { "0%": { opacity: "0", transform: "scale(.92) translateY(8px)" }, "100%": { opacity: "1", transform: "scale(1) translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
      },
      animation: {
        fadeUp: "fadeUp .7s cubic-bezier(.2,.7,.2,1) both",
        fadeIn: "fadeIn .5s ease both",
        slideLeft: "slideLeft .45s cubic-bezier(.2,.8,.2,1) both",
        sheetUp: "sheetUp .5s cubic-bezier(.2,.8,.2,1) both",
        pop: "pop .45s cubic-bezier(.2,.8,.2,1) both",
        shimmer: "shimmer 2.4s linear infinite",
        floaty: "floaty 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
