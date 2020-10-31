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
    voltea(carta2);
    partida.pareja=[];
}
// Ejecuta una funcion basada en la lista de funciones de window
function hacerclick(ev){
    if (partida.contador<1){
        console.log("Contador = 1. Carta id: " + ev.target.id);
        voltea(ev.target.id);
        partida.volteada=ev.target.id;
    // Si ya estan las 2 cartas, compruebo el resultado
    } else if(partida.contador=2){
        console.log("Contador = 2. Carta id: " + ev.target.id);
        voltea(ev.target.id);
        if(partida.compruebaPareja()){
            console.log("Bien");
            partida.pareja=[];
        } else {
            console.log("Mal");
            errorCartas(partida.volteada,ev.target.id);
        }
    }      
}
function voltea(idCarta){
    partida.cartas[idCarta].voltea();
    document.getElementById(idCarta).src=partida.cartas[idCarta].imagen;
    partida.pareja.push(partida.cartas[idCarta]);
    // Doy la vuelta, sumo a contador
    if(partida.cartas[idCarta].volteada){
        partida.contador++;
    // Si la tapo, resto a contador
    } else {
        partida.contador--;
    }
}
function jugar(){
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
    let contador=0;
    for(const idCarta in partida.cartas){
        let img=creaImg(partida.cartas[idCarta],contador);
        document.getElementById("Juego").append(img);
        contador++;
    }
}
let partida=new Partida(4);
window.onload=jugar;

