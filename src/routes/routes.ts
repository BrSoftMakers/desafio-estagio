import { Router } from "express";
import { CreateCarController } from "../controllers/CreateCar";
import { GetAllCarsController } from "../controllers/GetAllCars";
import { GetByIdController } from "../controllers/GetById";
import { DeleteCarController } from "../controllers/DeleteCar";
import { UpdateCarController } from "../controllers/UpdateCar";

const routes = Router();

const createCarController = new CreateCarController();
const getAllCarsController = new GetAllCarsController();
const getById = new GetByIdController();
const deleteCar = new DeleteCarController();
const updateCar = new UpdateCarController();

routes.get("/cars/:id", getById.handle);
routes.get("/cars", getAllCarsController.handle);
routes.post("/cars", createCarController.handle);
routes.put("/cars/:id", updateCar.handle);
routes.delete("/cars/:id", deleteCar.handle);

export default routes;
