import React from "react";
// Logo
import Shoshinsha from "../../assets/shoshinsha.png";
// Icones
import { FaUserAlt } from "react-icons/fa";
// Estilos
import { Container, LinkItem, Logo, User } from "./styles";
// Importando o array com informações do path, icons, name e id.
import { Data } from "./data";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={Shoshinsha} />
          MIDNIGHT CARS
        </Link>
      </Logo>
      <ul>
        {/* Mapeando Array Para gerar os links do menu  */}
        {Data.map((item) => (
          // Atribuindo Identificador único do item
          <LinkItem to={item.path} key={item.id} end>
            {/* Atribuindo o Texto do link */}
            {item.name}
          </LinkItem>
        ))}
      </ul>
      <User>
        <FaUserAlt />
      </User>
    </Container>
  );
}

export default Header;