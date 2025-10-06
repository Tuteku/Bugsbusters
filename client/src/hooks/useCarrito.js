import { useState } from "react";

export function useCarrito() {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => {
      // 1. Revisa si el producto ya está en el carrito
      const productoExistente = prevCarrito.find((p) => p.id === producto.id);

      if (productoExistente) {
        // 2. Si existe, incrementa la cantidad
        return prevCarrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        // 3. Si no existe, lo agrega con cantidad 1
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  const quitarProducto = (productoId) => {
    setCarrito((prevCarrito) => {
      const productoExistente = prevCarrito.find((p) => p.id === productoId);

      // Si la cantidad es 1, lo elimina. Si es mayor a 1, la reduce.
      if (productoExistente && productoExistente.cantidad > 1) {
        return prevCarrito.map((p) =>
          p.id === productoId ? { ...p, cantidad: p.cantidad - 1 } : p
        );
      } else {
        return prevCarrito.filter((p) => p.id !== productoId);
      }
    });
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return { carrito, agregarProducto, quitarProducto, vaciarCarrito };
}