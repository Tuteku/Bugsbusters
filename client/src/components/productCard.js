import React from "react";

const ProductCard = ({ producto }) => (
  <div className="producto-card">
    <img src={producto.imagen} alt={producto.nombre} />
    <h3>{producto.nombre}</h3>
    <p>{producto.descripcion}</p>
    <p className="precio">${producto.precio.toLocaleString("es-AR")}</p>
  </div>
);

export default ProductCard;
