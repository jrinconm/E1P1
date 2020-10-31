"use strict";
function creaImg(carta,id){
    let img=carta.imagen;
    let ImagenCarta = document.createElement("img");
    ImagenCarta.setAttribute('class', "carta");
    ImagenCarta.setAttribute('id', id);
    ImagenCarta.src=img;
    //Click a una carta
    ImagenCarta.addEventListener("click",hacerclick,false);
    // Al hacer click 
    ImagenCarta.addEventListener("click",hacerclickEncima,false);
    // Al pasar por encima hago la carta transparente
    ImagenCarta.addEventListener("mouseover",porEncima,false);
    // Al salir de encima hago la carta sin transparencia
    ImagenCarta.addEventListener("mouseout",porFuera,false);
    // Cada vez que me mueva voy a actualizar los contadores
    // No es necesario, pero puedo hacerlo...
    ImagenCarta.addEventListener("mouseover",actualizacontador,false);
    ImagenCarta.addEventListener("mouseout",actualizacontador,false);    
    return ImagenCarta;
}
function actualizacontador(){
    document.getElementById("Aciertos").innerHTML="Aciertos: "+partida.aciertos;
    document.getElementById("Fallos").innerHTML="Fallos: "+partida.fallos;
}
function errorCartas(carta1,carta2){
    // Vuelvo a permitir hacer click sobre la carta
    document.getElementById(carta1).addEventListener("click",hacerclick,false);
    voltea(carta1);
    voltea(carta2);
    partida.pareja=[];
    partida.contador=0;
    partida.fallos++;
    actualizacontador();  
}
function acierto(carta1,carta2){
    // Quito todos los listeners
    document.getElementById(carta1).removeEventListener("click",hacerclick,false);
    document.getElementById(carta1).removeEventListener("click",hacerclick,false);
    document.getElementById(carta1).removeEventListener("mouseover",porEncima,false);
    document.getElementById(carta1).removeEventListener("mouseout",porFuera,false);
    document.getElementById(carta2).removeEventListener("click",hacerclick,false);
    document.getElementById(carta2).removeEventListener("click",hacerclick,false);
    document.getElementById(carta2).removeEventListener("mouseover",porEncima,false);
    document.getElementById(carta2).removeEventListener("mouseout",porFuera,false);
    document.getElementById(carta1).style.border="5px solid green";
    document.getElementById(carta2).style.border="5px solid green";
    partida.pareja=[];
    partida.contador=0;
    partida.aciertos++;
    actualizacontador();  
}
// Al pasar por encima hago la imagen transparente y ligeramente mas grande
function porEncima(ev){
    document.getElementById(ev.target.id).style.opacity="0.2";
    document.getElementById(ev.target.id).style.height="20%";
    document.getElementById(ev.target.id).style.width="20%";
}
// Al salir de encima hago la imagen opaca y la devuelvo a su tamaño
function porFuera(ev){
    document.getElementById(ev.target.id).style.opacity="1";
    document.getElementById(ev.target.id).style.height="19%";
    document.getElementById(ev.target.id).style.width="19%";
}
// Al hacer click lo dejo como estaba tambien
function hacerclickEncima(ev){
    document.getElementById(ev.target.id).style.opacity="1";
    document.getElementById(ev.target.id).style.height="19%";
    document.getElementById(ev.target.id).style.width="19%";
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
            acierto(idCarta,partida.volteada)
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
    actualizacontador();
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

