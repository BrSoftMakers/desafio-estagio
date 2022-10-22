import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  footer {
    margin-top: 7.5rem;
  }
`;

export const SectionMain = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 7.5rem;
  position: relative;
`;

export const SectionInfo = styled.section`
  width: 100%;
  margin-top: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    height: 378px;
  }
  div {
    width: 100%;
    max-width: 350px;
    margin: 0 1rem;
    margin-bottom: 1rem;
    padding: 25px;
    height: 250px;
    background-color: var(--White-900);
    text-align: left;
    transition: background 0.5s;
    color: var(--Gray-600);
    border-radius: 4px;
    :hover {
      background-color: var(--Cyan-300);
      color: var(--White-900);
      cursor: pointer;
    }
    h4 {
      margin: 10px 0;
      font-size: 1.2rem;
    }
    svg {
      font-size: 3.2rem;
    }
  }
`;

export const SectionCars = styled.section`
  width: 100%;
  margin-top: 7.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: red;
  button {
    margin-top: 3rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100vh;
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
