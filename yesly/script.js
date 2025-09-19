// script.js

// Seleccionamos la navbar
const navbar = document.querySelector(".navbar");

// Colores posibles
const colores = ["#fce4ec", "#e47fa3", "#6a8caf", "#e5b3c2", "#d55d92"];

function colorAleatorio() {
  return colores[Math.floor(Math.random() * colores.length)];
}

// Cambiar color al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = colorAleatorio();
    navbar.style.transition = "background-color 0.6s ease";
  } else {
    navbar.style.backgroundColor = "#fce4ec"; // color original
  }
});

