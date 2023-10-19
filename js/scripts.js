// querySelector

// .clase
// #id
const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elemento

heading.textContent = "Nuevo Heading"; //cambiar texto
heading.classList.add("nueva-clase"); //agregar clase
console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll(".navegacion a");
enlaces[0].textContent = "Nuevo Texto Para Enlace";
enlaces[0].href = "https://google.com"; // Cambiar hacia adonde te lleva el enlace
// enlaces[0].classList.remove('navegacion__enlace');

// getElementById

// const heading2 = document.getElementById('heading');
// console.log(heading2);

//Generar un nuevo enlace

const nuevoEnlace = document.createElement("A");

//Agregar el href
nuevoEnlace.href = "nuevo-enlace";

//  Agregar el texto
nuevoEnlace.textContent = "Tienda virtual";

//Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

//Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);
{
  /* <a href="nosotros.html" class="nuevo-enlace">Nosotros</a> */
}

console.log(nuevoEnlace);

//Generar codigo html
// se usa para validacion de formularios y dinamismo en la pagina

//Eventos

console.log(1);

window.addEventListener("load", imprimir);
window.onload = function() {
  console.log(3);
};

document.addEventListener("DOMContentLoaded", function() {
  // Solo espera que se descargue el HTML, no espera css ni imagenes
  console.log(4);
});

//Usualmente se usa este

function imprimir() {
  //Load espera a que el JS y los archivos que dependen del HTML esten listo
  console.log(2);
}

console.log(5);

window.onscroll = function(evento) {
  console.log(evento);
};

// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento) { // click load minusculas
//     console.log(evento.target);
//     evento.preventDefault();

//     // Validar un formulario

//     console.log('enviando formulario');
// });

//Eventos de los inputs y textarea
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");

const email = document.querySelector("#email");

const mensaje = document.querySelector("#mensaje");

const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);

email.addEventListener("input", leerTexto);

mensaje.addEventListener("input", leerTexto);

// El evento de subtmit

formulario.addEventListener("submit", function(evento) {
  evento.preventDefault();

  //Validar el formulario
  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", true);

    return; // corta la ejecucion del codigo
  }

  mostrarAlerta("Formulario Enviado con Exito");
});

function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 5000);
}

function leerTexto(e) {
  // console.log(e.target.value);

  datos[e.target.id] = e.target.value;

  // console.log(e.target);

  console.log(datos);
}
function mostrarError(mensaje) {
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("error");

  formulario.appendChild(error);

  //desaparezca
  setTimeout(() => {
    error.remove();
  }, 5000);
}
function mostrarMensaje(mensaje) {
  const msj = document.createElement("P");
  msj.textContent = mensaje;
  msj.classList.add("mensaje");
  formulario.appendChild(msj);

  setTimeout(() => {
    mensaje.remove();
  }, 5000);
}
