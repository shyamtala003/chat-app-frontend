/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        skeleton:
          "linear-gradient(105deg, transparent 0%, transparent 40%, oklch(1 0 0 / 0.17) 50%, transparent 60%, transparent 100%)",
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
