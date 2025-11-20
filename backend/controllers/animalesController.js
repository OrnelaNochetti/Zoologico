const animalesModel = require('../models/animalesModel');

exports.listar = (req, res) => {
  animalesModel.listar((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.agregar = (req, res) => {
  const data = req.body;
  animalesModel.agregar(data, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id: results.insertId, ...data });
  });
};

exports.editar = (req, res) => {
  const { id } = req.params;
  const data = req.body;
  animalesModel.editar(id, data, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Animal actualizado correctamente' });
  });
};

exports.eliminar = (req, res) => {
  const { id } = req.params;
  animalesModel.eliminar(id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Animal eliminado correctamente' });
  });
};

exports.buscar = (req, res) => {
  const { nombre } = req.params;
  animalesModel.buscar(nombre, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};