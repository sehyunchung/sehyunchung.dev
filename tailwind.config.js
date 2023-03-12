/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Noto Sans KR",
          "Noto Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["Jetbrains Mono", "monospace"],
        serif: ["var(--font-garamond)", "serif"],
      },
    },
  },
  plugins: [],
};
