import express from "express";
import { carroController } from "../controllers/carroController.js";

const carroRouter = express.Router();

carroRouter.get("/carro", carroController.getAllCarros);

carroRouter.post("/carro", carroController.createCarro);

carroRouter.put("/carro/:id", carroController.updateCarro);

carroRouter.delete("/carro/:id", carroController.deleteCarro);

export default carroRouter;
