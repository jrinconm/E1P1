"use strict";
function creaImg(carta){
    let ImagenCarta = document.createElement("img");
    ImagenCarta.setAttribute('class', "carta");
    ImagenCarta.src=carta;
    return ImagenCarta;
}
function jugar(){
    let partida=new Partida(4);
    // Genero las cartas necesarias
    partida.generaCartas();
    // Muestro las cartas
    partida.muestraCartas();
    //if(finPartida()){
    //   console.log("Se acabo")
    //}
}

window.onload=jugar;

