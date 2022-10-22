import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Icones
import { BsPencilSquare } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

// Components

import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  CardContent,
  Container,
  Content,
  DeleteButton,
  EditButton,
  Main
} from "./styles";

function Models() {
  // Estados
  const [cars, setCars] = useState([]);

  // Conexão com Api
  useEffect(() => {
    axios.get("http://localhost:8080/cars").then((response) => {
      setCars(response.data);
    });
  }, [cars]);
  // Função para deletar item
  const handleDeleteItem = (id) => {
    axios.delete(`http://localhost:8080/cars/${id}`);
  };

  return (
    <Container>
      <Header />
      <Main>
        <Content>
          {cars.map((item) => (
            <CardContent key={item._id}>
              <Card
                brand={item.brand}
                image={item.image}
                category={item.category}
                price={item.price}
                situation={item.situation}
                model={item.model}
              />
              <EditButton>
                <button>
                  <Link to={`/vehicles/${item._id}`}>
                    <BsPencilSquare />
                  </Link>
                </button>
              </EditButton>
              <DeleteButton>
                <button onClick={() => handleDeleteItem(item._id)}>
                  <MdDeleteOutline />
                </button>
              </DeleteButton>
            </CardContent>
          ))}
        </Content>
      </Main>
      <Footer />
    </Container>
  );
}

export default Models;
