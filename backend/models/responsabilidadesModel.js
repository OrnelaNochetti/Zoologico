const db = require('../db');

const responsabilidadesModel = {
  listar: (callback) => {
    db.query('SELECT * FROM responsabilidades', (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  agregar: (data, callback) => {
    const { id_cuidador, id_jaula, semana, fecha_asignacion } = data;
    db.query(
      'INSERT INTO responsabilidades (id_cuidador, id_jaula, semana, fecha_asignacion) VALUES (?, ?, ?, ?)',
      [id_cuidador, id_jaula, semana, fecha_asignacion],
      (err, results) => {
        if (err) return callback(err);
        callback(null, results);
      }
    );
  },

  editar: (id, data, callback) => {
    const { id_cuidador, id_jaula, semana, fecha_asignacion } = data;
    db.query(
      'UPDATE responsabilidades SET id_cuidador=?, id_jaula=?, semana=?, fecha_asignacion=? WHERE id_responsabilidad=?',
      [id_cuidador, id_jaula, semana, fecha_asignacion, id],
      (err) => {
        if (err) return callback(err);
        callback(null);
      }
    );
  },

  eliminar: (id, callback) => {
    db.query('DELETE FROM responsabilidades WHERE id_responsabilidad=?', [id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  }
};

module.exports = responsabilidadesModel;