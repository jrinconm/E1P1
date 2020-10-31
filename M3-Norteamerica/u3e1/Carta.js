"use strict";
class Carta {
    // Los datos serán el nombre, la especialidad, y hospital al qeu esta asignado
    constructor(nombre,imagen){        
        this.nombre=nombre;
        this.imagen=imagen;
        this.volteada=false;
    }
    voltea(){
        this.volteada=!this.volteada;
    }    
}