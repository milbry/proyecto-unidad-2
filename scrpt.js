var formulario = document.getElementById("formulario");
Swal.fire("Bienvenido a nuestra pagina! 🌍");



formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = parseInt(document.getElementById("edad").value);
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

document.getElementById("btnWhatsapp").addEventListener("click", function () {
    let numero = "51928345384";
    let mensaje = "¡Hola! 👋 Quiero más información sobre los destinos de la Sierra.";

    let url = "https:wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
});


const animados = document.querySelectorAll(".fade-in, .slide-left, .slide-right, .zoom-in");

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("show");
    }
  });
}, { threshold: 0.2 }); 


animados.forEach((el) => observer.observe(el));

const events = {
  "1-6": "Bajada de Reyes - Ayacucho (6 de enero)",
  "2-2": "Virgen de la Candelaria - Puno (2 de febrero)",
  "3-19": "Fiesta de San José - Cajamarca (19 de marzo)",
  "4-24": "Fiesta de San Jorge - Apurímac (24 de abril)",
  "5-3": "Fiesta de las Cruces - Huancavelica (3 de mayo)",
  "6-24": "Inti Raymi - Cusco (24 de junio)",
  "7-15": "Virgen del Carmen - Paucartambo, Cusco (15 de julio)",
  "7-28": "Fiestas Patrias - Todo el Perú (28 de julio)",
  "8-15": "Virgen de la Asunción - Huancavelica (15 de agosto)",
  "9-14": "Señor de Huanca - Cusco (14 de septiembre)",
  "10-4": "San Francisco de Asís - Huánuco (4 de octubre)",
  "11-1": "Todos los Santos - Sierra del Perú (1 de noviembre)",
  "12-8": "Inmaculada Concepción - Ayacucho (8 de diciembre)",
  "12-25": "Navidad Andina - Toda la Sierra (25 de diciembre)"
};

const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const eventInfo = document.getElementById("eventInfo");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function renderCalendar(month, year) {
  calendar.innerHTML = "";
  monthYear.textContent = months[month] + " " + year;

  let firstDay = new Date(year, month, 1).getDay();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  
  let start = firstDay === 0 ? 6 : firstDay - 1;

 
  for (let i = 0; i < start; i++) {
    let empty = document.createElement("div");
    empty.classList.add("empty");
    calendar.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    let cell = document.createElement("div");
    cell.classList.add("day");
    cell.textContent = day;

    let key = (month + 1) + "-" + day;
    if (events[key]) {
      cell.classList.add("event");
      cell.addEventListener("click", function () {
        eventInfo.textContent = "🎉 " + events[key];
      });
    } else {
      cell.addEventListener("click", function () {
        eventInfo.textContent = "📅 No hay festividades el " + day + " de " + months[month];
      });
    }

    calendar.appendChild(cell);
  }
}

document.getElementById("prevMonth").addEventListener("click", function () {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

document.getElementById("nextMonth").addEventListener("click", function () {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

renderCalendar(currentMonth, currentYear);

let imagenes = [
  "cajamarca.jpg",
  "ayacucho.jpg",
  "junin1.jpg",
  "puno1.jpg",
  "apurimac.jpg",
  "huancavelica.jpg",
  "huanuco.jpg",
  "pasco1.jpg",
  "puno.jpg"
];

let indice = 0; 

let img = document.getElementById("imagen");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");


function mostrarImagen() {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = imagenes[indice];
    img.style.opacity = 1;
  }, 300);
}


btnPrev.addEventListener("click", function() {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
});


btnNext.addEventListener("click", function() {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
});

setInterval(function() {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
}, 5000);

//NO OLVIDAR PONER PUNTO Y COMA!!!