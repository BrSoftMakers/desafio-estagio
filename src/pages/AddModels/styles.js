import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  main {
    width: 100%;
    height: 100%;
    margin-top: 7.5rem;
    form {
      width: 350px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      label {
      }
      input {
        width: 50%;
      }
      select {
        width: 35%;
      }
    }
  }
`;

export const HeaderComponent = styled.header`
  width: 100%;
  height: 90px;
  background-color: var(--White-900);
`;
