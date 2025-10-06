import React, { useState } from "react";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("¡Formulario enviado!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section className="contacto-section">
      <h1>Contacto</h1>
      <p>¿Tenés alguna consulta? Completá el formulario y nos pondremos en contacto a la brevedad.</p>

      <form className="form-contacto" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows="5"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>

      <div className="datos-contacto">
        <h2>También podés contactarnos por:</h2>
        <ul>
          <li>Email: <a href="mailto:ventas@hermanosjota.com.ar">ventas@hermanosjota.com.ar</a></li>
          <li>Teléfono: <a href="tel:+541145678900">+54 11 4567-8900</a></li>
          <li>Dirección: Av. San Juan 2847, San Cristóbal, CABA</li>
        </ul>
      </div>
    </section>
  );
}

export default Contacto;
