import styled from "styled-components";

export const Container = styled.div`
    display: flex; /* posiciona os itens um ao lado do outro. */
    background-color: #20212C; /* cor do fundo do componente */
    border-radius: 10px; /* tipo da borda usando rad para arrendodar a ponta */
    margin-bottom: 10px; /* distancia de baixo entre os itens */
    align-items: center; /* para que tudo fique alinhado */
    justify-content: space-around; /* para existir um espaço entre as informações */

    label{
        color: #CCC;
        margin: 10px;
    }

`;