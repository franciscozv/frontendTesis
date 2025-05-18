# Frontend - Proyecto de Tesis

Este es el frontend de la aplicación web desarrollada como parte del proyecto de tesis titulado: **Sistema Web para la gestión de la congregación y eventos de la Iglesia Evangelica Pentecostal (IEP) Santa Juana, que tiene como objetivo

## 📌 Estado del Proyecto
🛠 En desarrollo

--- 🚀 Tecnologías Utilizadas

- [⚛️ React.js](https://reactjs.org/)
- [⚡️ Vite](https://vitejs.dev/) – para desarrollo rápido
- [🎨 Tailwind CSS / CSS Modules]
- [📦 Axios / React Router / Redux / etc.]

--- 
## 📂 Estructura del Proyecto
src/
├── app/ # Configuración general y entrypoint
├── assets/ # Recursos como imágenes y estilos
├── features/ # Módulos funcionales agrupados
│ ├── auth/ # Autenticación
│ ├── events/ # Gestión de eventos
│ └── ... # Otros módulos
├── shared/ # Componentes reutilizables
├── main.jsx # Punto de entrada de la app

### Arquitectura del sistema

El proyecto sigue una arquitectura cliente-servidor con separación clara entre:

1. Frontend: Aplicación React que maneja toda la interfaz de usuario
2. Backend: API RESTful desarrollada con Node.js y Express que gestiona la lógica de negocio y el acceso a datos
3. Base de datos: MongoDB para almacenamiento de datos
