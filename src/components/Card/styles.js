import styled from "styled-components";

export const Container = styled.div`
  max-width: 250px;
  min-width: 250px;
  background-color: white;
  margin: 25px 0;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(0.9);
  }
  img {
    width: 100%;
    height: 175px;
    padding: 10px;
  }
`;

export const Text = styled.div`
  width: 95%;
  padding: 5px 0;
  margin-left: 0.6rem;
`;

export const Brand = styled.span`
  text-align: left;
  color: var(--Cyan-300);
  display: block;
  font-size: 0.85rem;
`;

export const Model = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Category = styled.span`
  font-size: 0.75rem;
  color: var(--Gray-600);
  display: block;
  line-height: 8px;
  margin-bottom: 0.5rem;
`;

export const Price = styled.span`
  font-size: 0.85rem;
  color: var(--Cyan-300);
  font-weight: 600;
`;
