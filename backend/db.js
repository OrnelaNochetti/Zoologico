const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',   // mejor usar IP en vez de 'localhost'
  user: 'root',
  password: 'pc2025',        // o la que uses
  database: 'zoologico',
  port: 3306,          // ← este es el puerto correcto según tu my.ini
  connectTimeout: 10000
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con MySQL:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
