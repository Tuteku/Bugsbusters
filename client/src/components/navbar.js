import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar({ carrito }) {
    // Mostrar el total de unidades en el carrito (sumatoria de `cantidad`)
    const cantidadCarrito = carrito ? carrito.reduce((sum, p) => sum + (p.cantidad || 0), 0) : 0;
    
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setPrevScrollPos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

  return (
    <header className={visible ? '' : 'header-hidden'}>
        <div className="navbar">
            <Link to="/"><img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logo de la Mueblería Hermanos Jota" />
</Link>
        </div>
        <nav aria-label="Navegación principal">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/catalogo">Catálogo</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
        <Link to="/carrito" className="carrito">
            🛒 <span id="cart-count">{cantidadCarrito}</span>
        </Link>
    </header>
  );
}

export default Navbar;
