import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
  }
  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);

  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;
