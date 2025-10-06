import React from "react";
import ProductCard from './productCard';

function ProductList({ productos, onAddToCart }) {
  return (
    <section className="catalogo-grid">
      {productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} onAddToCart={onAddToCart} />
      ))}
    </section>
  );
}

export default ProductList;
