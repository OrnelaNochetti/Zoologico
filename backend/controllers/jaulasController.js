const jaulasModel = require('../models/jaulasModel');

// Listar todas las jaulas
exports.listar = (req, res) => {
  jaulasModel.listar((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Agregar una nueva jaula
exports.agregar = (req, res) => {
  const data = req.body;
  jaulasModel.agregar(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id: results.insertId, ...data });
  });
};

// Editar una jaula existente
exports.editar = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  jaulasModel.editar(id, data, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Jaula actualizada correctamente' });
  });
};

// Eliminar una jaula
exports.eliminar = (req, res) => {
  const { id } = req.params;
  jaulasModel.eliminar(id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Jaula eliminada correctamente' });
  });
};

// =======================
// NUEVAS FUNCIONALIDADES
// =======================

// Alimentación total de todas las jaulas
exports.alimentacionTotal = (req, res) => {
  jaulasModel.alimentacionTotal((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Alimentación de una sola jaula
exports.alimentacionPorJaula = (req, res) => {
  const { id } = req.params;
  jaulasModel.alimentacionPorJaula(id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (!result) return res.status(404).json({ message: 'Jaula no encontrada o sin animales' });
    res.json(result);
  });
};