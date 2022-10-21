import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";
import carService from "./services/carService";
import CarModal from "./components/CarModal";

const carJson = [
  { id: 1, modelo: "a", marca: "a", tipo: "sedan", situacao: "Disponível" },
  { id: 2, modelo: "b", marca: "b", tipo: "sedan", situacao: "Disponível" },
  { id: 3, modelo: "c", marca: "c", tipo: "sedan", situacao: "Disponível" },
  { id: 4, modelo: "d", marca: "d", tipo: "sedan", situacao: "Indisponível" },
  { id: 5, modelo: "e", marca: "e", tipo: "sedan", situacao: "Indisponível" },
];

function App() {
  const [carList, setCarList] = useState(carJson);
  const [selectedCar, setSelectedCar] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAll();
  }, [handleClose]);

  useEffect(() => {
    getAll();
  }, []);

  async function getAll() {
    const returnedCars = await carService.getAll();
    setCarList(returnedCars);
  }

  async function handleDelete(id) {
    const returnedValue = await carService.delete(id);
    handleClose();
    getAll();
  }

  async function handleEdit(car) {
    setSelectedCar(car);
    handleShow();
  }

  async function handleAdd(id) {
    setSelectedCar(null);
    handleShow();
  }

  return (
    <div className="App">
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>CRUD-CARROS</strong>
          </a>
        </div>
      </div>

      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1>Lista de Carros</h1>
            <button className="btn btn-primary" onClick={handleAdd}>
              Adicionar Carro
            </button>
          </div>
        </div>
      </section>

      <CarModal show={show} handleClose={handleClose} car={selectedCar} />
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {carList.map((car) => {
            return (
              <div className="col mb-4" key={car.id}>
                <div className="card shadow-sm " key={car.id}>
                  <svg
                    className="bd-placeholder-img card-img-top flex-center"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                    <text x="4%" y="10%" fill="#eceeef" dy=".3em">
                      Thumbnail
                    </text>
                  </svg>
                  <div className="card-body">
                    <div className="card-text">
                      <p>modelo: {car.modelo}</p>
                      <p>marca: {car.marca}</p>
                      <p>tipo: {car.tipo}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={(e) => handleEdit(car)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          id={car.id}
                          className="btn btn-sm btn-outline-danger"
                          onClick={(e) => {
                            handleDelete(car.id);
                          }}
                        >
                          Deletar
                        </button>
                      </div>
                      {car.situacao === "Disponível" ? (
                        <small className="text">{car.situacao}</small>
                      ) : (
                        <small className="text-muted">{car.situacao}</small>
                      )}
                      {/* <small className="text-muted">{car.situacao}</small> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
