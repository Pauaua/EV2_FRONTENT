# Municipalidad de Cholchol - Desarrollo FRONTEND

Este proyecto es una aplicación web desarrollada con React y Vite para la Municipalidad de Cholchol. Incluye secciones informativas, encuestas ciudadanas, galería multimedia, contacto y enlaces a servicios municipales.

# Índice
Instalación
Estructura del Proyecto
Scripts Disponibles
Componentes Principales
Dependencias
Buenas Prácticas

# Instalación

1. Clona el repositorio
2. Instala las dependencias 
        npm install
3. Inicia el servidor:
        npm run dev

La aplicación estará disponible en http://localhost:5173


# Estructura del Proyecto

FRONT/
│
├── public/                # Archivos públicos y estáticos
│
├── src/
│   ├── assets/            # Imágenes y recursos gráficos
│   ├── components/        # Componentes React reutilizables
│   ├── App.jsx            # Componente principal de la app
│   ├── main.jsx           # Punto de entrada de React
│   ├── index.css          # Estilos globales
│   └── App.css            # Estilos específicos de App
│
├── package.json           # Configuración de dependencias y scripts
├── vite.config.js         # Configuración de Vite
├── eslint.config.js       # Configuración de ESLint
└── README.md              # Documentación del proyecto

# Scripts Disponibles
npm run dev - Inicia el servidor de desarrollo.
npm run build - Genera la versión de producción.
npm run preview - Previsualiza la build de producción.
npm run lint - Ejecuta ESLint para análisis de código.

## Funcionalidades principales

- **Navegación responsiva**: Menú adaptable a dispositivos móviles y escritorio.
- **Encuestas ciudadanas**: Permite a los usuarios participar en encuestas activas.
- **Galería multimedia**: Visualización de imágenes con opción de ampliación.
- **Formulario de contacto**: Envío de mensajes y visualización de ubicación en mapa.
- **Transmisión en vivo**: Acceso directo a eventos municipales en YouTube.


# Componentes Principales
PreNavbarSection: Barra superior con enlaces a transparencia y ley de lobby.
Navbar: Barra de navegación principal con menú y avatar de usuario.
HeroSection: Carrusel de imágenes destacadas.
InfoSection / BenefitsSection: Tarjetas informativas sobre actividades y beneficios.
EncuestasCiudadanasSection: Muestra encuestas ciudadanas activas.
GallerySection: Galería multimedia con imágenes y modal ampliado.
ContactSection: Formulario de contacto, información y mapa de ubicación.
Footer: Pie de página con datos de contacto y enlaces legales.
YoutubeSection: Acceso a transmisiones en vivo de la municipalidad.

Todos los componentes están en src/components.

# Dependencias
React y ReactDOM: Librería principal de UI.
@mui/material y @mui/icons-material: Componentes de Material UI.
framer-motion: Animaciones.
react-slick y slick-carousel: Carrusel de imágenes.
styled-components: Estilos en JS.
react-router-dom: (Instalado, pero no usado en el código actual).

# Buenas Prácticas
Componentes reutilizables y organizados en carpetas.
Uso de hooks de React y Material UI para responsividad.
Validación de formularios y feedback al usuario.
Código estilizado con ESLint y buenas prácticas de accesibilidad.
Imágenes y recursos organizados en /src/assets.
