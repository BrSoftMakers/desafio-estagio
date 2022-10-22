import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 90px;
  text-align: center;
  background-color: var(--White-900);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  h1 {
    font-size: 1.2rem;
  }
`;

function Footer() {
  return (
    <Container>
      <h1>Por: Alexsandro Martins</h1>
    </Container>
  );
}

export default Footer;
