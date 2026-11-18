////////////////// IMPORTO express
import express from "express";

const router = express.Router();

/**
 * C create
 * R read
 * U update
 * D destroy/delete
 */

////////////////// GET - visualizzazione di tutti gli elementi (read)
router.get("/", (req, res) => {
  res.send("Lista dei posts");
});

////////////////// SHOW - visualizzazione dettaglio di un singolo e preciso ID(parametro dinamico) (read)
router.get("/:id", (req, res) => {
  // utilizzo Number per convertire l'id da stringa a numero
  const id = Number(req.params.id);
  res.send(`Dettaglio del post con id ${id}`);
});

////////////////// STORE - creazione di un nuovo elemento (create)
router.post("/", (req, res) => {
  // uso req.body perchè sto leggendo i dati che il client invia nel body della richiesta
  const body = req.body;
  res.send(`Creo un nuovo post`);
});

export default router;
