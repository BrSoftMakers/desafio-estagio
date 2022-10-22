import React, { useState } from "react";
import NavBar from "../Navbar";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <h1>Midnight Crud</h1>
      <NavBar />
    </Container>
  );
}

export default Header;
