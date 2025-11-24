const db = require('../db');

const jaulasModel = {
  // Listar todas las jaulas
  listar: (callback) => {
    db.query('SELECT * FROM jaulas', (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  // Agregar una nueva jaula
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

  // Editar una jaula existente
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

  // Eliminar una jaula
  eliminar: (id, callback) => {
    db.query('DELETE FROM jaulas WHERE id_jaula=?', [id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  },

  // =======================
  // NUEVAS FUNCIONALIDADES
  // =======================

  // Alimentación total de todas las jaulas
  alimentacionTotal: (callback) => {
    db.query(
      `SELECT j.id_jaula, j.codigo, j.ubicacion,
              SUM(a.alimentacion_diaria) AS total_alimentacion_diaria
       FROM jaulas j
       JOIN animales a ON j.id_jaula = a.id_jaula
       GROUP BY j.id_jaula, j.codigo, j.ubicacion`,
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  // Alimentación de una sola jaula
  alimentacionPorJaula: (id, callback) => {
    db.query(
      `SELECT j.id_jaula, j.codigo, j.ubicacion,
              SUM(a.alimentacion_diaria) AS total_alimentacion_diaria
       FROM jaulas j
       JOIN animales a ON j.id_jaula = a.id_jaula
       WHERE j.id_jaula = ?
       GROUP BY j.id_jaula, j.codigo, j.ubicacion`,
      [id],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]); // devuelve solo una fila
      }
    );
  }
};

module.exports = jaulasModel;