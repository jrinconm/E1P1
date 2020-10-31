"use strict";
function creaImg(carta){
    let img=carta.imagen;
    let ImagenCarta = document.createElement("img");
    ImagenCarta.setAttribute('class', "carta");
    ImagenCarta.setAttribute('id', carta.nombre);
    ImagenCarta.src=img;
    return ImagenCarta;
}
function jugar(){
    let partida=new Partida(4);
    // Genero las cartas necesarias
    partida.generaCartas();
    // Muestro las cartas
    partida.jugar();
    //partida.muestraCartas();
    //if(finPartida()){
    //   console.log("Se acabo")
    //}
}
function muestraCartas(partida){
    let div = document.createElement("div");
    div.setAttribute("id", "Juego");
    document.body.append(div);
    for(const idCarta in partida.cartas){
        let img=creaImg(partida.cartas[idCarta]);
        document.getElementById("Juego").append(img);
    }
}
window.onload=jugar;

