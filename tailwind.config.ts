import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#02343f",
        foreground: "#F0EDCC",
        primary: "#02343f",
        accent: "#F0EDCC",
        'elegant-dark': "#02343f",
        'elegant-cream': "#F0EDCC",
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)', 'serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in": "fade-in 0.5s ease-in-out",
        "slide-up": "slide-up 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
