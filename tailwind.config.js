/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        highlight: "#272f57",
        turquoise: "var(--turquoise)",
        "blue-violet": "var(--blue-violet)",
        purple: "var(--purple)",
        "dark-purple": "var(--dark-purple)",
        pink: "var(--pink)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
      },
    },
  },
  plugins: [],
};



