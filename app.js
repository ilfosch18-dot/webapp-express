////////////////// IMPORTO express
import express from "express";
import postsRouter from "./routes/postsRouter.js";

////////////////// SETUP - app è l'oggetto principale attraverso cui configuro il server
const app = express();
// APP_PORT è una variabile di ambiente che ho inserito in .env, nel caso in cui non fosse presente prende 3000 come default
const port = process.env.APP_PORT || 3000;

////////////////// MIDDLEWARES DI SETUP - permette di interpretare le richieste json
app.use(express.json());

////////////////// ROUTES - get è un metodo HTTP
app.get("/", (req, res) => {
  // invio una risposta dal server al client
  res.send("Homepage");
});

//////////////////
app.use("/posts", postsRouter);

////////////////// AVVIO SERVER
app.listen(port, () => {
  console.log(`Server avviato correttamente su http://localhost:${port}`);
});
