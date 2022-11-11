import axios from "axios";
import Formulario from "../../../components/Formulário";
import { StyledDiv, StyledHeader } from "../Home.style";

function AdicionarCarro(props) {
  const submitCarro = (data) => {
    console.log(data);
    axios.post("http://localhost:8080/carro", {
      modelo: data.modelo,
      marca: data.marca,
      tipo: data.tipo,
      situacao: data.situacao,
    });
    axios
      .get("http://localhost:8080/carro")
      .then((response) => props.setCarrosList(response.data));
  };

  return (
    <StyledDiv>
      <StyledHeader>Adicionar Carro</StyledHeader>
      <Formulario submitCarro={submitCarro} botaoTexto="Adicionar Carro" />
    </StyledDiv>
  );
}

export default AdicionarCarro;
