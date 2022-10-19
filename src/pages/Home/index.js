import React from "react";

// Components
import Header from "../../components/Header";

// Estilos
import {
  Container,
  HeaderComponent,
  Main,
  SectionMain,
  SectionInfo,
  SectionCars,
  Footer
} from "./styles.js";

function Home() {
  return (
    <Container>
      <HeaderComponent>
        <Header />
      </HeaderComponent>
      <Main>
        <SectionMain></SectionMain>
        <SectionInfo></SectionInfo>
        <SectionCars></SectionCars>
      </Main>
      <Footer></Footer>
    </Container>
  );
}

export default Home;
