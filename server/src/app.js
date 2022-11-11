import express from "express";
import cors from "cors";
import sequelize from "./database/database.js";
import carroRouter from "./routes/carroRoute.js";

await sequelize.sync().then(() => {
  console.log("Todos os modelos foram sincronizados! Banco de dados pronto!");
});

const app = express();

app.use(express.json());
app.use(cors());

app.use(carroRouter);

app.listen(8080, () => {
  console.log("Servidor rodando em http://localhost:8080");
});
