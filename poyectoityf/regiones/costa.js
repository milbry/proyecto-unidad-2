// ==============================
// Animación al hacer scroll
// ==============================
function animarScroll() {
  const elementos = document.querySelectorAll(".animar");
  const ventanaAltura = window.innerHeight;

  elementos.forEach((elemento) => {
    const elementoTop = elemento.getBoundingClientRect().top;
    if (elementoTop < ventanaAltura - 100) {
      elemento.classList.add("visible");
    }
  });
}
 
window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);

// ==============================
// Datos de destinos
// ==============================
const destinos = [
  {
    titulo: "Tumbes – Manglares de Tumbes",
    img: "../img/c1t.jpg",
    descripcion:
      "Ecosistema único de canales y bosques inundados, hábitat de aves, cangrejos y cocodrilos. Es considerado el pulmón verde de la costa norte del Perú.",
    detalles: {
      ubicacion: "Tumbes, Frontera con Ecuador",
      temporada: "Junio a septiembre (clima ideal, menos lluvias)",
      entrada: "S/ 10.00 por persona",
    },
    maps: "https://www.google.com/maps?q=Manglares+de+Tumbes,+Perú",
  },
  {
    titulo: "Lambayeque – Túcume",
    img: "../img/c3l.jpg",
    descripcion:
      "Complejo arqueológico con 26 pirámides de adobe de la cultura Lambayeque, un viaje al pasado preincaico.",
    detalles: {
      ubicacion: "Túcume, Lambayeque",
      temporada: "Todo el año, mejor entre mayo y octubre",
      entrada: "S/ 15.00 adultos, S/ 5.00 estudiantes",
    },
    maps: "https://www.google.com/maps?q=Complejo+Arqueológico+Túcume,+Perú",
  },
  {
    titulo: "La Libertad – Chan Chan",
    img: "../img/c4l.jpg",
    descripcion:
      "Capital del reino Chimú, la ciudad de adobe más grande de América y Patrimonio de la Humanidad.",
    detalles: {
      ubicacion: "Trujillo, La Libertad",
      temporada: "Abril a noviembre (menos lluvias)",
      entrada: "S/ 12.00 adultos, S/ 5.00 estudiantes",
    },
    maps: "https://www.google.com/maps?q=Chan+Chan,+Trujillo,+Perú",
  },
  {
    titulo: "Áncash – Playa de Tuquillo",
    img: "../img/c5a.jpg",
    descripcion:
      "Conocida como la 'Piscina del Pacífico' por sus aguas tranquilas y cristalinas, ideal para familias.",
    detalles: {
      ubicacion: "Huarmey, Áncash",
      temporada: "Diciembre a marzo",
      entrada: "Acceso libre",
    },
    maps: "https://www.google.com/maps?q=Playa+Tuquillo,+Áncash,+Perú",
  },
  {
    titulo: "Lima – Circuito Mágico del Agua",
    img: "../img/c6l.png",
    descripcion:
      "Conjunto de fuentes cibernéticas con espectáculos de agua, luces y música en el corazón de la ciudad.",
    detalles: {
      ubicacion: "Parque de la Reserva, Lima",
      temporada: "Todo el año, shows nocturnos",
      entrada: "S/ 4.00 por persona",
    },
    maps: "https://www.google.com/maps?q=Circuito+Mágico+del+Agua,+Lima,+Perú",
  },
  {
    titulo: "Piura – Playa de Máncora",
    img: "../img/c2p.jpg",
    descripcion:
      "Aguas cálidas y olas perfectas para surf, además de vida nocturna y gastronomía marina.",
    detalles: {
      ubicacion: "Máncora, Piura",
      temporada: "Diciembre a marzo (playa), junio a septiembre (surf)",
      entrada: "Acceso libre",
    },
    maps: "https://www.google.com/maps?q=Máncora,+Perú",
  },
  {
    titulo: "Ica – Huacachina",
    img: "../img/c7h.jpg",
    descripcion:
      "Oasis natural rodeado de dunas, famoso para sandboard y paseos en tubulares.",
    detalles: {
      ubicacion: "Huacachina, Ica",
      temporada: "Todo el año, mejor de abril a noviembre",
      entrada: "Acceso libre (tours en tubulares desde S/ 40.00)",
    },
    maps: "https://www.google.com/maps?q=Huacachina,+Ica,+Perú",
  },
  {
    titulo: "Arequipa – Valle de Majes",
    img: "../img/c8a.jpg",
    descripcion:
      "Zona fértil famosa por sus viñedos, camarones y petroglifos milenarios.",
    detalles: {
      ubicacion: "Majes, Arequipa",
      temporada: "Marzo a diciembre (evitar lluvias de verano)",
      entrada: "Varía según atractivo",
    },
    maps: "https://www.google.com/maps?q=Valle+de+Majes,+Arequipa,+Perú",
  },
  {
    titulo: "Moquegua – Plaza de Armas",
    img: "../img/c9m.jpg",
    descripcion:
      "Centro histórico con arquitectura colonial y republicana rodeado de monumentos y naturaleza.",
    detalles: {
      ubicacion: "Moquegua",
      temporada: "Todo el año",
      entrada: "Acceso libre",
    },
    maps: "https://www.google.com/maps?q=Plaza+de+Armas,+Moquegua,+Perú",
  },
  {
    titulo: "Tacna – Petroglifos de Miculla",
    img: "../img/c10t.jpg",
    descripcion:
      "Grabados rupestres de más de 1500 años mostrando escenas de caza, danza y vida cotidiana.",
    detalles: {
      ubicacion: "Miculla, Tacna",
      temporada: "Abril a noviembre",
      entrada: "S/ 5.00 por persona",
    },
    maps: "https://www.google.com/maps?q=Petroglifos+de+Miculla,+Tacna,+Perú",
  },
];

// ==============================
// Modal dinámico
// ==============================
const modalTitulo = document.getElementById("modalTitulo");
const modalImg = document.getElementById("modalImg");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalInfo = document.getElementById("modalInfo");
const modalMaps = document.getElementById("modalMaps");

document.querySelectorAll(".destino-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const destino = destinos[index];
    modalTitulo.textContent = destino.titulo;
    modalImg.src = destino.img;
    modalDescripcion.textContent = destino.descripcion;

    // Rellenar detalles
    modalInfo.innerHTML = `
      <li><strong>📍 Ubicación:</strong> ${destino.detalles.ubicacion}</li>
      <li><strong>☀️ Mejor temporada:</strong> ${destino.detalles.temporada}</li>
      <li><strong>💰 Entrada:</strong> ${destino.detalles.entrada}</li>
    `;

    // Botón de Google Maps
    modalMaps.href = destino.maps;

    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById("modalDestino"));
    modal.show();
  });
});

// ==============================
// Validación de formulario
// ==============================
const form = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (nombre && email && mensaje) {
    respuesta.textContent = "✅ ¡Formulario enviado correctamente!";
    respuesta.style.color = "green";
    form.reset();
  } else {
    respuesta.textContent = "❌ Por favor completa todos los campos.";
    respuesta.style.color = "red";
  }
});
