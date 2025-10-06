import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img src="http://localhost:5000/assets/logo.svg" alt="Logo Hermanos Jota" />
      </div>

      <nav aria-label="Navegación principal">
        <ul>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#productos-destacados">Catálogo</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      <a href="#carrito" className="carrito" style={{ textDecoration: "none", color: "inherit" }}>
        🛒 <span id="cart-count">0</span>
      </a>
    </header>
  );
};

export default Navbar;
