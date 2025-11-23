// utils/api.js
const BASE_URL = 'http://localhost:3000';

// ------------------- ANIMALES -------------------
export async function getAnimales() {
  const res = await fetch(`${BASE_URL}/animales`);
  return await res.json();
}

export async function agregarAnimal(data) {
  const res = await fetch(`${BASE_URL}/animales`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),

  });
  return await res.json();
}

// ------------------- JAULAS -------------------
export async function getJaulas() {
  const res = await fetch(`${BASE_URL}/jaulas`);
  return await res.json();
}

export async function agregarJaula(data) {
  const res = await fetch(`${BASE_URL}/jaulas`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

// ------------------- CUIDADORES -------------------
export async function getCuidadores() {

  const res = await fetch(`${BASE_URL}/cuidadores`);
  return await res.json();
}

export async function agregarCuidador(data) {
  const res = await fetch(`${BASE_URL}/cuidadores`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

// ------------------- RESPONSABILIDADES -------------------
export async function getResponsabilidades() {
  const res = await fetch(`${BASE_URL}/responsabilidades`);
  return await res.json();
}

export async function agregarResponsabilidad(data) {
  const res = await fetch(`${BASE_URL}/responsabilidades`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}
