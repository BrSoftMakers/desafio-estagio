import sequelize from "../database/database.js";
import { DataTypes } from "sequelize";

const Carro = sequelize.define(
  "carro",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "SUV",
      validate: {
        isIn: {
          args: [["hatch", "sedan", "SUV"]],
          msg: "Precisa ser hatch, sedan ou SUV",
        },
        notNull: {
          msg: "Escolha uma das três opções.",
        },
      },
    },
    situacao: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Carro;
