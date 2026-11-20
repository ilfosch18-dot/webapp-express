function errors500(err, req, res, next) {
  res.status(500).json({
    error: err.message,
  });
}

export default errors500;
