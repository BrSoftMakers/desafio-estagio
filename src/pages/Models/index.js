import React, { useMemo, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Container, HeaderComponent } from "./styles";

const car = [
  {
    id: 1,
    marca: "Fiat",
    modelo: "Uno",
    tipo: "hatch",
    situacao: "Disponível"
  },
  {
    id: 2,
    marca: "Subaru",
    tipo: "sedan",
    modelo: "Wrx sti",
    situacao: "Indisponível"
  },
  {
    id: 3,
    marca: "Mitsubishi",
    tipo: "sedan",
    modelo: "Lancer Evolution 9",
    situacao: "Disponível"
  }
];

function Models() {
  const [search, setSearch] = useState("");
  // Função para filtrar lista
  // useMemo usado para não afetar na perfomace;
  // Memorizando a fução, sendo executada quando necessario(quando o valor de (search) for alterado)
  const ListFilter = useMemo(() => {
    const SearchLowerCase = search.toLowerCase();
    return car.filter((valueState) =>
      valueState.marca.toLowerCase().includes(SearchLowerCase)
    );
  }, [search]);
  return (
    <Container>
      <HeaderComponent>
        <Header />
      </HeaderComponent>
      <select value={search} onChange={(e) => setSearch(e.target.value)}>
        <option>Marca</option>
        <option>Fiat</option>
        <option>Subaru</option>
        <option>Mitsubishi</option>
      </select>
      <main>
        {ListFilter.map((item) => (
          <Card
            key={item.id}
            brand={item.marca}
            image={
              "https://file.kelleybluebookimages.com/kbb/base/evox/CP/6791/2011-Subaru-Impreza-front_6791_032_2400x1800_37J.png?interpolation=high-quality&downsize=825:*"
            }
            category={item.category}
            model={item.modelo}
            situation={item.situacao}
          />
        ))}
      </main>
      <footer></footer>
    </Container>
  );
}

export default Models;
