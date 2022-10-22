import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    width: 70%;
    height: 100%;
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
  @media screen and (min-width: 768px) {
    a {
      display: flex;
      align-items: center;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 5rem;
    height: 50%;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }
`;

export const Closed = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  font-size: 2.5rem;
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
    font-size: 1.5rem;
  }
`;

export const ItemLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: var(--Black-900);
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  &.active {
    color: var(--Pink-700);
  }
`;
