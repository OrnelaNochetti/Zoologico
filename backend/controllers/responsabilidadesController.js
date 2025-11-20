const responsabilidadesModel = require('../models/responsabilidadesModel');

exports.listar = (req, res) => {
  responsabilidadesModel.listar((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.agregar = (req, res) => {
  const data = req.body;
  responsabilidadesModel.agregar(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id: results.insertId, ...data });
  });
};

exports.editar = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  responsabilidadesModel.editar(id, data, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Responsabilidad actualizada correctamente' });
  });
};

exports.eliminar = (req, res) => {
  const { id } = req.params;
  responsabilidadesModel.eliminar(id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Responsabilidad eliminada correctamente' });
  });
};