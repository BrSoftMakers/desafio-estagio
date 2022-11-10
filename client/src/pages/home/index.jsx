import { useEffect } from "react";
import { useState } from "react";
import AdicionarCarro from "./adicionarCarro";
import axios from "axios";
import lodash from "lodash";
import { useNavigate } from "react-router-dom";

function Home() {
  const [carrosList, setCarrosList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/carro")
      .then((response) => setCarrosList(response.data));
  }, []);

  function deleteCarro(id) {
    axios.delete(`http://localhost:8080/carro/${id}`).then((response) => {
      const novaCarrosList = carrosList.filter(
        (carro) => !lodash.isEqual(carro, response.data)
      );
      setCarrosList(novaCarrosList);
    });
  }

  return (
    <main>
      <AdicionarCarro setCarrosList={setCarrosList} carrosList={carrosList} />
      <ul>
        {carrosList.map((carro) => (
          <li key={carro.id}>
            <p>{carro.modelo}</p>
            <p>{carro.marca}</p>
            <p>{carro.tipo}</p>
            <p>{carro.situacao ? "disponível" : "indisponível"}</p>
            <button onClick={() => navigate("/editar", { state: carro })}>
              Editar
            </button>
            <button onClick={() => deleteCarro(carro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
