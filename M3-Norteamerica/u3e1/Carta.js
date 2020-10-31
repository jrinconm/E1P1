"use strict";
class Carta {
    // Los datos serán el nombre, la especialidad, y hospital al qeu esta asignado
    constructor(nombre,imagen){        
        this.nombre=nombre;
        this.volteada=false;
        this.caratula=imagen;
        this.reverso="Imagenes/Reverso.png"
        this.imagen=this.reverso;
    }
    voltea(){
        this.volteada=!this.volteada;
        if(volteada){
            this.imagen=this.caratula;
        } else {
            this.imagen=this.reverso;
        }
    }    
}