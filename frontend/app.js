// app.js

// Ejemplo: resaltar el link activo en la navegación
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

// Ejemplo: función global para mostrar mensajes
export function mostrarMensaje(texto, tipo = "info") {
  const div = document.createElement("div");
  div.textContent = texto;
  div.className = `mensaje ${tipo}`;
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 3000);
}