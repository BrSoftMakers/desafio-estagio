import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Closed, Container, navText, Ul, IconMenu, ItemLink } from "./styles";
import { Data } from "./data";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const handleClickMenu = () => setMenu(!menu);
  return (
    <>
      <IconMenu>
        <Link to="#" onClick={() => handleClickMenu()}>
          <AiOutlineMenu />
        </Link>
      </IconMenu>
      {menu ? (
        <>
          <Container active={"0px"}>
            <Closed>
              <AiOutlineClose onClick={() => handleClickMenu()} />
            </Closed>
            {Data.map((item) => {
              return (
                <Ul key={item.id}>
                  <li>
                    <ItemLink
                      to={item.path}
                      onClick={() => handleClickMenu()}
                      end
                    >
                      {item.icon} <span>{item.name}</span>
                    </ItemLink>
                  </li>
                </Ul>
              );
            })}
          </Container>
        </>
      ) : (
        <>
          <Container active={"-100%"}>
            <Closed>
              <AiOutlineClose onClick={() => handleClickMenu()} />
            </Closed>
            {Data.map((item) => {
              return (
                <Ul key={item.id}>
                  <ItemLink
                    to={item.path}
                    onClick={() => handleClickMenu()}
                    end
                  >
                    {item.name}
                  </ItemLink>
                </Ul>
              );
            })}
          </Container>
        </>
      )}
    </>
  );
}

export default NavBar;
