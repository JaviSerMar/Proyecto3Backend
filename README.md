# README - Backend

## Descripción

Este backend está diseñado para gestionar los datos de sensores de temperatura y CO2. Utiliza Express.js y PostgreSQL para manejar las solicitudes y almacenar los datos en una base de datos que se ejecuta en un contenedor Docker.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework web para Node.js que facilita la creación de aplicaciones web.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **Docker**: Contenedor para facilitar la implementación de aplicaciones.

## Configuración de la Base de Datos

La conexión a la base de datos se realiza mediante el archivo `db.js`, que configura un pool de conexiones utilizando las siguientes credenciales:

- **Host**: `db`
- **Puerto**: `5432`
- **Usuario**: `user123`
- **Contraseña**: `password123`
- **Base de datos**: `db123`

## Estructura del Proyecto

/backend
    ├── db.js # Configuración de la base de datos
    ├── Dockerfile # Dockerfile para crear la imagen del backend
    ├── docker-compose.yaml # Configuración de servicios de Docker
    ├── server.js # Archivo principal del servidor
    └── package.json # Dependencias del proyecto


## Rutas Disponibles

### 1. `GET /setup`
Crea la tabla `sensors` en la base de datos si no existe.

**Respuesta**:
- `200 OK`: JSON con un mensaje de éxito.
- `500 Internal Server Error`: Error al crear la tabla.

### 2. `GET /latest`
Obtiene las últimas mediciones de temperatura y CO2.

**Respuesta**:
- `200 OK`: JSON con las últimas mediciones.
- `500 Internal Server Error`: Error al obtener las mediciones.

### 3. `POST /`
Inserta un nuevo dato de sensor en la base de datos.



**Cuerpo de la solicitud**:
```json
{
    "type": "temperature" | "CO2",
    "value": float,
    "timestamp": "timestamp"
}
```

## Docker

El backend está configurado para ejecutarse en un contenedor Docker. El Dockerfile especifica cómo construir la imagen, y `docker-compose.yaml` define los servicios necesarios.

## Iniciar el Servidor

Para iniciar el servidor, asegúrate de tener Docker instalado y ejecuta:

```bash
docker-compose up
```
Esto levantará el contenedor de la base de datos PostgreSQL y el servidor Express.js. Puedes acceder al servidor en http://localhost:13000.




