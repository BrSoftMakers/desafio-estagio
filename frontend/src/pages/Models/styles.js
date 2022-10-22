import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const HeaderComponent = styled.header`
  width: 100%;
  height: 90px;
`;
export const Main = styled.main`
  width: 95%;
  margin: 0 auto;
  select {
    padding: 5px;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    background-color: var(--White-900);
    border: 1px solid var(--Gray-300);
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
