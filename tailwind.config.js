/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        meteor: {
          "0%": {
            transform: "translateX(0) translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(300px) translateY(300px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
        meteor: "meteor 3.5s linear infinite",
      },
    },
  },
  plugins: [],
};
