/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        bounce: "bounce 5s infinite",
      },
    },
  },
  plugins: [],
};
