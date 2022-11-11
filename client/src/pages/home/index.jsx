import { useEffect } from "react";
import { useState } from "react";
import AdicionarCarro from "./adicionarCarro";
import axios from "axios";
import lodash from "lodash";
import { useNavigate } from "react-router-dom";
import {
  StyledMain,
  StyledUl,
  StyledLi,
  StyledInfoDiv,
  StyledButtonDiv,
  BotaoExcluir,
  BotaoEditar,
} from "./Home.style";

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
    <StyledMain>
      <AdicionarCarro setCarrosList={setCarrosList} carrosList={carrosList} />
      <StyledUl>
        {carrosList.map((carro) => (
          <StyledLi key={carro.id}>
            <StyledInfoDiv>
              <div>
                <p>Modelo: {carro.modelo}</p>
                <p>Marca: {carro.marca}</p>
              </div>
              <div>
                <p>Tipo: {carro.tipo}</p>
                <p>
                  Situação: {carro.situacao ? "disponível" : "indisponível"}
                </p>
              </div>
            </StyledInfoDiv>
            <StyledButtonDiv>
              <BotaoEditar
                onClick={() => navigate("/editar", { state: carro })}
              >
                Editar
              </BotaoEditar>
              <BotaoExcluir onClick={() => deleteCarro(carro.id)}>
                Excluir
              </BotaoExcluir>
            </StyledButtonDiv>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledMain>
  );
}

export default Home;
