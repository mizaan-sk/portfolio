import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0a0a0f",
          secondary: "#12121a",
          card: "#1a1a26",
          elevated: "#22222e",
        },
        accent: {
          DEFAULT: "#f6c177",
          light: "#fad9a1",
          glow: "#ffb86c",
        },
        text: {
          primary: "#f5f5f7",
          secondary: "#b8b8c5",
          muted: "#7a7a8a",
        },
        border: {
          DEFAULT: "#2a2a38",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(255, 184, 108, 0.25)",
        card: "0 10px 40px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 184, 108, 0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 184, 108, 0.55)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "accent-gradient": "linear-gradient(135deg, #f6c177 0%, #ffb86c 50%, #f59e0b 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
