/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mylight: {
          primary: "#7dd3fc",
          secondary: "#6ee7b7",
          accent: "#d8b4fe",
          neutral: "#a8a29e",
          "base-100": "#f5f5f4",
          info: "#16a34a",
          success: "#facc15",
          warning: "#fb923c",
          error: "#dc2626",
        },
      },
      {
        mydark: {
          primary: "#bae6fd",
          secondary: "#6ee7b7",
          accent: "#e9d5ff",
          neutral: "#78716c",
          "base-100": "#292524",
          info: "#d9f99d",
          success: "#fcd34d",
          warning: "#fb923c",
          error: "#f87171",
        },
      },
      "dark",
      "cmyk",
    ],
    darkTheme: "mydark",
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
