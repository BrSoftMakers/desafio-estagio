import styled from "styled-components";
import { StyledListButton } from "../home/Home.style";

export const StyledSection = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledContainer = styled.div`
  border-style: solid;
  border-color: #1b82e2;
  border-width: 2px;
  padding: 0.5rem;
  border-radius: 10px;
  width: 100%;
`;

export const StyledTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #1b82e2;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  color: #1b82e2;
  font-weight: 700;
  text-transform: capitalize;
`;

export const BotaoVoltar = styled(StyledListButton)`
  background-color: #1b82e2;
  padding: 1rem;
  width: fit-content;

  &:hover {
    background-color: rgba(27, 130, 226, 0.8);
    box-shadow: 0px 4px 10px 0px rgba(27, 130, 226, 0.8);
  }
`;
