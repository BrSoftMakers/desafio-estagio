import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
        /* Estilos Globais */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: var(--White-700);
        font-family: 'Poppins', sans-serif;
    }
    :root{

    /* ############ Cores ############ */
    
        /* Preto */
        --Black-900: #000000;
        /* Branco */
        --White-900: #ffffff;
        --White-700: #fafafa;
        /* Cinza */
        --Gray-600: #9A9797;
        --Gray-300: #d9d9d9;
        /* Rosa */
        --Pink-700: #ff0066;
        /* Azul */
        --Cyan-300: #0038FF;

    }
`;
