"use strict";
class Hospital {
    // Los datos serán el nombre, la especialidad, y hospital al qeu esta asignado
    constructor(nombre,localidad,responsable){        
        this.nombre=nombre;
        this.localidad=localidad;
        // No pertenece al personal
        this.responsable=responsable;
        this.personal=[]
    }
    addPersonal(persona){
        this.personal.push(persona);
    }    
    eliminaPersonal(persona){
        indice=this.pacientes.indexOf(persona);
        console.log(indice);
    }
}