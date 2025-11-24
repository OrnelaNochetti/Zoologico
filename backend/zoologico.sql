CREATE TABLE jaulas (
  id_jaula INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(50) NOT NULL,
  ubicacion VARCHAR(100) NOT NULL,
  capacidad INT NOT NULL
);

CREATE TABLE cuidadores (
  id_cuidador INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  telefono VARCHAR(30),
  email VARCHAR(100)
);

CREATE TABLE animales (
  id_animal INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  especie VARCHAR(50) NOT NULL,             
  edad INT NOT NULL,                       
  alimentacion_diaria DECIMAL(6,2) NOT NULL, 
  id_jaula INT,
  FOREIGN KEY (id_jaula) REFERENCES jaulas(id_jaula)
);

CREATE TABLE responsabilidades (
  id_responsabilidad INT AUTO_INCREMENT PRIMARY KEY,
  id_cuidador INT NOT NULL,
  id_jaula INT NOT NULL,
  semana INT NOT NULL,
  fecha_asignacion DATE NOT NULL,
  FOREIGN KEY (id_cuidador) REFERENCES cuidadores(id_cuidador),
  FOREIGN KEY (id_jaula) REFERENCES jaulas(id_jaula),
  UNIQUE (id_cuidador, id_jaula, semana) 
);

INSERT INTO jaulas (codigo, ubicacion, capacidad) VALUES
('J-001', 'Sector Felinos', 3),
('J-002', 'Sector Herbívoros', 4),
('J-003', 'Sector Aves', 10),
('J-004', 'Sector Reptiles', 6),
('J-005', 'Sector Acuáticos', 8);

INSERT INTO cuidadores (nombre, apellido, telefono, email) VALUES
('Pepito', 'González', '111-222', 'pepito@example.com'),
('María', 'López', '333-444', 'maria@example.com'),
('Carlos', 'Ramírez', '555-666', 'carlos@example.com'),
('Lucía', 'Fernández', '777-888', 'lucia@example.com'),
('Jorge', 'Martínez', '999-000', 'jorge@example.com');

INSERT INTO animales (nombre, especie, edad, alimentacion_diaria, id_jaula) VALUES
('León', 'Panthera leo', 8, 12.00, 1),
('Leopardo', 'Panthera pardus', 5, 7.00, 1),
('Tigre', 'Panthera tigris', 6, 14.00, 1),
('Cebra', 'Equus quagga', 6, 8.00, 2),
('Antílope', 'Antilope cervicapra', 4, 5.00, 2),
('Jirafa', 'Giraffa camelopardalis', 10, 20.00, 2),
('Guacamayo', 'Ara macao', 3, 0.15, 3),
('Águila', 'Aquila chrysaetos', 7, 0.50, 3),
('Flamenco', 'Phoenicopterus roseus', 5, 0.40, 3),
('Cocodrilo', 'Crocodylus niloticus', 12, 10.00, 4),
('Iguana', 'Iguana iguana', 4, 0.30, 4),
('Serpiente Pitón', 'Python bivittatus', 9, 2.00, 4),
('Delfín', 'Delphinus delphis', 15, 12.00, 5),
('Pingüino', 'Spheniscidae', 6, 3.00, 5),
('Foca', 'Phoca vitulina', 8, 6.00, 5);

INSERT INTO responsabilidades (id_cuidador, id_jaula, semana, fecha_asignacion) VALUES
(1, 1, 1, '2025-11-01'),
(2, 2, 1, '2025-11-01'),
(3, 3, 1, '2025-11-01'),
(4, 4, 1, '2025-11-01'),
(5, 5, 1, '2025-11-01'),
(1, 2, 2, '2025-11-08'),
(2, 3, 2, '2025-11-08'),
(3, 4, 2, '2025-11-08'),
(4, 5, 2, '2025-11-08'),
(5, 1, 2, '2025-11-08');

SELECT a.nombre AS animal, a.especie, j.codigo AS jaula, j.ubicacion
FROM animales a
JOIN jaulas j ON a.id_jaula = j.id_jaula;

SELECT c.nombre AS cuidador, c.apellido,
       a.nombre AS animal, a.especie,
       r.fecha_asignacion
FROM responsabilidades r
JOIN cuidadores c ON r.id_cuidador = c.id_cuidador
JOIN jaulas j ON r.id_jaula = j.id_jaula
JOIN animales a ON j.id_jaula = a.id_jaula;

SELECT j.codigo AS jaula, j.ubicacion,
       a.nombre AS animal,
       c.nombre AS cuidador, c.apellido
FROM jaulas j
JOIN animales a ON j.id_jaula = a.id_jaula
JOIN responsabilidades r ON j.id_jaula = r.id_jaula
JOIN cuidadores c ON r.id_cuidador = c.id_cuidador;

SELECT j.codigo, COUNT(a.id_animal) AS cantidad_animales
FROM jaulas j
LEFT JOIN animales a ON j.id_jaula = a.id_jaula
GROUP BY j.codigo;

SELECT nombre, especie, alimentacion_diaria
FROM animales
WHERE alimentacion_diaria > 10;
