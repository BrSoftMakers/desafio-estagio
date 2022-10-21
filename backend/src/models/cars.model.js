const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  situation: {
    type: String,
    required: true
  }
});

// Criando o Model
const CarModel = mongoose.model("Car", carsSchema);

module.exports = CarModel;
