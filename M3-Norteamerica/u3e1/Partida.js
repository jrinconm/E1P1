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
    /* muestraCartas(){
        let div = document.createElement("div");
        div.setAttribute("id", "Juego");
        document.body.append(div);
        for(const idCarta of this.cartas){
            let img=creaImg(idCarta.imagen);
            document.getElementById("Juego").append(img);
        }
    }*/ 
    jugar(){
        this.cambiaOpciones();
        muestraCartas(this);        
    }
}