import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ul {
    width: 50%;
    min-width: 404px;
    height: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    /* li {
      font-weight: 400;
      font-size: 1.25rem;
      margin: 2.125rem;
    } */
  }
`;

// Estilização Logo

export const Logo = styled.div`
  width: 15%;
  min-width: 177.74px;
  height: 100%;
  display: flex;
  align-items: center;
  img {
    width: 35px;
    height: 50px;
  }
  h1 {
    font-size: 1.25rem;
    margin-left: 1.5rem;
    font-weight: 600;
  }
`;

// Estilizando a propriedade Navlink do React Router

export const Link = styled(NavLink)`
  color: var(--Gray-600);
  text-decoration: none;
  font-weight: 400;
  font-size: 1.25rem;
  &.active {
    padding-bottom: 2px;
    color: var(--Pink-700);
    border-bottom: 2px solid var(--Cyan-300);
  }
`;
