const connection = require('../db');

exports.listar = (callback) => {
  connection.query('SELECT * FROM Jaulas', callback);
};

exports.agregar = (data, callback) => {
  connection.query(
    'INSERT INTO Jaulas (codigo, ubicacion, capacidad) VALUES (?, ?, ?)',
    [data.codigo, data.ubicacion, data.capacidad],
    callback
  );
};

exports.editar = (id, data, callback) => {
  connection.query(
    'UPDATE Jaulas SET codigo=?, ubicacion=?, capacidad=? WHERE id_jaula=?',
    [data.codigo, data.ubicacion, data.capacidad, id],
    callback
  );
};

exports.eliminar = (id, callback) => {
  connection.query('DELETE FROM Jaulas WHERE id_jaula=?', [id], callback);
};
