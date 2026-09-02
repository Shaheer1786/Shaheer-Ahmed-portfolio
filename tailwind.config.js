/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05080D",
          900: "#080D15",
          800: "#0B121C",
          700: "#111A27",
          600: "#182335",
        },
        mist: {
          100: "#EAF0F7",
          300: "#C2CCDA",
          500: "#8C99AC",
          700: "#5C6B80",
        },
        signal: {
          cyan: "#4CD3E8",
          blue: "#3D7BFF",
          deep: "#2456E5",
        },
      },
      fontFamily: {
        display: ["\"Space Grotesk\"", "sans-serif"],
        body: ["\"Inter\"", "sans-serif"],
        mono: ["\"IBM Plex Mono\"", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
        "signal-gradient": "linear-gradient(120deg, #4CD3E8 0%, #3D7BFF 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(76,211,232,0.15), 0 20px 60px -20px rgba(37,86,229,0.35)",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
