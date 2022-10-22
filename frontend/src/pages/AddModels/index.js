import React, { useState } from "react";
import axios from "axios";

// Components
import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { Container } from "./styles";

function AddModels() {
  // estados
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((preventValue) => ({
      ...preventValue,
      [value.target.name]: value.target.value
    }));
  };

  // criando novo modelo de carro
  const handleAddCar = (e) => {
    // previnido o reload da página
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
          name={"image"}
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

        <Button type={"submit"} onClick={handleAddCar} text={"Cadastrar"} />
      </form>
      <Footer />
    </Container>
  );
}

export default AddModels;
