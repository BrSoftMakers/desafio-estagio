import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
export const HeaderComponent = styled.header`
  width: 100%;
  height: 90px;
`;
export const SectionMain = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 7.5rem;
  position: relative;
`;

export const SectionInfo = styled.section`
  width: 100%;
  height: 378px;
  margin-top: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
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
  button {
    margin-top: 3rem;
  }
`;

export const Content = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 7.5rem;
`;