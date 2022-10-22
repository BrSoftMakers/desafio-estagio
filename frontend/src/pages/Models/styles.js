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
  margin-top: 7.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  row-gap: 2rem;
`;

export const CardContent = styled.div`
  width: 250px;
  position: relative;
  transition: 0.5s;
  background-color: red;
  margin: 0 auto;
  :hover {
    div {
      opacity: 1;
    }
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export const EditButton = styled.div`
  position: absolute;
  top: 3.3rem;
  right: 1rem;
  opacity: 0;
  transition: 0.5s;
  button {
    padding: 5px;
    background-color: var(--Cyan-300);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 2px;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--Cyan-300);
      color: var(--White-900);
      text-decoration: none;
    }
  }
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 5.8rem;
  right: 1rem;
  opacity: 0;
  transition: 0.5s;
  button {
    padding: 5px;
    display: flex;
    align-items: center;
    border: 1px solid var(--Cyan-300);
    color: var(--Cyan-300);
    justify-content: center;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 2px;
  }
`;
