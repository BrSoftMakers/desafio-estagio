import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Formulario from "../../components/Formulário";
import axios from "axios";

function Editar() {
  const navigate = useNavigate();
  const location = useLocation();
  const carro = location.state;
  const [modelo, setModelo] = useState();
  const [marca, setMarca] = useState();
  const [tipo, setTipo] = useState();
  const [situacao, setSituacao] = useState();

  function editarCarro() {
    axios.put(`http://localhost:8080/carro/${carro.id}`, {
      modelo: modelo,
      marca: marca,
      tipo: tipo,
      situacao: situacao,
    });
    navigate("/");
  }

  console.log(carro);
  return (
    <>
      <button onClick={() => navigate("/")}>Voltar</button>
      <div>
        <h2>Dados do Carro:</h2>
        <p>{carro.modelo}</p>
        <p>{carro.marca}</p>
        <p>{carro.tipo}</p>
        <p>{carro.situacao ? "disponível" : "indisponível"}</p>
      </div>
      <Formulario
        submitCarro={editarCarro}
        setModelo={setModelo}
        setMarca={setMarca}
        setTipo={setTipo}
        setSituacao={setSituacao}
        botaoTexto="Alterar Carro"
      />
    </>
  );
}

export default Editar;
