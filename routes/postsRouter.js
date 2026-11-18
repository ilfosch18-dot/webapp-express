////////////////// IMPORTO express
import express from "express";

const router = express.Router();

/**
 * C create
 * R read
 * U update
 * D destroy/delete
 */

// GET - visualizzazione di tutti gli elementi (read)
router.get("/", (req, res) => {
  res.send("Lista dei posts");
});

// SHOW - visualizzazione dettaglio di un singolo e preciso ID
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Dettaglio del post con id ${id}`);
});

export default router;
