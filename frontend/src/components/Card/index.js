import React from "react";
import { Brand, Category, Model, Price, Situation, Text } from "./styles";
import { Container } from "./styles";

function Card({ image, brand, model, category, price, situation, key }) {
  return (
    <Container key={key}>
      <img src={image} />
      <Text>
        <Brand>{brand}</Brand>
        <Model>{model}</Model>
        <Category>{category}</Category>
        <Price>R$ {price}</Price>
        <Situation>{situation}</Situation>
      </Text>
    </Container>
  );
}

export default Card;
