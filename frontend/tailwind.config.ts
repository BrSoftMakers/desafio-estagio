import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000814",
        dark_blue: "#001E4D",
        default_blue: "#0056E2",
        light_blue: "#00CAFC",
        grey: "#404A5C"
      }
    }
  },
  plugins: []
}
export default config
