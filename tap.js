let puntos1 = 0;
let puntos2 = 0;
let valorInput = 0;
const barra1 = document.querySelector(".barrita1");
const barra2 = document.querySelector(".barrita2");
document.addEventListener("keyup", function(event){
    if (valorInput >= 1){
        juego(event.key);
    }
});

let reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", reinicio);
let punto_total = document.getElementById("cantidad_puntos")
let guardarPuntosBoton= document.getElementById("guardar_puntos")
guardarPuntosBoton.addEventListener("click",puntosMaximos)
let mensaje_ganador = document.getElementById("ganador");
let jugador1 = document.getElementById("jugador1");
let jugador2 = document.getElementById("jugador2");

function juego(tecla){
    if (tecla  === "d" || tecla === "D"){
        if (puntos1 < valorInput){
            puntos1 += 1
            barra1.style.width = `${parseInt(barra1.offsetWidth) + 20}px`;
        }
        if (puntos2 > 0 ){
            puntos2 -= 1
            barra2.style.width = `${parseInt(barra2.offsetWidth)- 20}px`;
        }
        jugador1.innerHTML = puntos1;
        jugador2.innerHTML = puntos2;
    }else if (tecla === "k" || tecla === "K"){
        if (puntos2 < valorInput){
            puntos2 += 1
            barra2.style.width = `${parseInt(barra2.offsetWidth)+ 20}px`;
        }
        if (puntos1 > 0 ){
            puntos1 -= 1
            barra1.style.width = `${parseInt(barra1.offsetWidth) - 20}px`;
        } 
        jugador2.innerHTML = puntos2;
        jugador1.innerHTML = puntos1;
    }
    ganador();
};

function ganador(){
    if (puntos1 >=  valorInput){
        mensaje_ganador.innerHTML = "gana el jugador 1";
    } else if (puntos2 >= valorInput){
        mensaje_ganador.innerHTML = "gana el jugador 2";
    } 
};

function puntosMaximos(event){
    valorInput = punto_total.value
};

function reinicio(){
    location.reload();
}