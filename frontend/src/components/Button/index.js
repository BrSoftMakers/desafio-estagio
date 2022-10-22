import React from "react";

// Estilos
import { Container } from "./styles";

function Button({ text, onClick, type }) {
  return (
    <Container type={type} onClick={onClick}>
      {text}
    </Container>
  );
}

export default Button;
