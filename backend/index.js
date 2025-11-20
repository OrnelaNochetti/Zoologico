const express = require('express');
const app = express();
const connection = require('./db'); // conexión a MySQL

app.use(express.json());

// Importar rutas
const animalesRoutes = require('./routes/animales');
const jaulasRoutes = require('./routes/jaulas');
const cuidadoresRoutes = require('./routes/cuidadores');
const responsabilidadesRoutes = require('./routes/responsabilidades');

// Usar rutas
app.use('/animales', animalesRoutes);
app.use('/jaulas', jaulasRoutes);
app.use('/cuidadores', cuidadoresRoutes);
app.use('/responsabilidades', responsabilidadesRoutes);

// ------------------- RUTA ESPECIAL: COMIDA DIARIA -------------------
app.get('/alimentacion/total', (req, res) => {
  connection.query(
    'SELECT SUM(alimentacion_diaria) AS comida_total_diaria FROM Animales',
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results[0]);
    }
  );
});

// ------------------- INICIO SERVIDOR -------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});