import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());

import routerVideojuegos from "./videojuegos/infrastructure/rest/Videojuego.Router";
import routerUsuarios from "./usuarios/infrastructure/rest/Usuario.Router";

app.use("/videojuegos", routerVideojuegos);
app.use("/usuarios", routerUsuarios);

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});
