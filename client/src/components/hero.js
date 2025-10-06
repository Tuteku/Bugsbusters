import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-texto">
        <h1>Mueblería Hermanos Jota</h1>
        <p>Calidad, diseño y tradición en cada mueble.</p>
        <Link to="/catalogo">Ver catálogo</Link>
      </div>
      <div className="hero-image">
        <img src="http://localhost:5000/assets/banner.png" alt="Banner principal" />
      </div>
    </section>
  );
}

export default Hero;
