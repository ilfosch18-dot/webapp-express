////////////////// IMPORTO express
import express from "express";
import postsRouter from "./routes/postsRouter.js";
import errorNotFound from "./middlewares/errorNotFound.js";
import errors500 from "./middlewares/errors500.js";

////////////////// SETUP - app è l'oggetto principale attraverso cui configuro il server
const app = express();
// APP_PORT è una variabile di ambiente che ho inserito in .env, nel caso in cui non fosse presente prende 3000 come default
const port = process.env.APP_PORT || 3000;

////////////////// MIDDLEWARES DI SETUP - permette di interpretare le richieste json
app.use(express.json());

////////////////// ROUTES - get è un metodo HTTP
app.get("/", (req, res) => {
  res.send("Homepage");
});

////////////////// resitrazione rotta posts
app.use("/posts", postsRouter);

// middlewares per gestione errori
app.use(errorNotFound);
app.use(errors500);

////////////////// AVVIO SERVER
app.listen(port, () => {
  console.log(`Server avviato correttamente su http://localhost:${port}`);
});
