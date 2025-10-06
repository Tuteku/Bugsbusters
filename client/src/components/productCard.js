import React from "react";
import { Link } from 'react-router-dom';

const ProductCard = ({ producto, onAddToCart }) => (
  <div className="producto">
    <Link to={`/producto/${producto.id}`} className="producto-link">
      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
    </Link>
    <p className="descripcion">{producto.descripcion}</p>
    <p className="precio">${producto.precio.toLocaleString("es-AR")}</p>
    <button onClick={() => onAddToCart && onAddToCart(producto)}>Agregar al carrito</button>
  </div>
);

export default ProductCard;
