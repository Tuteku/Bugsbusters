import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ agregarProducto }) {
  const { id } = useParams();
  const [confirmado, setConfirmado] = useState(false);
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/productos/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Producto no encontrado');
        return res.json();
      })
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="spinner">Cargando...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!producto) return <div className="error">Producto no encontrado</div>;

  const handleAgregar = () => {
    agregarProducto(producto);
    setConfirmado(true);
    setTimeout(() => setConfirmado(false), 2000);
  };

  return (
    <section className="detalle-producto">
      <div className="detalle-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="detalle-info">
        <h1>{producto.nombre}</h1>
        <p className="precio">${producto.precio.toLocaleString('es-AR')}</p>
        <p className="descripcion">{producto.descripcion}</p>
  <button onClick={handleAgregar}>Agregar al carrito</button>
  {confirmado && <div className="confirmacion">Agregado al carrito</div>}
      </div>
    </section>
  );
}

export default ProductDetail;
