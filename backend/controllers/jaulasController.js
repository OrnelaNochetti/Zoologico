const jaulasModel = require('../models/jaulasModel');

exports.listar = (req, res) => {
  jaulasModel.listar((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.agregar = (req, res) => {
  const data = req.body;
  jaulasModel.agregar(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id: results.insertId, ...data });
  });
};

exports.editar = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  jaulasModel.editar(id, data, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Jaula actualizada correctamente' });
  });
};

exports.eliminar = (req, res) => {
  const { id } = req.params;
  jaulasModel.eliminar(id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Jaula eliminada correctamente' });
  });
};

exports.alimentacionTotal = (req, res) => {
  jaulasModel.alimentacionTotal((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.alimentacionPorJaula = (req, res) => {
  const { id } = req.params;
  jaulasModel.alimentacionPorJaula(id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (!result) return res.status(404).json({ message: 'Jaula no encontrada o sin animales' });
    res.json(result);
  });
};
