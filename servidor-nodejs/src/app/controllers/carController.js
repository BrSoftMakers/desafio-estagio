import Car from "../models/car";

class CarController {
  async findAll(req, res) {
    let carList = await Car.findAll();

    return res.json(carList);
  }

  async update(req, res) {
    const body = req.body.body;
    const car = await Car.findByPk(body.id);
    var data = car.dataValues;

    const newCar = await car.update({
      modelo: body.modelo || data.modelo,
      marca: body.marca || data.marca,
      tipo: body.tipo || data.tipo,
      situacao: body.situacao || data.situacao,
    });
  }

  async create(req, res) {
    const body = req.body.body;
    const car = await Car.create({
      modelo: body.modelo,
      marca: body.marca,
      tipo: body.tipo,
      situacao: body.situacao,
    });
  }

  async delete(req, res) {
    await Car.destroy({ where: { id: req.params.id } }).then(res.status(204));
  }
}

export default new CarController();
