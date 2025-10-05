import React from "react";
import ProductCard from "./productCard.js";

const ProductList = ({ productos }) => {
  if (!productos.length) return <p>Cargando productos...</p>;

  return (
    <div id="productos-container">
      {productos.map((p) => (
        <ProductCard key={p.id} producto={p} />
      ))}
    </div>
  );
};

export default ProductList;
