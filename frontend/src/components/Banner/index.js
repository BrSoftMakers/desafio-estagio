import React from "react";
import { Circle, Container, Content, Description, Title } from "./styles";

function Banner({ image, description, titleContrast, title }) {
  return (
    <Container>
      <Content>
        <Circle>
          <Description>{description}</Description>
          <Title>
            <h1>
              <span>{titleContrast}</span>
              {title}
            </h1>
          </Title>
          <img src={image} />
        </Circle>
      </Content>
      <aside>
        <div></div>
        <div></div>
        <div></div>
      </aside>
    </Container>
  );
}

export default Banner;
