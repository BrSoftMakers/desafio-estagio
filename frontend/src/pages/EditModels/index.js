import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { Container } from "./styles";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

function EditModels() {
  const [values, setValues] = useState();
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Conexão e Requisição para a api
    axios.get(`http://localhost:8080/cars/${id}`).then((data) => {
      // Conectando os dados da api em um objeto
      const { image, brand, model, category, situation, price } = data.data;
      // Armazenando os dados anteriormente no objeto integrado a variavel details
      const details = {
        id,
        image,
        brand,
        model,
        category,
        situation,
        price
      };
      // armazenando no estado details
      setDetails(details);
    });
  }, [id]);

  // armazenando valores dos inputs atraves do name em uma função
  const handleChangeValues = (value) => {
    // armazenando os dados no estado values
    setValues((preventValue) => ({
      ...preventValue,
      [value.target.name]: value.target.value
    }));
  };

  // Enviando as alterações para o banco de dados
  const handleSendChangeValues = (e) => {
    // Previnindo o carregamento do form
    e.preventDefault();
    try {
      axios
        .patch(`http://localhost:8080/cars/${id}`, values)
        .then((data) => alert("Alterado Com sucesso!"));
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
          placeholder={"Link imagem..."}
          name={"img"}
          defaultValue={details.image}
          onChange={handleChangeValues}
        />
        <label>Marca</label>
        <input
          type={"text"}
          placeholder={"Marca do Carro..."}
          name={"brand"}
          defaultValue={details.brand}
          onChange={handleChangeValues}
        />
        <label>Modelo</label>
        <input
          type={"text"}
          placeholder={"Modelo do Carro..."}
          name={"model"}
          defaultValue={details.model}
          onChange={handleChangeValues}
        />
        <label>Categoria</label>
        <input
          type={"text"}
          placeholder={"Categoria do Carro..."}
          name={"category"}
          defaultValue={details.category}
          onChange={handleChangeValues}
        />
        <label>Situação</label>
        <input
          type={"text"}
          placeholder={"Modelo do Carro..."}
          name={"situation"}
          defaultValue={details.situation}
          onChange={handleChangeValues}
        />
        <label>Preço</label>
        <input
          type={"text"}
          placeholder={"Modelo do Carro..."}
          name={"price"}
          defaultValue={details.price}
          onChange={handleChangeValues}
        />

        <Button
          type={"submit"}
          onClick={handleSendChangeValues}
          text={"Alterar"}
        />
      </form>
      <Footer />
    </Container>
  );
}

export default EditModels;
