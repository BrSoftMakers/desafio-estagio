import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const StyledDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 2.5rem;
  border-radius: 10px;
`;

export const StyledHeader = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: #1b82e2;
`;

export const StyledUl = styled.ul`
  background-color: white;
  border-radius: 10px;
  height: 500px;
  background-color: transparent;
  overflow: scroll;
  overflow-x: hidden;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::-webkit-scrollbar {
    background-color: white;
    outline: 1px solid slategrey;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1b82e2;
    border-radius: 5px;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  border-color: white;
  color: #1b82e2;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  padding: 1rem;
  align-items: center;
  border-radius: 10px;
  gap: 15px;
`;

export const StyledInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledListButton = styled.button`
  padding: 0.5rem 0.8rem;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.8s all;

  &:hover {
    background-color: rgba(27, 130, 226, 0.8);
    box-shadow: 0px 4px 20px 0px rgb(211, 211, 211, 0.8);
  }
`;

export const BotaoExcluir = styled(StyledListButton)`
  background-color: #e21b1f;

  &:hover {
    background-color: rgba(226, 27, 31, 0.8);
    box-shadow: 0px 4px 10px 0px rgb(226, 27, 31, 0.5);
  }
`;

export const BotaoEditar = styled(StyledListButton)`
  background-color: #1be27b;

  &:hover {
    background-color: rgba(27, 226, 123, 0.8);
    box-shadow: 0px 4px 10px 0px rgb(27, 226, 123, 0.5);
  }
`;
