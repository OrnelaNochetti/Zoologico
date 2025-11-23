const db = require('../db');

const jaulasModel = {
  listar: (callback) => {
    db.query('SELECT * FROM jaulas', (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  agregar: (data, callback) => {
    const { codigo, ubicacion, capacidad } = data;
    db.query(
      'INSERT INTO jaulas (codigo, ubicacion, capacidad) VALUES (?, ?, ?)',
      [codigo, ubicacion, capacidad],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  editar: (id, data, callback) => {
    const { codigo, ubicacion, capacidad } = data;
    db.query(
      'UPDATE jaulas SET codigo=?, ubicacion=?, capacidad=? WHERE id_jaula=?',
      [codigo, ubicacion, capacidad, id],
      (err) => {
        if (err) return callback(err);
        callback(null);
      }
    );
  },

  eliminar: (id, callback) => {
    db.query('DELETE FROM jaulas WHERE id_jaula=?', [id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  }
};

module.exports = jaulasModel;