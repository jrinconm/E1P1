"use strict";
class Partida {
    // Inicializo los valores
    constructor (){
        // Contador de aciertos
        this.aciertos=0;
        this.fallos=0;  
        this.cartas=[];      
    }
    // Metodo que comprueba si has ganado o perdido
    finPartida(){
        if(this.aciertos === this.cartas.length/2) return true;
        else return false;
    }
    jugar(){
        // Creo las 4 parejas de cartas
        for(let pareja=0;pareja <= 4; pareja++){
            // Tengo las cartas numeradas del 1 al 5 en Imagenes
            this.cartas.push(new Carta(pareja,"Imagenes/"+(pareja+1)+".png"));
        }
        this.resultados();
    }
}