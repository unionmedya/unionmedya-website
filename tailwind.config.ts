import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        toprak: "#F3EDE2",
        zeytin: "#3D5019",
        krem: "#1C2B0C",
        pin: "#A07010",
        gece: "#E6DFD3",
        sis: "#656B58",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "sans-serif"],
        serif: ["'Cormorant Garamond'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
