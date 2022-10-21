import { request, response, Router } from "express";
import cors from "cors";
import carController from "./app/controllers/carController";

const routes = new Router();

routes.use(cors());

routes.get("/", (req, res) => res.status(200).send(""));
routes.get("/cars", carController.findAll);
routes.delete(`/cars/:id`, carController.delete);
routes.post("/cars", carController.create);
routes.post("/cars/:id", carController.update);

export default routes;
