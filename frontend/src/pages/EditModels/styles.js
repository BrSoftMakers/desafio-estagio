import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  form {
    width: 65%;
    margin: 0 auto;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      width: 95%;
    }
    label {
      margin: 0.5rem 0;
      margin-left: 5rem;
      font-size: 1.1rem;
      color: var(--);
    }
    input {
      width: 75%;
      padding: 10px 25px;
      margin: 0 auto;
    }
    button {
      margin: 1rem auto;
    }
  }
`;
