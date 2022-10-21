import React from "react";

import Header from "../../components/Header";
import { Container, HeaderComponent } from "./styles";

function AddModels() {
  return (
    <Container>
      <HeaderComponent>
        <Header />
      </HeaderComponent>
      <main>
        <form>
          <label>Marca</label>
          <input type={"text"} placeholder={"Marca do Carro..."} />
          <label>Modelo</label>
          <input type={"text"} placeholder={"Modelo do Carro..."} />
          <label>Categoria</label>
          <select id="myList" onchange="favTutorial()">
            <option> Selecione a Categoria</option>
            <option> Sedan </option>
            <option> Hatch </option>
            <option> SUV </option>
            <option> Crossover </option>
            <option> Minivans </option>
            <option> Picapes </option>
          </select>
          <label>Situação</label>
          <select id="myList" onchange="favTutorial()">
            <option> Disponível </option>
            <option> Indisponível </option>
          </select>
          <button type={"submit"}>Cadastrar</button>
        </form>
      </main>
    </Container>
  );
}

export default AddModels;
