import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductList from "./components/productList";
import Footer from "./components/footer";
import { useCarrito } from "./hooks/useCarrito";
import { useProductos } from './hooks/useProductos';
import Catalogo from './pages/Catalogo';
import Carrito from './components/Carrito';
import Contacto from './pages/Contacto';
import "./App.css";

function App() {
  const { carrito, agregarProducto, quitarProducto, vaciarCarrito } = useCarrito();
  const { productos, loading } = useProductos();

  return (
    <Router basename="/Bugsbusters">
      <div className="App">
        <Navbar carrito={carrito} />
        <main>
          <Routes>
            {/* Página principal */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <section id="productos-destacados">
                    <h2 id="productos-destacados-title">Productos Destacados</h2>
                    {loading ? (
                      <div className="spinner"></div>
                    ) : (
                      <ProductList productos={productos.slice(0, 6)} onAddToCart={agregarProducto} />
                    )}
                  </section>
                </>
              }
            />

            {/* Catálogo */}
            <Route
              path="/catalogo"
              element={
                <Catalogo productos={productos} loading={loading} onAddToCart={agregarProducto} />
              }
            />

            {/* Carrito */}
            <Route
              path="/carrito"
              element={
                <Carrito
                  carrito={carrito}
                  quitarProducto={quitarProducto}
                  vaciarCarrito={vaciarCarrito}
                />
              }
            />

            {/* Contacto */}
            <Route
              path="/contacto"
              element={<Contacto />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
