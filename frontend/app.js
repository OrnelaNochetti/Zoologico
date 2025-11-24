import { getAlimentacionPorJaula, getAlimentacionDeUnaJaula } from './utils/api.js';

// =======================
// Navegación activa
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  // Al cargar la página, mostramos la alimentación total
  mostrarAlimentacionTotal();
});

// =======================
// Función global de mensajes
// =======================
export function mostrarMensaje(texto, tipo = "info") {
  const div = document.createElement("div");
  div.textContent = texto;
  div.className = `mensaje ${tipo}`;
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 3000);
}

// =======================
// Alimentación por jaula
// =======================

// Mostrar todas las jaulas con su alimentación
async function mostrarAlimentacionTotal() {
  try {
    const jaulas = await getAlimentacionPorJaula();
    const tabla = document.getElementById('tabla-alimentacion');
    tabla.innerHTML = '';

    jaulas.forEach(j => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${j.codigo}</td>
        <td>${j.ubicacion}</td>
        <td>${j.total_alimentacion_diaria} kg/día</td>
      `;
      tabla.appendChild(fila);
    });
  } catch (error) {
    mostrarMensaje("Error al cargar alimentación", "error");
    console.error(error);
  }
}

// Mostrar una sola jaula (ejemplo: id=3)
export async function mostrarAlimentacionDeJaula(id) {
  try {
    const jaula = await getAlimentacionDeUnaJaula(id);
    mostrarMensaje(
      `La jaula ${jaula.codigo} necesita ${jaula.total_alimentacion_diaria} kg/día`,
      "info"
    );
  } catch (error) {
    mostrarMensaje("Error al cargar alimentación de la jaula", "error");
    console.error(error);
  }
}