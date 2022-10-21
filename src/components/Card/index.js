import React from "react";
import { Brand, Category, Model, Price, Text } from "./styles";
import { Container } from "./styles";

function Card({ image, brand, model, category, price, situation }) {
  return (
    <Container>
      <img src={image} />
      <Text>
        <Brand>{brand}</Brand>
        <Model>{model}</Model>
        <Category>{category}</Category>
        <Price>R$ {price}</Price>
      </Text>
    </Container>
  );
}

export default Card;
