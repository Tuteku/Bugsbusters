import React from "react";
import ProductCard from "./productCard.js";

const ProductList = ({ productos }) => {
  return (
    <section id="productos-destacados">
      <h2 id="productos-destacados-title">Productos Destacados</h2>
      {productos.length === 0 ? (
        <div className="spinner"></div>
      ) : (
        <div id="productos-container">
          {productos.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
