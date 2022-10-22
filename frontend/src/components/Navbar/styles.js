import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 100vh;
    position: fixed;
    top: 0;
    right: ${(props) => props.active};
    background-color: var(--White-900);
    transition: 0.75s;
    z-index: 999;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Closed = styled.div`
  width: 100%;
  padding: 12px 0;
  font-size: 1.5rem;
  color: var(--Black-900);
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  svg {
    margin-left: 2rem;
    cursor: pointer;
  }
`;
export const IconMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  a {
    display: flex;
    align-items: center;
    color: var(--Black-900);
    font-size: 18pt;
  }
`;

export const ItemLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  color: var(--Black-900);
  span {
    text-align: center;
  }
  &.active {
    color: var(--Pink-700);
  }
`;
