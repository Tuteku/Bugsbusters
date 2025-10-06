import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductList from "./components/productList";
import Footer from "./components/footer"; // Asegúrate de que este componente exista
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
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <ProductList productos={productos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
