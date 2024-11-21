const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api', routes);

// Ruta de prueba
app.get('/prueba', (req, res) => {
    res.send({ mensaje: '¡El servidor está funcionando correctamente!' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
