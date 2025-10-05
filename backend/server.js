const express = require('express');
const path = require('path');
const cors = require('cors');

const productosRouter = require('./routes/productos');
const logger = require('./middlewares/logger');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globales
app.use(cors({ origin: 'http://localhost:3000' })); // durante dev; restringir en prod
app.use(express.json()); // para futuras POSTs
app.use(logger); // middleware personalizado que hace console.log

// Servir imágenes estáticas (si las pones en /public/images)
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Rutas
app.use('/api/productos', productosRouter);

// 404 para rutas no encontradas en API / servidor
app.use(notFound);

// Manejador de errores centralizado
app.use(errorHandler);

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
