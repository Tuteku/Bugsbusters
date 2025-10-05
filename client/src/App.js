
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/api/productos")
      .then((res) => res.json())
      .then(setProductos)
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="productos-destacados">
          <h2 id="productos-destacados-title">Productos Destacados</h2>
          <ProductList productos={productos} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
