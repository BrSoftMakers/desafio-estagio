import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "degrade-blue": "linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)",
        "degrade-dark": "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)",
      },
      outlineColor: {
        "degrade-blue": "linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)"
      },
      colors: {
        "custom-gray": "rgba(64, 74, 92, 1)",
        "degrade-blue": "linear-gradient(90deg, #00CAFC 0%, #0056E2 100%)",
        "sd-blue": "rgba(0, 86, 226, 0.2)", 
      },
      width:{
        "1/10":"10%",
        "5/100":"5%",
        "22/100":"22%",
        "25/10vh":"2.5vh",
        "1vh":"1vh",
        "2vh":"2vh",
        "3vh":"3vh",
        "4vh":"4vh",
        "6vh":"6vh",
        "8vh":"8vh",
      },
      height:{
        "8/10":"80%",
        "2/10":"20%",
        "3/10":"30%",
        "12/100":"12vh",
        "1vh":"1vh",
        "2vh":"2vh",
        "3vh":"3vh",
        "4vh":"4vh",
        "6vh":"6vh",
        "8vh":"8vh",
      },
      margin:{
        "5/1000": "0.5%",
        "1vh": "1vh",
      },
      padding:{
        "7/1000":"0.7%",
        "2/10": "2%",
        "3vh": "3vh",
      }
    },
  },
  plugins: [],
};
export default config;
