const BASE_URL = 'http://localhost:3000';

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

export async function editarAnimal(id, data) {
  const res = await fetch(`${BASE_URL}/animales/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function eliminarAnimal(id) {
  const res = await fetch(`${BASE_URL}/animales/${id}`, { method: 'DELETE' });
  return await res.json();
}

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

export async function editarJaula(id, data) {
  const res = await fetch(`${BASE_URL}/jaulas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function eliminarJaula(id) {
  const res = await fetch(`${BASE_URL}/jaulas/${id}`, { method: 'DELETE' });
  return await res.json();
}

export async function getAlimentacionPorJaula() {
  const res = await fetch(`${BASE_URL}/jaulas/alimentacion`);
  return await res.json();
}

export async function getAlimentacionDeUnaJaula(id) {
  const res = await fetch(`${BASE_URL}/jaulas/${id}/alimentacion`);
  return await res.json();
}

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

export async function editarCuidador(id, data) {
  const res = await fetch(`${BASE_URL}/cuidadores/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function eliminarCuidador(id) {
  const res = await fetch(`${BASE_URL}/cuidadores/${id}`, { method: 'DELETE' });
  return await res.json();
}

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

export async function editarResponsabilidad(id, data) {
  const res = await fetch(`${BASE_URL}/responsabilidades/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export async function eliminarResponsabilidad(id) {
  const res = await fetch(`${BASE_URL}/responsabilidades/${id}`, { method: 'DELETE' });
  return await res.json();
}
