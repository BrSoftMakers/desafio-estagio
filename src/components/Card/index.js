import React from "react";
import { Container } from "./styles";

function Card({ image, brand, model, category, situation }) {
  return (
    <Container>
      <img src={image} />
      <span>{brand}</span>
      <span>{model}</span>
      <span>{category}</span>
    </Container>
  );
}

export default Card;
