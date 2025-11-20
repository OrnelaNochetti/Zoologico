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