// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/assets/css/*.css", // Add this to include your custom CSS
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      backgroundColor: {
        body: "var(--body-bg-color)",
      },
    },
  },
  plugins: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
