import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Container, Content, HeaderComponent, Main } from "./styles";

function About() {
  return (
    <Container>
      <HeaderComponent>
        <Header />
      </HeaderComponent>
      <Main>
        <h1>Sobre Nós</h1>
        <Content>
          <a href="https://unsplash.com/s/photos/dealership?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            <img src={"https://i.ibb.co/xDMxwXk/dealership.jpg"} />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet consectetur adipiscing elit ut. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa. Pretium aenean
            pharetra magna ac placerat vestibulum lectus mauris. Tincidunt augue
            interdum velit euismod. Parturient montes nascetur ridiculus mus
            mauris vitae. Ultrices vitae auctor eu augue ut lectus arcu bibendum
            at. Lorem sed risus ultricies tristique nulla. Dolor sit amet
            consectetur adipiscing elit pellentesque habitant morbi. Adipiscing
            vitae proin sagittis nisl rhoncus. Elementum nisi quis eleifend
            quam. Ipsum suspendisse ultrices gravida dictum fusce ut. Tellus
            molestie nunc non blandit massa enim. Semper quis lectus nulla at
            volutpat diam.
          </p>
          <p>
            Eget velit aliquet sagittis id consectetur purus ut faucibus. At
            consectetur lorem donec massa sapien faucibus et molestie. Commodo
            odio aenean sed adipiscing diam donec. Fermentum odio eu feugiat
            pretium nibh ipsum consequat nisl. Eget mauris pharetra et ultrices
            neque ornare aenean euismod elementum. Condimentum lacinia quis vel
            eros donec ac odio. Massa ultricies mi quis hendrerit dolor magna
            eget est. At in tellus integer feugiat scelerisque varius morbi. Ut
            sem nulla pharetra diam sit amet nisl suscipit adipiscing. Lacus sed
            turpis tincidunt id aliquet risus. Bibendum ut tristique et egestas.
            Euismod elementum nisi quis eleifend quam adipiscing vitae proin
            sagittis. Leo vel orci porta non pulvinar neque. Tellus cras
            adipiscing enim eu turpis egestas pretium. Leo duis ut diam quam.
            Tincidunt arcu non sodales neque sodales. Tincidunt tortor aliquam
            nulla facilisi cras fermentum odio. Consequat mauris nunc congue
            nisi vitae suscipit tellus mauris.
          </p>
        </Content>
      </Main>
      <footer></footer>
    </Container>
  );
}

export default About;
