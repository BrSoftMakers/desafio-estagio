import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { Container } from "./styles";

function AddModels() {
  const [values, setValues] = useState();
  const [details, setDetails] = useState([]);

  const handleChangeValues = (value) => {
    setValues((preventValue) => ({
      ...preventValue,
      [value.target.name]: value.target.value
    }));
  };

  const handleSendChangeValues = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`http://localhost:8080/cars/`, values)
        .then((data) => alert("Criado Com sucesso!"));
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <Header />
      <form>
        <label>Imagem</label>
        <input
          type={"text"}
          placeholder={"Link da imagem..."}
          name={"img"}
          onChange={handleChangeValues}
        />
        <label>Marca</label>
        <input
          type={"text"}
          placeholder={"Marca do Carro..."}
          name={"brand"}
          onChange={handleChangeValues}
        />
        <label>Modelo</label>
        <input
          type={"text"}
          placeholder={"Modelo do Carro..."}
          name={"model"}
          onChange={handleChangeValues}
        />
        <label>Categoria</label>
        <input
          type={"text"}
          placeholder={"Categoria do Carro..."}
          name={"category"}
          onChange={handleChangeValues}
        />
        <label>Situação</label>
        <input
          type={"text"}
          placeholder={"Modelo do Carro..."}
          name={"situation"}
          onChange={handleChangeValues}
        />
        <label>Preço</label>
        <input
          type={"text"}
          placeholder={"Modelo do Carro..."}
          name={"price"}
          onChange={handleChangeValues}
        />

        <Button
          type={"submit"}
          onClick={handleSendChangeValues}
          text={"Cadastrar"}
        />
      </form>
    </Container>
  );
}

export default AddModels;
