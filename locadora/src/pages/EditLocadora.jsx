import React, { useState } from "react";
import ListarCarros from "../components/ListarCarros";

function EditLocadora() {
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  const [situacao, setSituacao] = useState("");

  const [listaCarros, setListaCarros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setListaCarros([
      ...listaCarros,
      {
        modelo,
        marca,
        tipo,
        situacao,
      },
    ]);

    setModelo("");
    setMarca("");
    setTipo("");
    setSituacao("");
  };

  return (
    <div>
      <div className="mt-5">
        <h1>Gerenciar</h1>
      </div>

      <div> 
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="row">
            <div className="form-group col-12 col-sm-4">
              <label>Modelo</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Digitar Modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
              />
              <div className="invalid-feedback">
                Por favor, informe o modelo.
              </div>
            </div> 

            <div className="form-group col-12 col-sm-4">
              <label>Marca</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Digitar Marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group col-12 col-sm-4">
              <label>Tipo</label>
              <input
                type="text"
                required
                className="form-control"
                placeholder="Hatch, Sedan ou SUV"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            </div>

            <div className="form-group col-12 col-sm-4">
              <label>Situação</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Diponível"
                  checked={situacao === "Diponível"}
                  onChange={(e) => setSituacao(e.target.name)}
                />
                <label className="form-check-label">Diponível</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Indisponível"
                  checked={situacao === "Indisponível"}
                  onChange={(e) => setSituacao(e.target.name)}
                />
                <label className="form-check-label">Indisponível</label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Inserir
          </button>
        </form>

        <ListarCarros
          listaCarros={listaCarros}
          setListaCarros={setListaCarros}
        />
      </div>
    </div>
  );
}

export default EditLocadora;
