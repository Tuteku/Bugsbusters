# Bugsbusters
## Mueblería Hermanos Jota

## Integrantes
- Lucas Rodrigo Figueredo
- Mateo Quispe
- Sebastian Scorini Wizenberg

---

## Descripción del proyecto
Este proyecto es una tienda online de la Mueblería Hermanos Jota.  
La aplicación cuenta con:

- Página principal con productos destacados.
- Catálogo completo de productos.
- Carrito de compras funcional.
- Página de contacto con formulario.
- Backend para manejar datos de productos y carrito.

**Tecnologías utilizadas:**

- Frontend: React, React Router, CSS
- Backend: Node.js, Express
- Gestión de estado: Hooks personalizados (`useCarrito`, `useProductos`)
- Despliegue: Frontend y backend corriendo local

---

## Arquitectura

/backend --> Servidor Node.js con API REST para productos y carrito

/client --> Aplicación React
/components --> Componentes reutilizables (Navbar, Footer, Hero, ProductList, Carrito)

/pages --> Páginas del sitio (Inicio, Catalogo, Contacto)

/hooks --> Hooks personalizados (useCarrito, useProductos)

---

## Decisiones tomadas

- Separación clara entre frontend y backend para facilitar escalabilidad.
- Uso de React Router para navegación sin recarga de página.
- Hooks personalizados para manejar el carrito y la carga de productos de forma reactiva.
- Despliegue frontend independiente usando Vercel para facilidad de acceso público.

---

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/Tuteku/Bugsbusters.git
cd Bugsbusters
cd backend
npm install
npm npm run dev
## El backend correrá por defecto en http://localhost:5000.
cd client
npm install
npm start
## La app React se abrirá en http://localhost:3000.
