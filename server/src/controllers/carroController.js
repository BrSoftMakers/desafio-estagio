import Carro from "../model/carro.js";

export const carroController = {
  async getAllCarros(request, response) {
    try {
      const carros = await Carro.findAll();

      if (!carros) {
        throw new Error("Nenhum carro encontrado");
      }

      response.status(200).json(carros);
    } catch (error) {
      response.status(400).json(error.message);
    }
  },
  async createCarro(request, response) {
    try {
      const carro = await Carro.create(request.body);

      response.status(201).json({
        msg: "Carro criado com sucesso!",
        carro: carro,
      });
    } catch (error) {
      response.status(400).json(error.message);
    }
  },
  async updateCarro(request, response) {
    try {
      const carro = await Carro.findByPk(request.params.id);

      carro.modelo = request.body.modelo;
      carro.marca = request.body.marca;
      carro.tipo = request.body.tipo;
      carro.situacao = request.body.situacao;

      const resultado = await carro.save();

      response.status(201).json(resultado);
    } catch (error) {
      response.status(400).json(error.message);
    }
  },
  async deleteCarro(request, response) {
    try {
      const carro = await Carro.findByPk(request.params.id);

      const resultado = await carro.destroy();

      response.status(200).json(resultado);
    } catch (error) {
      response.status(400).json(error.message);
    }
  },
};
