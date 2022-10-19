import React from "react";

import Shoshinsha from "../../assets/shoshinsha.png";

// Estilos

import { Container, Link, Logo } from "./styles";

// Recuperando as informações do menu
import { Data } from "./data";

function Header() {
  return (
    <Container>
      <Logo>
        <img src={Shoshinsha} />
        <h1>CRUD CAR</h1>
      </Logo>
      <ul>
        {/* Mapeando Array Para gerar os links do menu  */}
        {Data.map((item) => (
          // Atribuindo Identificador único do item
          <Link to={item.path} key={item.id} end>
            {/* Atribuindo o Texto do link */}
            {item.name}
          </Link>
        ))}
      </ul>
      <div>Circle</div>
    </Container>
  );
}

export default Header;
