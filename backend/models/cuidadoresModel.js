const db = require('../db');

const cuidadoresModel = {
  listar: (callback) => {
    db.query('SELECT * FROM cuidadores', (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  agregar: (data, callback) => {
    const { nombre, apellido, telefono, email } = data;
    db.query(
      'INSERT INTO cuidadores (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)',
      [nombre, apellido, telefono, email],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  editar: (id, data, callback) => {
    const { nombre, apellido, telefono, email } = data;
    db.query(
      'UPDATE cuidadores SET nombre=?, apellido=?, telefono=?, email=? WHERE id_cuidador=?',
      [nombre, apellido, telefono, email, id],
      (err) => {
        if (err) return callback(err);
        callback(null);
      }
    );
  },

  eliminar: (id, callback) => {
    db.query('DELETE FROM cuidadores WHERE id_cuidador=?', [id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  }
};

module.exports = cuidadoresModel;