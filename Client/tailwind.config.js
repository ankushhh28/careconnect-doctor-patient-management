/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(250px,1fr))",
      },
    },
  },
  plugins: [],
};
