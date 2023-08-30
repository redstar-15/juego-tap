let puntos1 = 0;
let puntos2 = 0;
let valorInput = 0;
let tamanobarra1 = 10
let tamanobarra2 = 10
const barra1 = document.querySelector(".barrita1");
const barra2 = document.querySelector(".barrita2");
let reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", reinicio);
let punto_total = document.getElementById("cantidad_puntos")
let guardarPuntosBoton = document.getElementById("guardar_puntos")
guardarPuntosBoton.addEventListener("click", puntosMaximos)
let mensaje_ganador = document.getElementById("ganador");
let jugador1 = document.getElementById("jugador1");
let jugador2 = document.getElementById("jugador2");
document.addEventListener("keyup", function (event) {
  if (valorInput >= 1) {
    setTimeout(function () {

    })
    juego(event.key);
  }
});


function juego(tecla) {
  if (tecla === "d" || tecla === "D") {
    if (puntos1 < valorInput) {
      puntos1 += 1
      tamanobarra1 = tamanobarra1 + 20;
      console.log(tamanobarra1)
      barra1.style.width = `${tamanobarra1}px`;
    }
    if (puntos2 > 0) {
      puntos2 -= 1
      tamanobarra2 = tamanobarra2 - 20;
      barra2.style.width = `${tamanobarra2}px`;
    }
    jugador1.innerHTML = puntos1;
    jugador2.innerHTML = puntos2;
  } else if (tecla === "k" || tecla === "K") {
    if (puntos2 < valorInput) {
      puntos2 += 1
      tamanobarra2 = tamanobarra2 + 20
      barra2.style.width = `${tamanobarra2}px`;
    }
    if (puntos1 > 0) {
      puntos1 -= 1
      tamanobarra1 = tamanobarra1 - 20
      barra1.style.width = `${tamanobarra1}px`;
    }
    jugador2.innerHTML = puntos2;
    jugador1.innerHTML = puntos1;
  }
  ganador();
};

function ganador() {
  if (puntos1 >= valorInput) {
    mensaje_ganador.innerHTML = "gana el jugador 1";
  } else if (puntos2 >= valorInput) {
    mensaje_ganador.innerHTML = "gana el jugador 2";
  }
};

function puntosMaximos(event) {
  valorInput = punto_total.value
};

function reinicio() {
  location.reload();
}