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

export default router;
