/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Jetbrains Mono", "Hack", "Menlo", "Consolas", "monospace"],
        serif: ["Garamond", "Times New Roman", "Eulyoo1945-Regular"],
      },
    },
  },
  plugins: [],
};
