import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Formulario from "../../../components/Formulário";

function AdicionarCarro(props) {
  const [modelo, setModelo] = useState();
  const [marca, setMarca] = useState();
  const [tipo, setTipo] = useState();
  const [situacao, setSituacao] = useState();

  useEffect(() => {
    setTipo("hatch");
    setSituacao(true);
  }, []);

  const submitCarro = () => {
    axios.post("http://localhost:8080/carro", {
      modelo: modelo,
      marca: marca,
      tipo: tipo,
      situacao: situacao,
    });
    axios
      .get("http://localhost:8080/carro")
      .then((response) => props.setCarrosList(response.data));
  };

  return (
    <Formulario
      submitCarro={submitCarro}
      setModelo={setModelo}
      setMarca={setMarca}
      setTipo={setTipo}
      setSituacao={setSituacao}
      botaoTexto="Adicionar Carro"
    />
  );
}

export default AdicionarCarro;
