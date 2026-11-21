import type { Config } from "tailwindcss";

/**
 * Palette derived from the supplied logos:
 *  - violet  : the Prolync light-bulb mark (#8038F8 family)
 *  - sun     : the yellow rays of the Prolync mark
 *  - altis   : the navy of the Altis mark
 *  - rose    : error / alert states only
 *  - ink     : a deep indigo, the violet taken to near-black for text and dark sections
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          50: "#F6F1FF",
          100: "#EDE3FF",
          200: "#DAC6FF",
          300: "#C0A0FC",
          400: "#A271FA",
          500: "#8A47F8",
          600: "#7633EE",
          700: "#6125CB",
          800: "#4D1EA0",
          900: "#341570",
          950: "#1D0B45",
        },
        sun: {
          100: "#FFF3CC",
          300: "#FBD35E",
          400: "#F8C531",
          500: "#F2B50F",
          600: "#C99107",
        },
        rose: {
          50: "#FDF3F7",
          100: "#FAE3EC",
          200: "#F5CBDB",
          300: "#EFB0C8",
          400: "#E898B8",
          500: "#DC7BA2",
          600: "#C25C86",
        },
        altis: {
          DEFAULT: "#3B4E73",
          700: "#324465",
          100: "#E3E8F1",
        },
        ink: {
          DEFAULT: "#17103A",
          700: "#2B2352",
          600: "#463F6B",
          500: "#625C85",
          400: "#8A85A6",
        },
        paper: {
          DEFAULT: "#FBFAFE",
          100: "#F4F1FA",
          200: "#E9E4F3",
          300: "#D9D2E9",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(23,16,58,.05), 0 8px 24px -12px rgba(23,16,58,.18)",
        lift: "0 2px 4px rgba(23,16,58,.06), 0 18px 40px -16px rgba(60,20,140,.35)",
      },
      keyframes: {
        // ─── existing (kept) ─────────────────────────────────────
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ray-pulse": {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: ".45" },
        },
        "orbit-drift": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "node-drift": {
          "0%, 100%": { transform: "translate(-50%, 0) translateY(0)" },
          "50%": { transform: "translate(-50%, 0) translateY(-6px)" },
        },
        "node-drift-h": {
          "0%, 100%": { transform: "translate(-50%, 0) translate(0, 0)" },
          "50%": { transform: "translate(-50%, 0) translate(3px, -4px)" },
        },

        // ─── new: diagram loops ──────────────────────────────────
        "core-breathe": {
          "0%, 100%": { scale: "1" },
          "50%": { scale: "1.03" },
        },
        "halo-pulse": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
        "ring-spin": {
          to: { transform: "rotate(1turn)" },
        },
        "ring-spin-rev": {
          to: { transform: "rotate(-1turn)" },
        },
        "flow-dash": {
          // -12 = 4 dash periods of 1.5+1.5, so the loop is seamless
          to: { strokeDashoffset: "-12" },
        },

        // ─── new: background loops ───────────────────────────────
        "blob-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(36px, 28px) scale(1.08)" },
          "66%": { transform: "translate(-24px, 44px) scale(0.96)" },
        },
        "blob-drift-alt": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "40%": { transform: "translate(-44px, -32px) scale(1.1)" },
          "75%": { transform: "translate(28px, -16px) scale(0.94)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0", scale: "0.6" },
          "50%": { opacity: "0.9", scale: "1" },
        },
      },
      animation: {
        // ─── existing (kept) ─────────────────────────────────────
        "fade-up": "fade-up .7s cubic-bezier(.2,.7,.2,1) both",
        "ray-pulse": "ray-pulse 3.6s ease-in-out infinite",
        "orbit-drift": "orbit-drift 7s ease-in-out infinite",
        "node-drift": "node-drift 6s ease-in-out infinite",
        "node-drift-h": "node-drift-h 7.5s ease-in-out infinite",

        // ─── new: diagram loops ──────────────────────────────────
        "core-breathe": "core-breathe 6s ease-in-out infinite",
        "halo-pulse": "halo-pulse 6s ease-in-out infinite",
        "ring-spin": "ring-spin 36s linear infinite",
        "ring-spin-rev": "ring-spin-rev 24s linear infinite",
        "flow-dash": "flow-dash 4s linear infinite",

        // ─── new: background loops ───────────────────────────────
        "blob-drift": "blob-drift 22s ease-in-out infinite",
        "blob-drift-alt": "blob-drift-alt 26s ease-in-out infinite",
        twinkle: "twinkle 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;