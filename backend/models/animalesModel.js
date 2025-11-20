const connection = require('../db');

exports.listar = (callback) => {
  connection.query('SELECT * FROM Animales', callback);
};

exports.agregar = (data, callback) => {
  connection.query(
    'INSERT INTO Animales (nombre, especie, edad, alimentacion_diaria, id_jaula) VALUES (?, ?, ?, ?, ?)',
    [data.nombre, data.especie, data.edad, data.alimentacion_diaria, data.id_jaula],
    callback
  );
};

exports.editar = (id, data, callback) => {
  connection.query(
    'UPDATE Animales SET nombre=?, especie=?, edad=?, alimentacion_diaria=?, id_jaula=? WHERE id_animal=?',
    [data.nombre, data.especie, data.edad, data.alimentacion_diaria, data.id_jaula, id],
    callback
  );
};

exports.eliminar = (id, callback) => {
  connection.query('DELETE FROM Animales WHERE id_animal=?', [id], callback);
};

exports.buscar = (nombre, callback) => {
  connection.query('SELECT * FROM Animales WHERE nombre LIKE ?', [`%${nombre}%`], callback);
};
