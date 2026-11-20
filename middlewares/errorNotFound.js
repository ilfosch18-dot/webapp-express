function errorNotFound(req, res, next) {
  res.status(404).json({
    error: "Not found",
    message: "Risorsa non trovata",
  });
}

export default errorNotFound;
