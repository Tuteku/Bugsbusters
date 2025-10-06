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