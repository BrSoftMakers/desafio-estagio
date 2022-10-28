import Express from "express";
import routes from "./src/routes/routes";

const PORT = process.env.PORT || 3333;

const app = Express();
app.use(Express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
