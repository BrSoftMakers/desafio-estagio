import express from "express";
import { carroController } from "../controllers/carroController.js";

const carroRouter = express.Router();

carroRouter.get("/carro", carroController.getAllCarros);

carroRouter.get("/carro/:modelo", carroController.getCarroByModelo);

carroRouter.post("/carro", carroController.createCarro);

carroRouter.put("/carro/:id", carroController.updateCarro);

carroRouter.patch("/carro/:id", carroController.updateSituacaoCarro);

carroRouter.delete("/carro/:id", carroController.deleteCarro);

export default carroRouter;
