/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        skeleton:
          "linear-gradient(105deg, transparent 0%, transparent 40%, oklch(1 0 0 / 0.17) 50%, transparent 60%, transparent 100%)",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(0, 0)" },
          "1.78571%": { transform: "translate(5px, 0)" },
          "3.57143%": { transform: "translate(0, 0)" },
          "5.35714%": { transform: "translate(5px, 0)" },
          "7.14286%": { transform: "translate(0, 0)" },
          "8.92857%": { transform: "translate(5px, 0)" },
          "10.71429%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        shake: "shake 4s ease-in-out", // Play animation once and stop at the end
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
