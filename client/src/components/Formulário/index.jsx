function Formulario(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.submitCarro();
      }}
    >
      <label htmlFor="modelo">Modelo</label>
      <input
        type="text"
        name="modelo"
        id="modelo"
        onChange={(e) => props.setModelo(e.target.value)}
      />
      <label htmlFor="marca">Marca</label>
      <input
        type="text"
        name="marca"
        id="marca"
        onChange={(e) => props.setMarca(e.target.value)}
      />
      <label htmlFor="tipo">Tipo</label>
      <select
        name="tipo"
        id="tipo"
        onChange={(e) => props.setTipo(e.target.value)}
      >
        <option value="hatch">Hatch</option>
        <option value="sedan">Sedan</option>
        <option value="SUV">SUV</option>
      </select>
      <label htmlFor="situacao">Situação</label>
      <select
        name="situacao"
        id="situacao"
        onChange={(e) => {
          props.setSituacao(e.target.value);
        }}
      >
        <option value={true}>Disponível</option>
        <option value={false}>Indisponível</option>
      </select>
      <button type="submit">{props.botaoTexto}</button>
    </form>
  );
}

export default Formulario;
