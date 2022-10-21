import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import carService from "../../services/carService";

function CarModal(props) {
  const [modelo, setModelo] = useState();
  const [marca, setMarca] = useState();
  const [tipo, setTipo] = useState("SEDAN");
  const [situacao, setSituacao] = useState();

  useEffect(() => {}, [situacao]);

  function handleSituacao(e) {
    if (e.target.checked) {
      setSituacao("Disponível");
    } else {
      setSituacao("Indisponível");
    }
  }

  async function handleSave() {
    if (props.car) {
      let updatedCar = props.car;
      updatedCar.modelo = modelo;
      updatedCar.marca = marca;
      updatedCar.tipo = tipo;
      updatedCar.situacao = situacao;
      carService.update(updatedCar);
      props.handleClose();
    } else {
      let car = {
        modelo: modelo,
        marca: marca,
        tipo: tipo,
        situacao: situacao,
      };
      carService.create(car);
      props.handleClose();
    }
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          {props.car ? (
            <Modal.Title>Editar Carro</Modal.Title>
          ) : (
            <Modal.Title>Adicionar Carro</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Modelo</Form.Label>
              {props.car ? (
                <Form.Control
                  defaultValue={props.car.modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  id="modelo"
                  type="text"
                  required
                  placeholder="Insíra o modelo do carro"
                />
              ) : (
                <Form.Control
                  onChange={(e) => setModelo(e.target.value)}
                  id="modelo"
                  type="text"
                  required
                  placeholder="Insíra o modelo do carro"
                />
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>

              {props.car ? (
                <Form.Control
                  onChange={(e) => setMarca(e.target.value)}
                  defaultValue={props.car.marca}
                  id="marca"
                  type="text"
                  required
                  placeholder="Informe a marca do carro"
                />
              ) : (
                <Form.Control
                  onChange={(e) => setMarca(e.target.value)}
                  id="marca"
                  type="text"
                  required
                  placeholder="Informe a marca do carro"
                />
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="Select">Tipo do carro</Form.Label>
              {props.car ? (
                <Form.Select
                  id="Select"
                  onChange={(e) => setTipo(e.target.value)}
                  defaultValue={props.car.tipo}
                >
                  <option>SEDAN</option>
                  <option>HATCH</option>
                  <option>SUV</option>
                </Form.Select>
              ) : (
                <Form.Select
                  id="Select"
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option>SEDAN</option>
                  <option>HATCH</option>
                  <option>SUV</option>
                </Form.Select>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              {props.car ? (
                <Form.Check
                  type="checkbox"
                  label="Disponível"
                  defaultChecked={
                    props.car.situacao == "Disponível" ? true : false
                  }
                  onChange={(e) => handleSituacao(e)}
                />
              ) : (
                <Form.Check
                  type="checkbox"
                  label="Disponível"
                  onChange={(e) => handleSituacao(e)}
                />
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={(e) => handleSave(e)}>
            Adicionar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CarModal;
