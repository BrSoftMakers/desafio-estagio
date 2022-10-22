import React from "react";

function ListarCarros({ listaCarros, setListaCarros }) {
  
  const handleDelete = (index) => {
    let ind = listaCarros.indexOf(index);
    let newListaCarros = [...listaCarros];

    newListaCarros.splice(ind, 1);
    setListaCarros(newListaCarros);
  };

  return (
    <div className="mt-5">
      <h1>Lista de Carros</h1>

      <div>
        <ul className="list-group">
          {listaCarros.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                <div className="fw-bold">Carro {index + 1}</div>

                <div className="row">
                  <div className="col-12 col-sm-4">
                    <p>Modelo</p>
                    <p>{item.modelo}</p>
                  </div>
                  <div className="col-12 col-sm-4">
                    <p>Marca</p>
                    <p>{item.marca}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-4">
                    <p>Tipo</p>
                    <p>{item.tipo}</p>
                  </div>
                  <div className="col-12 col-sm-4">
                    <p>Situação</p>
                    <p>{item.situacao}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleDelete(index)}
                >
                  Excluir
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListarCarros;
