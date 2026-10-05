/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        page: token("bg"),
        surface: token("surface"),
        subtle: token("surface-2"),
        heading: token("heading"),
        body: token("body"),
        muted: token("muted"),
        line: token("border"),
        accent: {
          DEFAULT: token("accent"),
          alt: token("accent-2"),
          soft: token("accent-soft"),
        },
        "on-accent": token("on-accent"),
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "Inter", "sans-serif"],
      },
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
  corePlugins: {
    container: false,
  },
  plugins: [],
};
