import Express from "express";
import routes from "./src/routes/routes";
import cors from "cors";

const PORT = process.env.PORT || 3333;

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
