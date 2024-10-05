
const express = require('express')
const cors = require('cors');
const pool = require('./db')
const port = 3000

const app = express()
app.use(cors());
app.use(express.json())



// Crear tablas (setup)
app.get('/setup', async (req, res) => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS sensors (
                id SERIAL PRIMARY KEY,
                type VARCHAR(100),
                value FLOAT,
                timestamp TIMESTAMP
            );
        `);
        res.status(200).send({ message: "Successfully created sensors table or it already exists" });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});



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



// Insertar un sensor (medición)
app.post('/', async (req, res) => {
    const { type, value, timestamp } = req.body; 

    // **********************************************************************
    //                 ESTO ME DA MIEDO, SI NO VA LO QUITO
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