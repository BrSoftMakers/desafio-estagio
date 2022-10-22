import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header";
import Button from "../../components/Button";
import { Container } from "./styles";
import { useParams } from "react-router-dom";

function EditModels() {
  const [values, setValues] = useState();
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/cars/${id}`).then((data) => {
      const { image, brand, model, category, situation, price } = data.data;
      const details = {
        id,
        image,
        brand,
        model,
        category,
        situation,
        price
      };
      setDetails(details);
    });
  }, [id]);

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
    </Container>
  );
}

export default EditModels;
