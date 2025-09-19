// ===== 1. Efecto de escritura en el título =====
const texto = "Explora las tres regiones del Perú";
const titulo = document.querySelector("h1");
let i = 0;

function escribir() {
  if (i < texto.length) {
    titulo.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 100); // velocidad de escritura
  }
}
titulo.textContent = ""; // limpiar antes de escribir
escribir();

// ===== 2. Cambio dinámico de fondo =====
const colores = [
  "linear-gradient(135deg, #ffecd2, #fcb69f)",
  "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  "linear-gradient(135deg, #d4fc79, #96e6a1)",
  "linear-gradient(135deg, #fbc2eb, #a6c1ee)"
];
let index = 0;

setInterval(() => {
  document.body.style.background = colores[index];
  index = (index + 1) % colores.length;
}, 5000); // cada 5 segundos cambia

// ===== 3. Scroll suave al hacer clic en menú =====
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});
