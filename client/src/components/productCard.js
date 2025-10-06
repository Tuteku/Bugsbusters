import React from "react";

const ProductCard = ({ producto }) => (
  <div className="producto">
    <img src={producto.imagen} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p className="descripcion">{producto.descripcion}</p>
    <p className="precio">${producto.precio.toLocaleString("es-AR")}</p>
    <button>Agregar al carrito</button>
  </div>
);

export default ProductCard;
