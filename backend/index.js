"use restrict";

// Pacotes / Funções
const dotenv = require("dotenv");
const databaseConnected = require("./src/database/connect");

dotenv.config();

// Chamada do Banco de dados
databaseConnected();

// Chamada do Servidor
require("./server");
