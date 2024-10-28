/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#DB4444" /**red color */,
          neutral : "#2F2E30",
          secondary: "#FFFFFF",
          accent : "#00FF66",
        },
      },
    ],
  },
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ["Moderustic", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
