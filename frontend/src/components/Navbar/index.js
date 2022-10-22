import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icones
import { Closed, Container, Ul, IconMenu, ItemLink } from "./styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// Arquivo com array de dados para o menu
import { Data } from "./data";

function NavBar() {
  // Estado do Menu
  const [menu, setMenu] = useState(false);
  // Função Para alterar o estado do component
  const handleClickMenu = () => setMenu(!menu);
  return (
    <>
      <IconMenu>
        {/* ToggleMenu */}
        <Link to="#" onClick={() => handleClickMenu()}>
          <AiOutlineMenu />
        </Link>
      </IconMenu>
      {menu ? (
        // Posição do Menu quando o estado do Menu True
        <>
          <Container active={"0px"}>
            <Closed>
              <AiOutlineClose onClick={() => handleClickMenu()} />
            </Closed>
            <Ul>
              {Data.map((item) => {
                return (
                  <ItemLink
                    to={item.path}
                    onClick={() => handleClickMenu()}
                    key={item.id}
                    end
                  >
                    {item.icon} <span>{item.name}</span>
                  </ItemLink>
                );
              })}
            </Ul>
          </Container>
        </>
      ) : (
        // Posição do Menu quando o estado do Menu false
        <>
          <Container active={"-100%"}>
            <Closed>
              <AiOutlineClose onClick={() => handleClickMenu()} />
            </Closed>
            <Ul>
              {Data.map((item) => {
                return (
                  <ItemLink
                    to={item.path}
                    onClick={() => handleClickMenu()}
                    key={item.id}
                    end
                  >
                    {item.icon} <span>{item.name}</span>
                  </ItemLink>
                );
              })}
            </Ul>
          </Container>
        </>
      )}
    </>
  );
}

export default NavBar;
