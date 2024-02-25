import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        day_picker_bg: "#060E23",
        dark: "#00060F",
        dark_blue: "#001E4D",
        default_blue: "#0056E2",
        light_blue: "#00CAFC",
        grey: "#404A5C"
      },
      borderWidth: {
        3: "3px"
      },
      boxShadow: {
        blur: "0 6px 15px -3px rgb(0 0 0 / 0.1)",
        blur_lg: "0 6px 25px 3px rgb(0 0 0 / 0.1)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}

export default config
