const db = require('../db');

const responsabilidadesModel = {
  listar: (callback) => {
    const sql = `
      SELECT r.id_responsabilidad, r.id_cuidador, r.id_jaula, r.semana, r.fecha_asignacion,
             c.nombre AS nombre_cuidador, c.apellido AS apellido_cuidador
      FROM responsabilidades r
      JOIN cuidadores c ON r.id_cuidador = c.id_cuidador
    `;
    db.query(sql, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  agregar: (data, callback) => {
    const { id_cuidador, id_jaula, semana, fecha_asignacion } = data;
    const sql = 'INSERT INTO responsabilidades (id_cuidador, id_jaula, semana, fecha_asignacion) VALUES (?, ?, ?, ?)';
    db.query(sql, [id_cuidador, id_jaula, semana, fecha_asignacion], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  editar: (id, data, callback) => {
    const { id_cuidador, id_jaula, semana, fecha_asignacion } = data;
    const sql = 'UPDATE responsabilidades SET id_cuidador=?, id_jaula=?, semana=?, fecha_asignacion=? WHERE id_responsabilidad=?';
    db.query(sql, [id_cuidador, id_jaula, semana, fecha_asignacion, id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  },

  eliminar: (id, callback) => {
    const sql = 'DELETE FROM responsabilidades WHERE id_responsabilidad=?';
    db.query(sql, [id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  }
};

module.exports = responsabilidadesModel;