////////////////// IMPORTO express
import express from "express";

const router = express.Router();

/**
 * C create
 * R read
 * U update
 * D destroy/delete
 *
 * INDEX - SHOW - STORE - UPDATE - DESTROY sono i nomi delle rotte
 * GET - POST - PUT/PATCH - DELETE sono i metodi http
 */

////////////////// INDEX - visualizzazione di tutti gli elementi (read)
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

////////////////// PUT - modifica intera di un elemento preciso tramite ID (update)
router.put("/:id", (req, res) => {
  // utilizzo Number per convertire l'id da stringa a numero
  const id = Number(req.params.id);
  res.send(`Modifica di un elemento con id ${id}`);
});

////////////////// PATCH - modifica parziale di un elemento preciso tramite ID (update)
router.patch("/:id", (req, res) => {
  // utilizzo Number per convertire l'id da stringa a numero
  const id = Number(req.params.id);
  res.send(`Modifica parziale di un elemento con id ${id}`);
});

////////////////// DELETE - cancellazione di un elemento preciso tramite ID (delete/destroy)
router.delete("/:id", (req, res) => {
  // utilizzo Number per convertire l'id da stringa a numero
  const id = Number(req.params.id);
  res.send(`Cancellazione di un elemento con id ${id}`);
});

export default router;
