/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 40px rgba(15, 23, 42, 0.35)",
        glow: "0 0 40px rgba(56, 189, 248, 0.28)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGrid: {
          "0%, 100%": { opacity: "0.38" },
          "50%": { opacity: "0.12" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-grid": "pulseGrid 10s ease-in-out infinite",
        shine: "shine 7s linear infinite",
      },
    },
  },
  plugins: [],
};
