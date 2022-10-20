import React from "react";
import Banner from "../../components/Banner";

// Components
import Header from "../../components/Header";

// Icones
import { AiOutlineLike } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";

// Estilos
import {
  Container,
  HeaderComponent,
  SectionMain,
  SectionInfo,
  SectionCars,
  Footer,
  Circle,
  Image
} from "./styles.js";

function Home() {
  return (
    <Container>
      <HeaderComponent>
        <Header />
      </HeaderComponent>
      <main>
        <SectionMain>
          <Banner
            image={"https://i.ibb.co/LxJ4k5R/car.png"}
            description={"Seu novo carro está Aqui"}
            titleContrast={"Mitsubishi E"}
            title={"volution 9"}
          />
        </SectionMain>
        <SectionInfo>
          <div>
            <AiOutlineLike />
            <h4>Atendimento</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div>
            <RiSecurePaymentFill />
            <h4>Pagamentos</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
          <div>
            <BsSpeedometer2 />
            <h4>Veículos Velozes</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
          </div>
        </SectionInfo>
        {/* <SectionCars></SectionCars> */}
      </main>
      <Footer></Footer>
    </Container>
  );
}

export default Home;
