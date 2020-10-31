"use strict";
class Carta {
    constructor(nombre,imagen){        
        // Nombre para identificar la carta con su pareja
        this.nombre=nombre;
        // Si está boca arriba para mostrar la caratula o el reverso
        this.volteada=false;
        //Paso en el constructor que imagen va a ser
        this.caratula=imagen;
        // El reverso es una imagen fija
        this.reverso="Imagenes/Reverso.png"
        // Por defecto se muestra el reverso
        this.imagen=this.reverso;
        // Por defecto no está emparejada
        this.emparejada=false;
    }
    // Muestra el estado de la carta;
    voltea(){
        this.volteada=!this.volteada;
        if(this.volteada){
            this.imagen=this.caratula;
        } else {
            this.imagen=this.reverso;
        }
    }    
}