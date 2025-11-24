const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const connection = require('./db');

app.use(express.json());

const animalesRoutes = require('./routes/animales');
const jaulasRoutes = require('./routes/jaulas');
const cuidadoresRoutes = require('./routes/cuidadores');
const responsabilidadesRoutes = require('./routes/responsabilidades');

app.use('/animales', animalesRoutes);
app.use('/jaulas', jaulasRoutes);
app.use('/cuidadores', cuidadoresRoutes);
app.use('/responsabilidades', responsabilidadesRoutes);

app.get('/alimentacion/total', (req, res) => {
  connection.query(
    'SELECT SUM(alimentacion_diaria) AS comida_total_diaria FROM animales',
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results[0]);
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

