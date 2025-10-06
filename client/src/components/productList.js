import React from "react";

function ProductList({ productos, onAddToCart }) {
  return (
    <section className="catalogo-grid">
      {productos.map((producto) => (
        <div className="producto" key={producto.id}>
          <img src={producto.imagen} alt={producto.nombre} />
          <h3>{producto.nombre}</h3>
          <p className="descripcion">{producto.descripcion}</p>
          <p className="precio">${producto.precio}</p>
          <button onClick={() => onAddToCart(producto)}>Agregar al carrito</button>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
