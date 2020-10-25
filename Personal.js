"use strict";
class Personal {
    // Los datos serán el nombre, la especialidad, y hospital al qeu esta asignado
    constructor(nombre,especialidad,hospital){        
        this.nombre=nombre;
        // Solo puede ser de 3 tipos la especialidad
        this.especialidad=especialidad;
        this.hospital=hospital;
    }
}