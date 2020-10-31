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
    // Vuelvo a permitir hacer click sobre la carta
    document.getElementById(carta1).addEventListener("click",hacerclick,false);
    voltea(carta1);
    voltea(carta2);
    partida.pareja=[];
    partida.contador=0;
}
// Ejecuta una funcion basada en la lista de funciones de window
function hacerclick(ev){
    if (partida.contador<1){
        voltea(ev.target.id);
        partida.volteada=ev.target.id;
        // No permito que se le vuelva a hacer click
        document.getElementById(ev.target.id).removeEventListener("click",hacerclick,false);
    // Si ya estan las 2 cartas, compruebo el resultado
    } else if(partida.contador<2){
        let idCarta=ev.target.id;
        voltea(idCarta);
        if(partida.compruebaPareja()){
            // Si es correcto, pongo borde y reseteo contadores
            document.getElementById(idCarta).style.border="5px solid green";
            document.getElementById(partida.volteada).style.border="5px solid green";
            partida.pareja=[];
            partida.contador=0;
        } else {
            // Si no son iguales espero 3 segundos y ejecuto error cartas
            setTimeout("errorCartas(partida.volteada,"+idCarta+");",3000);
        }
    }      
}
function voltea(idCarta){
    partida.cartas[idCarta].voltea();
    document.getElementById(idCarta).src=partida.cartas[idCarta].imagen;
    partida.pareja.push(partida.cartas[idCarta]);
    if(partida.cartas[idCarta].volteada){
        partida.contador++;
    } else {
        partida.contador--;
    }    
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

