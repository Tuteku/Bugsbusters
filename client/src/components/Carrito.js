import React from 'react';

function Carrito({ carrito, quitarProducto, vaciarCarrito }) {
  const total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);

  return (
    <section className="carrito-section">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {/* Tabla para desktop */}
          <div style={{ overflowX: "auto" }}>
            <table className="tabla-carrito">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carrito.map(producto => (
                  <tr key={producto.id}>
                    <td className="celda-producto-carrito">
                      <img src={producto.imagen} alt={producto.nombre} className="img-producto-carrito" />
                      {producto.nombre}
                    </td>
                    <td>{producto.cantidad}</td>
                    <td>${(producto.precio * producto.cantidad).toLocaleString('es-AR')}</td>
                    <td>
                      <button className="btn-eliminar" onClick={() => quitarProducto(producto.id)}>
                        Quitar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Cards para mobile */}
          <div className="carrito-cards">
            {carrito.map(producto => (
              <div className="carrito-card" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="carrito-card-info">
                  <div><strong>{producto.nombre}</strong></div>
                  <div>Cantidad: {producto.cantidad}</div>
                  <div>Precio: ${(producto.precio * producto.cantidad).toLocaleString('es-AR')}</div>
                </div>
                <div className="carrito-card-actions">
                  <button className="btn-eliminar" onClick={() => quitarProducto(producto.id)}>
                    Quitar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="carrito-total">
            <h3>Total: ${total.toLocaleString('es-AR')}</h3>
            <button className="btn-eliminar" onClick={vaciarCarrito}>Vaciar carrito</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Carrito;