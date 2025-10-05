import React from "react";
const Footer = () => (
  <footer>
    <div className="top-footer">
      <div className="footer-col">
        <p>Instagram: <a href="#">@hermanosjota_ba</a></p>
        <p>Whatsapp: <a href="#">+54 11 4567-8900</a></p>
        <p>Ventas: <a href="mailto:ventas@hermanosjota.com.ar">ventas@hermanosjota.com.ar</a></p>
      </div>

      <div className="footer-col">
        <p>Av. San Juan 2847, San Cristóbal, CABA</p>
      </div>

      <div className="footer-col">
        <p>HORARIOS</p>
        <ul>
          <li>Lunes a Viernes: 10:00 - 19:00</li>
          <li>Sábados: 10:00 - 14:00</li>
        </ul>
      </div>
    </div>

    <div className="bottom-footer">
      <p>Diseño con raíces argentinas</p>
      <p>&copy; 2025 Hermanos Jota. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
