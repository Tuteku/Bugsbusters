// controllers/productosController.js
const productos = require('../data/products');

// GET /api/productos
const getAllProductos = (req, res, next) => {
  try {
    res.json(productos);
  } catch (err) {
    next(err);
  }
};

// GET /api/productos/:id
const getProductoById = (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (!producto) {
      const error = new Error('Producto no encontrado');
      error.status = 404;
      throw error;
    }
    res.json(producto);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllProductos,
  getProductoById
};
