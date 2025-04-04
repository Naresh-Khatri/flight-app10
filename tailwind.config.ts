import colors from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1B2C4A", // Deep Navy
          lightest: "#E6EAF0",
          lighter: "#99A7BF",
          light: "#475F8D",
          dark: "#162439",
          darker: "#101B2B",
          darkest: "#050A0E",
          foreground: "hsl(var(--background))",
        },
        secondary: {
          DEFAULT: "#C6A55C", // Gold
          lightest: "#F7F2E6",
          lighter: "#E7D7B3",
          light: "#D7BC80",
          dark: "#B28F3D",
          darker: "#8F7331",
          darkest: "#493B19",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#2A9D8F", // Teal
          lightest: "#E6F5F3",
          lighter: "#99D7D0",
          light: "#33AFA1",
          dark: "#1F756B",
          darker: "#154E47",
          darkest: "#051312",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px -2px rgba(27, 44, 74, 0.12)',
        'luxury-hover': '0 8px 30px -4px rgba(27, 44, 74, 0.18)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shine: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "wave": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shine: "shine 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "wave": "wave 15s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, #1B2C4A 0%, #2A9D8F 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C6A55C 0%, #E7D7B3 100%)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};
