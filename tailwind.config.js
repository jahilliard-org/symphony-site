module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#666666",
          darker: "#4e4b4e",
          darkest: "#2b2b2b",
          light: "#dfdedf",
          green: "#94afaa",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        goth: ["Didact Gothic", "sans-serif"],
        verdana: ["Verdana", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
}
