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
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.2,.7,.2,1) both",
        "ray-pulse": "ray-pulse 3.6s ease-in-out infinite",
        "orbit-drift": "orbit-drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
