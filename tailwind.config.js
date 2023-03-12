/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-suit)",
          "Inter",
          "Gothic A1",
          "Noto Sans KR",
          "Noto Sans",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["Jetbrains Mono", "Hack", "Menlo", "Consolas", "monospace"],
        serif: ["Garamond", "Times New Roman", "Eulyoo1945-Regular"],
      },
    },
  },
  plugins: [],
};
