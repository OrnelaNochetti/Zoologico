CREATE TABLE Jaulas (
  id_jaula INT AUTO_INCREMENT PRIMARY KEY,
  codigo VARCHAR(50),
  ubicacion VARCHAR(100),
  capacidad INT
);

CREATE TABLE Animales (
  id_animal INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  especie VARCHAR(50),
  edad INT,
  alimentacion_diaria DECIMAL(10,2),
  id_jaula INT,
  FOREIGN KEY (id_jaula) REFERENCES Jaulas(id_jaula)
);

CREATE TABLE Cuidadores (
  id_cuidador INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  apellido VARCHAR(50),
  telefono VARCHAR(20),
  email VARCHAR(100)
);

CREATE TABLE Responsabilidades (
  id_responsabilidad INT AUTO_INCREMENT PRIMARY KEY,
  id_animal INT,
  id_cuidador INT,
  fecha_asignacion DATE,
  FOREIGN KEY (id_animal) REFERENCES Animales(id_animal),
  FOREIGN KEY (id_cuidador) REFERENCES Cuidadores(id_cuidador)
);
