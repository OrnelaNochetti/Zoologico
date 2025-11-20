const connection = require('../db');

exports.listar = (callback) => {
  connection.query('SELECT * FROM Cuidadores', callback);
};

exports.agregar = (data, callback) => {
  connection.query(
    'INSERT INTO Cuidadores (nombre, apellido, telefono, email) VALUES (?, ?, ?, ?)',
    [data.nombre, data.apellido, data.telefono, data.email],
    callback
  );
};

exports.editar = (id, data, callback) => {
  connection.query(
    'UPDATE Cuidadores SET nombre=?, apellido=?, telefono=?, email=? WHERE id_cuidador=?',
    [data.nombre, data.apellido, data.telefono, data.email, id],
    callback
  );
};

exports.eliminar = (id, callback) => {
  connection.query('DELETE FROM Cuidadores WHERE id_cuidador=?', [id], callback);
};
