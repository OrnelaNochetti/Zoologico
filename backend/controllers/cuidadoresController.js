const cuidadoresModel = require('../models/cuidadoresModel');

exports.listar = (req, res) => {
  cuidadoresModel.listar((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.agregar = (req, res) => {
  const data = req.body;
  cuidadoresModel.agregar(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id: results.insertId, ...data });
  });
};

exports.editar = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  cuidadoresModel.editar(id, data, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Cuidador actualizado correctamente' });
  });
};

exports.eliminar = (req, res) => {
  const { id } = req.params;
  cuidadoresModel.eliminar(id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Cuidador eliminado correctamente' });
  });
};