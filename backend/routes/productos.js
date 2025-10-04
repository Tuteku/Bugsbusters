// routes/productos.js
const express = require('express');
const router = express.Router();
const { getAllProductos, getProductoById } = require('../controllers/productosController');

// GET /api/productos
router.get('/', getAllProductos);

// GET /api/productos/:id
router.get('/:id', getProductoById);

module.exports = router;
