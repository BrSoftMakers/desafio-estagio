"use restrict";

// Pacotes
const express = require("express");
const CarModel = require("./src/models/cars.model");
const cors = require("cors");

// Server

const app = express();
// informando ao express que receberá json
app.use(express.json());
app.use(cors());

app.get("/cars", async (req, res) => {
  try {
    const cars = await CarModel.find({});
    res.status(200).json(cars);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// Receber dados de um unico objeto via id

app.get("/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const cars = await CarModel.findById(id);

    return res.status(200).json(cars);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.post("/cars", async (req, res) => {
  try {
    const cars = await CarModel.create(req.body);
    res.status(201).json(cars);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Atualizar dados

app.patch("/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const car = await CarModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(car);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const car = await CarModel.findByIdAndDelete(id);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Iniciando Servidor

const port = 8080;
app.listen(port, () => console.log(`rodando na porta ${port} `));
