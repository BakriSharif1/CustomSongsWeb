import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111014",
        parchment: "#FBF7F2",
        ember: "#C4683A",
        rosewood: "#3B1F2B",
        mist: "#E7E0D8",
        gold: "#C8A96A"
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(13, 10, 22, 0.6)",
        card: "0 20px 50px -30px rgba(20, 12, 28, 0.35)"
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top, rgba(200, 169, 106, 0.35), transparent 60%)",
        haze: "radial-gradient(circle at 20% 20%, rgba(196, 104, 58, 0.25), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
