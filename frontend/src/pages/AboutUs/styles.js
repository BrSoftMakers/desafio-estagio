import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  footer {
    margin-top: 7.5rem;
  }
`;

export const Main = styled.main`
  width: 95%;
  margin: 0 auto;
  h1 {
    font-weight: 600;
  }
  footer {
    margin-top: 7.5rem;
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
