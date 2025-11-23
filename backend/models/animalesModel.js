const db = require('../db');

const animalesModel = {
  listar: (callback) => {
    db.query('SELECT * FROM animales', (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  agregar: (data, callback) => {
  const { nombre, especie, edad, alimentacion_diaria, id_jaula } = data;
  db.query(
    'INSERT INTO animales (nombre, especie, edad, alimentacion_diaria, id_jaula) VALUES (?, ?, ?, ?, ?)',
    [nombre, especie, edad, alimentacion_diaria, id_jaula],
    (err, results) => {
      if (err) return callback(err);
      callback(null, results);
      }
    );
  },

  editar: (id, data, callback) => {
    const { nombre, especie, edad, alimentacion_diaria, id_jaula } = data;
    db.query(
      'UPDATE animales SET nombre=?, especie=?, edad=?, alimentacion_diaria=?, id_jaula=? WHERE id_animal=?',
      [nombre, especie, edad, alimentacion_diaria, id_jaula, id],
      (err) => {
        if (err) return callback(err);
        callback(null);
      }
    );
  },

  eliminar: (id, callback) => {
    db.query('DELETE FROM animales WHERE id_animal=?', [id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  },

  buscar: (nombre, callback) => {
    db.query('SELECT * FROM animales WHERE nombre LIKE ?', [`%${nombre}%`], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
};


module.exports = animalesModel;

