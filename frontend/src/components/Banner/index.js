import React from "react";
import { Circle, Container, Description, Title } from "./styles";

function Banner({ image, description, titleContrast, title }) {
  return (
    <Container>
      <Circle>
        {/* Pequeno Texto */}
        <Description>{description}</Description>
        <Title>
          <h1>
            {/* Texto com Modelo do carro Em Branco */}
            <span>{titleContrast}</span>
            {/* Texto com Modelo do carro preto */}
            {title}
          </h1>
        </Title>
        {/* Imagem do carro */}
        <img src={image} />
      </Circle>
    </Container>
  );
}

export default Banner;
