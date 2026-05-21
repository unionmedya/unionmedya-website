import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        toprak: "#3A4A1F",
        zeytin: "#4A5D24",
        krem: "#F2EBD8",
        pin: "#E0B82E",
        gece: "#1A1F0E",
        sis: "#A8B098",
      },
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "sans-serif"],
        serif: ["'Cormorant Garamond'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
