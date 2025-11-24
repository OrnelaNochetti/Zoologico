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
    // Primero verificamos si el cuidador tiene responsabilidades
    const checkSql = 'SELECT COUNT(*) AS total FROM responsabilidades WHERE id_cuidador=?';
    db.query(checkSql, [id], (err, result) => {
      if (err) return callback(err);

      if (result[0].total > 0) {
        // devolvemos un error controlado
        return callback(new Error('No se puede eliminar: el cuidador tiene responsabilidades asignadas.'));
      }

      // Si no tiene responsabilidades, eliminamos
      db.query('DELETE FROM cuidadores WHERE id_cuidador=?', [id], (err2) => {
        if (err2) return callback(err2);
        callback(null);
      });
    });
  }
};

module.exports = cuidadoresModel;