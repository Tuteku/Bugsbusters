import React from "react";
import logo from "../assets/logo.svg"; // vas a copiar tu imagen a /client/src/assets/

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <span className="logo-proteccion">
          <img src={logo} alt="Logo de la Mueblería Hermanos Jota" />
        </span>
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
