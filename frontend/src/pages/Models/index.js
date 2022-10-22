import React, { useEffect, useMemo, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, Content, HeaderComponent, Main } from "./styles";

import axios from "axios";

export const car = [
  {
    id: 1,
    brand: "BMW",
    model: "Bmw M5",
    category: "Sedan",
    price: "700.000",
    situation: "Disponível",
    image: "https://i.ibb.co/DPFYg8B/bmw.jpg"
  },
  {
    id: 2,
    brand: "Mazda",
    model: "Mazda",
    category: "Mazda",
    price: "700.000",
    situation: "Indisponível",
    image: "https://i.ibb.co/vJ0gTMv/mazda.jpg"
  },
  {
    id: 3,
    brand: "Mitsubishi",
    model: "Mitsubishi",
    category: "Mitsubishi",
    price: "700.000",
    situation: "Disponível",
    image: "https://i.ibb.co/0Fc9Xr4/mitsubishi.jpg"
  }
];

function Models() {
  const [search, setSearch] = useState();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/cars").then((response) => {
      setCars(response.data);
    });
  }, [cars]);

  // Função para filtrar lista; useMemo usado para não afetar na perfomace;
  // Memorizando a fução, sendo executada quando necessario(quando o valor de (search) for alterado).
  const ListFilter = useMemo(() => {
    return cars.filter((valueState) => valueState.brand);
  }, [search]);
  return (
    <Container>
      <HeaderComponent>
        <Header />
      </HeaderComponent>
      <Main>
        <select value={search} onChange={(e) => setSearch(e.target.value)}>
          <option>Marca</option>
          <option>Mazda</option>
          <option>Mitsubishi</option>
          <option>BMW</option>
        </select>
        <Content>
          {cars.map((item) => (
            <>
              <Card
                key={item._id}
                brand={item.brand}
                image={item.image}
                category={item.category}
                price={item.price}
                model={item.model}
                situation={item.situation}
              />
              <button
                onClick={() => {
                  axios.delete(`http://localhost:8080/cars/${item._id}`);
                }}
              >
                Excluir
              </button>
            </>
          ))}
        </Content>
      </Main>
      <footer></footer>
    </Container>
  );
}

export default Models;
