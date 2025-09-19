// Obtener formulario por id
var formulario = document.getElementById("formulario");

// Mensaje de bienvenida
Swal.fire("Bienvenido a nuestra página! 🌍");

// Validación y envío del formulario
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = parseInt(document.getElementById("edad").value);
    var destino = document.getElementById("destino").value; // ✅ agregado
    var mensaje = document.getElementById("mensaje").value;

    if (edad < 17) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No puedes registrarte si eres menor de 17!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    console.log("Nombre: " + nombre);
    console.log("Correo: " + email);
    console.log("Edad: " + edad);
    console.log("Destino: " + destino);
    console.log("Mensaje: " + mensaje);

    Swal.fire({
        title: "Formulario completado!",
        icon: "success",
        draggable: true
    });

    formulario.reset();
});

// Botón WhatsApp
document.getElementById("btnWhatsapp").addEventListener("click", function () {
    let numero = "51928345384";
    let mensaje = "¡Hola! 👋 Quiero más información sobre los destinos de la Selva."; // ✅ corregido el texto

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje); // ✅ corregido el enlace
    window.open(url, "_blank");
});

// Animaciones con IntersectionObserver
const animaciones = document.querySelectorAll(".fade-in, .zoom-in");

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

animaciones.forEach((el) => observer.observe(el));

