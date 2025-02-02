/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mona: ["Mona Sans", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};

