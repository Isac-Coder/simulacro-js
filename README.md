# Sistema de Autenticación - Login

## Descripción del Proyecto

Este proyecto es un sistema de autenticación de usuario completo que incluye:
- Una interfaz gráfica moderna con login
- Un servidor backend Express.js para validar credenciales
- Una base de datos JSON (`db.json`) con usuarios registrados
- Comunicación cliente-servidor mediante API REST

## Estructura del Proyecto

```
.
├── index.html              # Página principal con formulario de login
├── client.js               # JavaScript del cliente que maneja el formulario
├── styles.css              # Estilos CSS para la interfaz de login
├── README.md               # Este archivo
├── SETUP_GUIDE.txt         # Guía detallada de instalación y configuración
└── mi-json-server/
    ├── server.js           # Servidor Express.js para autenticación
    ├── db.json             # Base de datos de usuarios
    ├── package.json        # Dependencias del proyecto
    └── node_modules/       # Módulos instalados (generado por npm)
```

## Características

### Frontend (Cliente)
- Interfaz moderna con gradientes y efectos glassmorphism
- Formulario de login con validación HTML5
- Animaciones suaves (fade-in, slide-in)
- Mensajes de feedback (éxito/error) con colores diferenciados
- Validación de campos requeridos
- Comunicación asíncrona con el servidor mediante Fetch API

### Backend (Servidor)
- Servidor Express.js escuchando en puerto 3000
- Endpoint POST `/api/login` para autenticar usuarios
- Lectura dinámica de credenciales desde `db.json`
- Validación de usuario y contraseña
- Respuestas JSON estructuradas
- Manejo de errores (servidor y base de datos)

### Base de Datos
Archivo `db.json` con estructura de usuario:
```json
[
  { "username": "admin", "password": "password" },
  { "username": "user1", "password": "mypassword" }
]
```

## Instalación y Configuración

### Requisitos
- Node.js v14 o superior
- npm (incluido con Node.js)

### Pasos de Instalación

1. **Navegar al directorio del servidor:**
   ```bash
   cd mi-json-server
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor:**
   ```bash
   npm start
   # O directamente: node server.js
   ```

   El servidor mostrará: `Servidor corriendo en http://localhost:3000`

4. **Abrir en el navegador:**
   - Abre `http://localhost:3000` en tu navegador

## Credenciales de Prueba

Prueba el login con estas credenciales (definidas en `db.json`):

| Usuario | Contraseña   |
|---------|-------------|
| admin   | password    |
| user1   | mypassword  |

## Cómo Funciona el Proceso de Login

1. **Usuario ingresa credenciales** en el formulario HTML
2. **JavaScript captura el evento submit** del formulario
3. **Se envía una petición POST** a `/api/login` con username y password
4. **El servidor recibe la petición** y lee `db.json`
5. **Se valida** si existe un usuario con esas credenciales
6. **Respuesta del servidor:**
   - Si es válido: `{success: true, message: "Login successful!"}`
   - Si es inválido: `{success: false, message: "Credenciales inválidas"}`
7. **El cliente muestra el resultado:**
   - Mensaje verde (✓) si es exitoso
   - Mensaje rojo (✗) si hay error

## Archivos Principales

### `index.html`
- Estructura HTML del formulario de login
- Links a CSS y JavaScript
- Campos de entrada: usuario y contraseña
- Botón de envío
- Div para mostrar mensajes de respuesta

### `client.js`
```javascript
- Obtiene referencias a elementos del DOM
- Agrega listener al evento submit del formulario
- Captura username y password
- Realiza fetch POST a /api/login
- Muestra mensajes de éxito o error
```

### `styles.css`
- Diseño responsivo centrado
- Gradiente de fondo (morado)
- Contenedor con efecto glassmorphism
- Inputs con foco interactivo
- Botón con gradiente y hover effects
- Animaciones CSS (@keyframes)
- Estilos para mensajes de respuesta

### `mi-json-server/server.js`
```javascript
- Importa Express y módulos necesarios
- Configura middleware (JSON, static files)
- Define ruta POST /api/login
- Lee y parsea db.json
- Busca usuario coincidente
- Devuelve respuesta JSON
- Maneja errores del servidor
```

### `mi-json-server/db.json`
- Array de objetos con usuarios
- Cada usuario tiene: username, password
- Formato JSON válido

### `mi-json-server/package.json`
- Metadatos del proyecto
- Type: "module" (para usar import/export)
- Dependencias: express@^4.18.2
- Script start: node server.js

## Errores Comunes y Soluciones

Ver `SETUP_GUIDE.txt` para una guía detallada de troubleshooting.

### Error: "Cannot find module 'express'"
**Solución:** Ejecutar `npm install` en el directorio `mi-json-server`

### Error: "ENOENT: no such file or directory, open 'db.json'"
**Solución:** Asegurarse de ejecutar el servidor desde el directorio `mi-json-server`

### Error: "Port 3000 already in use"
**Solución:** Cambiar puerto en server.js o matar proceso en puerto 3000

## Desarrollo Futuro

Posibles mejoras:
- Autenticación con JWT tokens
- Contraseñas hasheadas (bcrypt)
- Registro de nuevos usuarios
- Conexión a base de datos real (MongoDB, MySQL)
- Validación de email
- Recuperación de contraseña
- Sesiones y cookies
- Logout y panel de usuario

## Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API)
- **Backend:** Node.js, Express.js
- **Base de Datos:** JSON (db.json)
- **Otros:** npm, ES6+ modules

## Autor

Proyecto de práctica - Sistema de Autenticación Básico

## Licencia

ISC