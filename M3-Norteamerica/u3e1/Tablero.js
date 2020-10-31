"use strict";
function creaImg(carta){
    let imagen = document.createElement("img");
    imagen.src=carta.imagen;
}
function jugar(partida){
        // Genero las cartas necesarias
        partida.generaCartas();
        // Muestro las cartas
        partida.muestraCartas();
        //if(finPartida()){
        //   console.log("Se acabo")
        //}
}
let partida=new Partida(4);
window.onload=jugar;
function muestraCartas(){
    console.log(this.cartas);
    let div = document.createElement("div");
    div.setAttribute("id", "Juego");
    document.body.append(div);
    for(const idCarta of this.cartas){
        console.log(idCarta);
        let imagen=creaImg(idCarta.imagen);
        console.log(imagen);
        div.append(imagen);
    }
}
