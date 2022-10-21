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
  height: 100%;
  margin: 0 auto;
  margin-top: 7.5rem;
  h1 {
    font-weight: 600;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  img {
    width: 100%;
    max-width: 640px;
  }
  p {
    margin-top: 1rem;
  }
`;
