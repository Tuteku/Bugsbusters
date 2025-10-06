import React from 'react';
import ProductList from '../components/productList';

function Catalogo({ productos, loading, onAddToCart }) {
  return (
    <section className="catalogo-grid">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <ProductList
          productos={productos}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
}

export default Catalogo;