import { useLocation, useNavigate } from "react-router-dom";
import Formulario from "../../components/Formulário";
import axios from "axios";
import {
  BotaoVoltar,
  StyledContainer,
  StyledDiv,
  StyledSection,
  StyledTitle,
} from "./Editar.style";

function Editar() {
  const navigate = useNavigate();
  const location = useLocation();
  const carro = location.state;

  async function editarCarro(data) {
    console.log(data);
    await axios.put(`http://localhost:8080/carro/${carro.id}`, {
      modelo: data.modelo,
      marca: data.marca,
      tipo: data.tipo,
      situacao: data.situacao,
    });
    navigate("/");
  }

  console.log(carro);
  return (
    <StyledSection>
      <BotaoVoltar onClick={() => navigate("/")}>Voltar</BotaoVoltar>
      <StyledContainer>
        <StyledTitle>Dados do Carro:</StyledTitle>
        <StyledDiv>
          <div>
            <p>Modelo: {carro.modelo}</p>
            <p>Marca: {carro.marca}</p>
          </div>
          <div>
            <p>Tipo: {carro.tipo}</p>
            <p>Situação: {carro.situacao ? "disponível" : "indisponível"}</p>
          </div>
        </StyledDiv>
      </StyledContainer>
      <Formulario submitCarro={editarCarro} botaoTexto="Alterar Carro" />
    </StyledSection>
  );
}

export default Editar;
