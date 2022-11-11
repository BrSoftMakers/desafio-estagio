import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0px 5rem;
  color: #1b82e2;
  font-weight: bold;
  width: 100%;
  gap: 5px;
`;

export const StyledInput = styled.input`
  border-width: 1px;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  border-width: 1px;
  color: #1b82e2;
  outline-color: #1b82e2;
  border-color: #1b82e2;
  border-style: solid;

  &::placeholder {
    color: #1b82e2;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  color: #1b82e2;
  border-color: #1b82e2;
  outline: none;

  option {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const StyledButton = styled.button`
  padding: 0.8rem 0;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #1b82e2;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 5px 10px 0px grey;
  width: 100%;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.8s all;

  &:hover {
    background-color: rgba(27, 130, 226, 0.8);
    box-shadow: 0px 4px 20px 0px rgb(211, 211, 211, 0.8);
  }
`;
