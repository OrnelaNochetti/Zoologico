const connection = require('../db');

exports.listar = (callback) => {
  // Incluimos JOIN para mostrar también nombre del animal y cuidador
  connection.query(
    `SELECT r.id_responsabilidad, r.fecha_asignacion,
            a.nombre AS animal, c.nombre AS cuidador, c.apellido
     FROM Responsabilidades r
     JOIN Animales a ON r.id_animal = a.id_animal
     JOIN Cuidadores c ON r.id_cuidador = c.id_cuidador`,
    callback
  );
};

exports.agregar = (data, callback) => {
  connection.query(
    'INSERT INTO Responsabilidades (id_animal, id_cuidador, fecha_asignacion) VALUES (?, ?, ?)',
    [data.id_animal, data.id_cuidador, data.fecha_asignacion],
    callback
  );
};

exports.editar = (id, data, callback) => {
  connection.query(
    'UPDATE Responsabilidades SET id_animal=?, id_cuidador=?, fecha_asignacion=? WHERE id_responsabilidad=?',
    [data.id_animal, data.id_cuidador, data.fecha_asignacion, id],
    callback
  );
};

exports.eliminar = (id, callback) => {
  connection.query('DELETE FROM Responsabilidades WHERE id_responsabilidad=?', [id], callback);
};
