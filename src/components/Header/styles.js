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
  }
`;

// Estilização Logo

export const Logo = styled.div`
  width: 20%;
  min-width: 177.74px;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 30px;
    height: 40px;
    margin-right: 1.5rem;
  }
  a {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--Black-900);
  }
`;

// Estilizando a propriedade Navlink do React Router

export const LinkItem = styled(NavLink)`
  color: var(--Gray-600);
  text-decoration: none;
  font-weight: 400;
  font-size: 1.25rem;
  &.active {
    padding-bottom: 2px;
    color: var(--Cyan-300);
    border-bottom: 2px solid var(--Cyan-300);
  }
`;

export const User = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--Black-900);
  cursor: pointer;
  svg {
    color: var(--Black-900);
    font-size: 1.15rem;
  }
`;
