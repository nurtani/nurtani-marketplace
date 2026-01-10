/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
      },
      colors: {
        kraflab: {
          primary: "#1E3954",
          secondary: "#3FA0B5",

          background: "#FCFEFF",
          foreground: "#343D45",

          navy: "#1E3A5F",
          blue: "#175CD3",
          teal: "#2EC4B6",
          gold: "#F4B860",
          white: "#F8F9FA",
          sky: "#2E90FA",
          ice: "#F5FAFF",
          "baby-blue": "#84CAFF",
          "frost-blue": "#2680C2CC",
          "light-gray": "#E5E7EB",
          "dark-gray": "#4B5563",
          snow: "#FBFCFE",
          mist: "#E1E7EF",
          forest: "#166534",
          mint: "#DCFCE7",
          charcoal: "#0F1729",
          slate: "#65758B",
          steel: "#6B7280",
          cloud: "#FAFCFF",
          graphite: "#6A6D75",
          frost: "#F9FCFF",
          "powder-blue": "#ACD1FC",
          "aqua-mist": "#E1F6F5",
          "vivid-blue": "#2630E2",
          "gray-modal": "#060B19",
          "azure-blue": "#055BA8",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
          DEFAULT: "hsl(var(--accent))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom colors - Updated with new palette
        certiwarm: {
          primary: "#2680C2", // Blue from palette
          secondary: "#2EC486", // Green from palette
          accent: "#2680C2", // Blue accent
          warm: "#2EC486", // Green warm
          light: "#F8F9FC", // Light background
          dark: "#080819", // Dark navy from palette
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-in": {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-in-right": {
          from: {
            transform: "translateX(30px)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        "rotate-shield": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "rotate-shield": "rotate-shield 20s linear infinite",
        shimmer: "shimmer 2.5s infinite linear",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-sertif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "shimmer-gradient":
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)",
        "hero-pattern":
          'url("/public/lovable-uploads/dbbc9a28-2130-4afb-9eb3-b99e97020964.png")',
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-card": "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-button": "0 4px 12px 0 rgba(31, 38, 135, 0.07)",
        neon: "0 0 20px rgba(91, 106, 245, 0.3)",
        "neon-hover": "0 0 25px rgba(91, 106, 245, 0.5)",
        warm: "0 20px 50px rgba(230, 164, 92, 0.2)",
        soft: "0 10px 50px rgba(0, 0, 0, 0.05)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
