import styled from "styled-components";

export const Container = styled.div`
    color: black;
    border: 1px solid #555; /* expessura, tipo e cor da borda */
    border-radius: 15px; /* Deixa a borda aredondada */
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center; /* alinhando os itens no centro do container */
    justify-content: space-evenly, 0px; /* espaço entre os intens dentro do container */
    background: #20212C; /* cor do fundo */
    flex-wrap: wrap; /* Faz os itens se ajustarem junto com o container quando aumente ou diminua */

    .image{
        color: white;
        margin-right: 5px;
        
    }

    input{
        border: 0;
        background: transparent;
        outline: 0;
        color: white;
        flex: 1;
        width: 150px;
    }
`;

