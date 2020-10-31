"use strict";
class Partida {
    // Inicializo los valores
    constructor (parejas){
        // Contador de aciertos
        this.aciertos=0;
        this.fallos=0;  
        this.parejas=parejas;
        this.cartas=[];      
    }
    // Metodo que comprueba si has acabado de voltear todas la cartas
    finPartida(){
        if(this.aciertos === this.cartas.length/2) return true;
        else return false;
    }
    generaCartas(){
        // Creo las parejas de cartas
        for(let pareja=0;pareja <= this.parejas; pareja++){
            // Tengo las cartas numeradas del 1 al 5 en Imagenes
            this.cartas.push(new Carta(pareja,"Imagenes/"+(pareja+1)+".png"));
            this.cartas.push(new Carta(pareja,"Imagenes/"+(pareja+1)+".png"));
        }
    }
    jugar(){

    }
}