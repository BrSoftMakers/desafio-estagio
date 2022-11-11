import { useForm } from "react-hook-form";
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from "./Formulario.style";

function Formulario(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledForm onSubmit={handleSubmit(props.submitCarro)}>
      <StyledLabel htmlFor="modelo">
        Modelo
        <StyledInput
          type="text"
          name="modelo"
          {...register("modelo", { required: true })}
          placeholder="Digite o modelo"
          id="modelo"
        />
      </StyledLabel>
      {errors.modelo?.type === "required" && (
        <p>Modelo é um campo obrigatório</p>
      )}
      <StyledLabel htmlFor="marca">
        Marca
        <StyledInput
          type="text"
          name="marca"
          {...register("marca", { required: true })}
          placeholder="Digite a marca"
          id="marca"
        />
      </StyledLabel>
      {errors.marca?.type === "required" && <p>Marca é um campo obrigatório</p>}
      <StyledLabel htmlFor="tipo">
        Tipo
        <StyledSelect
          name="tipo"
          {...register("tipo", { required: true })}
          id="tipo"
        >
          <option value="hatch">Hatch</option>
          <option value="sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </StyledSelect>
      </StyledLabel>
      {errors.tipo?.type === "required" && <p>Tipo é um campo obrigatório</p>}
      <StyledLabel htmlFor="situacao">
        Situação
        <StyledSelect
          name="situacao"
          id="situacao"
          {...register("situacao", { required: true })}
        >
          <option value={true}>Disponível</option>
          <option value={false}>Indisponível</option>
        </StyledSelect>
      </StyledLabel>
      {errors.situacao?.type === "required" && (
        <p>Situação é um campo obrigatório</p>
      )}
      <StyledButton type="submit">{props.botaoTexto}</StyledButton>
    </StyledForm>
  );
}

export default Formulario;
