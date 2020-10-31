"use strict";
class Partida {
    // Inicializo los valores
    constructor (parejas){
        // Contador de aciertos
        this.aciertos=0;
        this.fallos=0;  
        this.contador=0;
        this.parejas=parejas;
        this.pareja=[];
        this.cartas=[]; 
        this.volteada=undefined   ;
    }
    compruebaPareja(){
        if (this.pareja[0].nombre===this.pareja[1].nombre){
            return true;
        } else {
            return false;
        }
    }
    // Metodo que comprueba si has acabado de voltear todas la cartas
    finPartida(){
        if(this.aciertos === this.cartas.length/2) return true;
        else return false;
    }
    // Genera las cartas de 2 en 2
    generaCartas(){
        // Creo las parejas de cartas
        for(let pareja=0;pareja <= this.parejas; pareja++){
            // Tengo las cartas numeradas del 1 al 5 en Imagenes
            this.cartas.push(new Carta(pareja,"Imagenes/"+(pareja+1)+".png"));
            this.cartas.push(new Carta(pareja,"Imagenes/"+(pareja+1)+".png"));
        }
    }
    // Para que las partidas sean mas amenas, movemos las cartas
    cambiaOpciones(){
        let arrayIntercambio=[...this.cartas];
        let arrayTemporal=[];
        let cantidadOpciones=arrayIntercambio.length;
        for(let cont=0;cont<cantidadOpciones;cont++){
            let extraerOpcion=Math.floor(Math.random()*arrayIntercambio.length);
            arrayTemporal.push(arrayIntercambio[extraerOpcion]);
            arrayIntercambio.splice(extraerOpcion,1);
        }
        this.cartas = [...arrayTemporal];
    } 
    // Inicia el juego
    jugar(){
        this.cambiaOpciones();
        muestraCartas(this);        
    }
}