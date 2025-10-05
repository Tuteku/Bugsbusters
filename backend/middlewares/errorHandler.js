module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const body = {
    error: err.message || 'Error interno del servidor'
  };
  if (process.env.NODE_ENV === 'development') {
    body.stack = err.stack;
  }
  res.status(status).json(body);
};
