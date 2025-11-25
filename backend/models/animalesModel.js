const db = require('../db');

const animalesModel = {
  listar: (callback) => {
    const sql = `
      SELECT a.id_animal, a.nombre, a.especie, a.edad, a.alimentacion_diaria,
             j.id_jaula, j.ubicacion AS sector
      FROM animales a
      LEFT JOIN jaulas j ON a.id_jaula = j.id_jaula
    `;
    db.query(sql, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  agregar: (data, callback) => {
    const { nombre, especie, edad, alimentacion_diaria, id_jaula } = data;
    const sql = 'INSERT INTO animales (nombre, especie, edad, alimentacion_diaria, id_jaula) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, especie, edad, alimentacion_diaria, id_jaula], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  editar: (id, data, callback) => {
    const { nombre, especie, edad, alimentacion_diaria, id_jaula } = data;
    const sql = 'UPDATE animales SET nombre=?, especie=?, edad=?, alimentacion_diaria=?, id_jaula=? WHERE id_animal=?';
    db.query(sql, [nombre, especie, edad, alimentacion_diaria, id_jaula, id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  },

  eliminar: (id, callback) => {
    const sql = 'DELETE FROM animales WHERE id_animal=?';
    db.query(sql, [id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  },

  buscar: (nombre, callback) => {
    const sql = `
      SELECT a.id_animal, a.nombre, a.especie, a.edad, a.alimentacion_diaria,
             j.id_jaula, j.ubicacion AS sector
      FROM animales a
      LEFT JOIN jaulas j ON a.id_jaula = j.id_jaula
      WHERE a.nombre LIKE ?
    `;
       let params = [];

    if (nombre && nombre.trim() !== '') {
      sql += ' WHERE a.nombre LIKE ?';
      params.push(`%${nombre}%`);
    }

    db.query(sql, params, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
};

module.exports = animalesModel;