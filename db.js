

const { Pool } = require('pg')


/**
 * @brief Configura y exporta una conexión a la base de datos PostgreSQL.
 * 
 * Esta instancia de Pool maneja la conexión a la base de datos con las 
 * credenciales y configuración especificadas. Se conecta a una base de datos
 * PostgreSQL que se ejecuta en un contenedor Docker.
 * 
 * @property {string} host - El host de la base de datos (por defecto, 'db').
 * @property {number} port - El puerto de conexión (por defecto, 5432).
 * @property {string} user - El nombre de usuario para la base de datos.
 * @property {string} password - La contraseña del usuario de la base de datos.
 * @property {string} database - El nombre de la base de datos a la que conectar.
 * 
 * @returns {Pool} pool - Una instancia de Pool que permite realizar consultas
 * a la base de datos.
 */


const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user123',
    password: 'password123',
    database: 'db123'
})


// Exporta la instancia de Pool para su uso en otros módulos
module.exports = pool