CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

-- ============================
-- CREACIÓN DE TABLAS
-- ============================

-- Tabla de Jaulas
CREATE TABLE Jaulas (
  id_jaula INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(50),
  ubicacion VARCHAR(100),
  capacidad INT
);

-- Tabla de Animales
CREATE TABLE Animales (
  id_animal INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  especie VARCHAR(50),
  edad INT,
  alimentacion_diaria DECIMAL(10,2),
  id_jaula INT,
  FOREIGN KEY (id_jaula) REFERENCES Jaulas(id_jaula)
);

-- Tabla de Cuidadores
CREATE TABLE Cuidadores (
  id_cuidador INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  telefono VARCHAR(20),
  email VARCHAR(100)
);

-- Tabla de Responsabilidades
CREATE TABLE Responsabilidades (
  id_responsabilidad INT AUTO_INCREMENT PRIMARY KEY,
  id_animal INT,
  id_cuidador INT,
  fecha_asignacion DATE,
  FOREIGN KEY (id_animal) REFERENCES Animales(id_animal),
  FOREIGN KEY (id_cuidador) REFERENCES Cuidadores(id_cuidador)
);

-- ============================
-- DATOS DE PRUEBA
-- ============================

-- Jaulas
INSERT INTO Jaulas (codigo, ubicacion, capacidad) VALUES
('J-001', 'Sector Norte', 5),
('J-002', 'Sector Sur', 3),
('J-003', 'Sector Este', 4);

-- Animales
INSERT INTO Animales (nombre, especie, edad, alimentacion_diaria, id_jaula) VALUES
('Lola', 'Elefante', 12, 50.00, 1),
('Max', 'Tigre', 7, 10.50, 2),
('Kiki', 'Mono', 4, 3.20, 3),
('Nina', 'Jirafa', 9, 15.00, 1),
('Rex', 'León', 6, 12.00, 2);

-- Cuidadores
INSERT INTO Cuidadores (nombre, apellido, telefono, email) VALUES
('Juan', 'Pérez', '123456789', 'juan.perez@zoo.com'),
('María', 'Gómez', '987654321', 'maria.gomez@zoo.com'),
('Carlos', 'López', '456789123', 'carlos.lopez@zoo.com');

-- Responsabilidades
INSERT INTO Responsabilidades (id_animal, id_cuidador, fecha_asignacion) VALUES
(1, 1, '2025-11-01'),
(2, 2, '2025-11-02'),
(3, 3, '2025-11-03'),
(4, 1, '2025-11-04'),
(5, 2, '2025-11-05');

-- ============================
-- CONSULTAS DE PRUEBA
-- ============================

-- 1. Animales con su jaula
SELECT a.nombre AS animal, a.especie, j.codigo AS jaula, j.ubicacion
FROM Animales a
JOIN Jaulas j ON a.id_jaula = j.id_jaula;

-- 2. Cuidadores y los animales que cuidan
SELECT c.nombre AS cuidador, c.apellido, a.nombre AS animal, a.especie, r.fecha_asignacion
FROM Responsabilidades r
JOIN Cuidadores c ON r.id_cuidador = c.id_cuidador
JOIN Animales a ON r.id_animal = a.id_animal;

-- 3. Animales en cada jaula y su cuidador
SELECT j.codigo AS jaula, j.ubicacion, a.nombre AS animal, c.nombre AS cuidador, c.apellido
FROM Jaulas j
JOIN Animales a ON j.id_jaula = a.id_jaula
JOIN Responsabilidades r ON a.id_animal = r.id_animal
JOIN Cuidadores c ON r.id_cuidador = c.id_cuidador;

-- 4. Cantidad de animales por jaula
SELECT j.codigo, COUNT(a.id_animal) AS cantidad_animales
FROM Jaulas j
LEFT JOIN Animales a ON j.id_jaula = a.id_jaula
GROUP BY j.codigo;

-- 5. Animales con alimentación diaria mayor a 10 kg
SELECT nombre, especie, alimentacion_diaria
FROM Animales
WHERE alimentacion_diaria > 10;