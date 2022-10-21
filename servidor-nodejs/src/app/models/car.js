import { Model, Sequelize } from "sequelize";

class Car extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },

        modelo: { type: Sequelize.STRING },
        marca: Sequelize.STRING,
        tipo: Sequelize.STRING,
        situacao: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "Car",
        tableName: "Cars",
      }
    );

    return this;
  }
}

export default Car;
