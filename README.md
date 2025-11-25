Sistema de Gestion de Zoologico
- Este proyecto es un panel de gestion integral para la administracion de un zoologico.
  Permite llevar un registro detallado de los animales, sus jaulas, los cuidadores responsable y las asignaciones de 
  responsabilidades semanales.
 
Tecnologias utilizadas
- Frontend: HTML, CSS y JavaScript.
- Backend: Node.js con Express (gestiona las rutas API en el puerto 3000).
- Base de Datos: MySQL/MariaDB (definido en zoologico.sql).

Estructura de la Base de Datos (MySQL).
- La base de datos tiene propositos especificos y esta organizada de la siguiente manera (detallado en zoologico.sql).

- Jaulas
  - Proposito: contiene la informacion de las jaulas.
  - Campos clave: codigo, ubicacion, capacidad.
 
- Cuidadores
  - Proposito: contiene los datos del personal de cuidado.
  - Campos clave: nombre, apellido, telefono, email.
 
- Animales
  - Proposito: contiene el inventario de todos los animales que hay en el zoologico.
  - Campos clave: nombre, especie, edad, id_jaula, alimentacion_diaria(en kg).

- Responsabilidades
  - Proposito: asigna a cada cuidador la jaula que le toca por semana.
  - Campos clave: id_cuidador, id_jaula, semana, fecha_asignacion.
 
- Alimentacion
  - Proposito: permite ver el requerimiento total de alimento diario.
  - Campos clave: codigo, ubicacion, alimentacion_diaria.
 
Instrucciones de Instalacion y uso
- Para ejecutar esta aplicacion necesitas tener MySQL/MariaDB y Node.js instalados.

1. Clonar repositorio (https://github.com/OrnelaNochetti/Zoologico.git).
2. Configurar la Base de Datos:
   - Crea una base de datos en tu servidor MySQL (por ejemplo, zoologico).
   - Ejecuta el script zoologico.sql para crear las tablas y cargar los datos de prueba.
3. Configurar el Backend:
   - Ir a la carpeta del backend (cd backend).
   - Instalar las dependencias: npm install (requiere Express, Cors, mysql2, etc).
   - Asegurarse de que el archivo de conexion (db.js) tenga el usuario y la contraseña correctas para MariaDB.
   - Inicia el servidor Node.js/Express: node index.js
4. Iniciar el Frontend:
   - Abrir el archivo index.html en el navegador.
  

