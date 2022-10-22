import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 280px;
  background-color: white;
  cursor: pointer;

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
