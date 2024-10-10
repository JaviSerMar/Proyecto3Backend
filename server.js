
const express = require('express')
const cors = require('cors');
const pool = require('./db')
const port = 3000

const app = express()
app.use(cors());
app.use(express.json())




/**
 * @brief Crea las tablas necesarias en la base de datos.
 * 
 * Esta ruta maneja las solicitudes GET a '/setup' y crea la tabla "sensors"
 * en la base de datos si no existe. 
 * 
 * @return JSON con un mensaje de éxito o error.
 */

// Crear tablas (setup)
app.get('/setup', async (req, res) => {
    try {
    
        // Crear la tabla "sensors" si no existe
        await pool.query(`
            CREATE TABLE IF NOT EXISTS sensors (
                id SERIAL PRIMARY KEY,
                type VARCHAR(100),
                value FLOAT,
                timestamp TIMESTAMP
            );
        `);
        res.status(200).send({ message: "Successfully created sensors table" });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});





/**
 * @brief Obtiene las últimas mediciones de temperatura y CO2.
 * 
 * Esta ruta maneja las solicitudes GET a '/latest' y devuelve la última
 * medición de temperatura y CO2 almacenada en la base de datos.
 * 
 * @return JSON con los datos de la última medición de temperatura y CO2,
 * o un mensaje de error en caso de fallo.
 */
// Obtener las últimas mediciones de temperatura y CO2
app.get('/latest', async (req, res) => {
    try {
        const temperatureQuery = await pool.query(`
            SELECT * FROM sensors
            WHERE type = 'temperature'
            ORDER BY timestamp DESC
            LIMIT 1
        `);
        const co2Query = await pool.query(`
            SELECT * FROM sensors
            WHERE type = 'CO2'
            ORDER BY timestamp DESC
            LIMIT 1
        `);

        const responseData = {
            temperature: temperatureQuery.rows[0] || null,
            co2: co2Query.rows[0] || null
        };

        res.status(200).send(responseData);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});







/**
 * @brief Inserta un nuevo dato de sensor en la base de datos.
 * 
 * Esta ruta maneja las solicitudes POST a '/' y permite insertar una nueva
 * medición de sensor. Verifica que el tipo de sensor y el valor sean válidos
 * antes de proceder a la inserción.
 * 
 * @param req.body.type El tipo de sensor (temperatura o CO2).
 * @param req.body.value El valor de la medición.
 * @param req.body.timestamp La marca de tiempo de la medición.
 * 
 * @return JSON con un mensaje de éxito o error.
 */
// Insertar un sensor (medición)
app.post('/', async (req, res) => {
    const { type, value, timestamp } = req.body; 

    // **********************************************************************
    //                 Validación de datos del sensor
    // **********************************************************************
    if (!['temperature', 'CO2'].includes(type) || typeof value !== 'number') {
        return res.status(400).send({ message: "Invalid sensor data" });
    }
    // **********************************************************************

    try {
        await pool.query('INSERT INTO sensors (type, value, timestamp) VALUES ($1, $2, $3)', [type, value, timestamp]);
        res.status(200).send({ message: "Successfully added sensor data" });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


/**
 * @brief Elimina los registros de sensor por tipo.
 * 
 * Esta ruta maneja las solicitudes DELETE a '/:type', permitiendo eliminar
 * todos los registros de un tipo de sensor específico.
 * 
 * @param req.params.type El tipo de sensor a eliminar.
 * 
 * @return JSON con un mensaje de éxito o error.
 */
app.delete('/:type', async (req, res) => {
    const { type } = req.params; // Eliminar por tipo de sensor
    try {
        await pool.query('DELETE FROM sensors WHERE type = $1', [type]);
        res.status(200).send({ message: `Successfully deleted records of type: ${type}` });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});


// Iniciar el servidor
app.listen(port, () => console.log(`Server has started on port: ${port}`))