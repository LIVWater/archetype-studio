import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        // LIVWater Brand
        navy: {
          DEFAULT: "#010B1C",
          50: "#F3FAFF",
          100: "#E1F1FB",
          200: "#A9DBFE",
          300: "#5BA8E5",
          400: "#2C7EC3",
          500: "#1A5BA0",
          600: "#133D75",
          700: "#0B2854",
          800: "#051836",
          900: "#010B1C",
        },
        accent: {
          DEFAULT: "#1AA3E8",
          50: "#E6F6FE",
          100: "#C2E8FC",
          200: "#A9DBFE",
          300: "#7CC8F4",
          400: "#46B5EE",
          500: "#1AA3E8",
          600: "#0E84C0",
          700: "#0A6699",
          800: "#074973",
          900: "#053154",
        },
        ink: "#010B1C",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tightest: "-0.045em",
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.06 0'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='1'/></svg>\")",
        "navy-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(26,163,232,0.18), rgba(1,11,28,0) 60%)",
        "accent-glow":
          "radial-gradient(circle at center, rgba(26,163,232,0.45) 0%, rgba(26,163,232,0) 60%)",
        "soft-glow":
          "radial-gradient(circle at center, rgba(169,219,254,0.18) 0%, rgba(169,219,254,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(20px,-30px,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "drift": "drift 18s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
