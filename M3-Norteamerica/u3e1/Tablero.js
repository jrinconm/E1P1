"use strict";
function creaImg(carta,id){
    let img=carta.imagen;
    let ImagenCarta = document.createElement("img");
    ImagenCarta.setAttribute('class', "carta");
    ImagenCarta.setAttribute('id', id);
    ImagenCarta.src=img;
    ImagenCarta.addEventListener("click",hacerclick,false);
    return ImagenCarta;
}
function errorCartas(carta1,carta2){
    console.log("Dando vuelta a las cartas " + carta1 + " y " + carta2);
    voltea(carta1);
    console.log(partida.contador);
    voltea(carta2);
    console.log(partida.contador);
    partida.pareja=[];
    partida.contador=0;
}
// Ejecuta una funcion basada en la lista de funciones de window
function hacerclick(ev){
    if (partida.contador<1){
        voltea(ev.target.id);
        partida.volteada=ev.target.id;
    // Si ya estan las 2 cartas, compruebo el resultado
    } else if(partida.contador=2){
        voltea(ev.target.id);
        if(partida.compruebaPareja()){
            partida.pareja=[];
            partida.contador=0;
        } else {
            errorCartas(partida.volteada,ev.target.id);
        }
    }      
}
function voltea(idCarta){
    partida.cartas[idCarta].voltea();
    document.getElementById(idCarta).src=partida.cartas[idCarta].imagen;
    partida.pareja.push(partida.cartas[idCarta]);
    partida.contador++;
}
function jugar(){
    // Genero las cartas necesarias
    partida.generaCartas();
    // Muestro las cartas
    partida.jugar();
}
function muestraCartas(partida){
    let div = document.createElement("div");
    div.setAttribute("id", "Juego");
    document.body.append(div);
    let contador=0;
    for(const idCarta in partida.cartas){
        let img=creaImg(partida.cartas[idCarta],contador);
        document.getElementById("Juego").append(img);
        contador++;
    }
}
let partida=new Partida(4);
window.onload=jugar;

