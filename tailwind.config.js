/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00B050",
        secondary: "#EBB519",
        third: "#FFF1CA",
        black: "#333333"
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        // comicSansMS: ["ComicSansMS", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
        slide: "slide 6s linear infinite",
      },
      // keyframes: {
      //   spin: {
      //     "0%": { transform: "rotate(0deg)" },
      //     "100%": { transform: "rotate(360deg)" },
      //   },
      //   slide: {
      //     "0%": { top: "0%", left: "0%", width: "0%", height: "2px" },
      //     "25%": { top: "0%", left: "0%", width: "100%", height: "2px" },
      //     "50%": { top: "0%", right: "0%", width: "2px", height: "100%" },
      //     "75%": { bottom: "0%", right: "0%", width: "100%", height: "2px" },
      //     "100%": { bottom: "0%", left: "0%", width: "2px", height: "100%" },
      //   },
      // },
    },
  },
  plugins: [],
};

export default tailwindConfig;
