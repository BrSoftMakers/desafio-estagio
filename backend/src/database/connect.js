"use restrict";

const mongoose = require("mongoose");

// Função para conexão com o banco de dados
const databaseConnected = async () => {
  await mongoose.connect(
    // Conexão com o banco de dados através da string
    // `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.e2nt1by.mongodb.net/database?retryWrites=true&w=majority`,
    `mongodb+srv://admin:admin12345678@cluster0.e2nt1by.mongodb.net/database?retryWrites=true&w=majority`,
    (err) => {
      // Função Para informar erro
      if (err) {
        console.log("Erro ao conectar com o banco de dados: ", err);
      }
      return console.log("Conexão com banco de dados Concluida");
    }
  );
};

module.exports = databaseConnected;
