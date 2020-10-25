"use strict";
class Hospital {
    // Los datos serán el nombre, la especialidad, y hospital al qeu esta asignado
    constructor(nombre,localidad,responsable){        
        this.nombre=nombre;
        this.localidad=localidad;
        // No pertenece al personal
        this.responsable=responsable;
    }
}