"use strict";
class Personal {
    // Los datos serán el nombre, la especialidad, y hospital al qeu esta asignado
    constructor(nombre,especialidad){        
        this.nombre=nombre;
        // Solo puede ser de 3 tipos la especialidad
        this.especialidad=especialidad;
        this.pacientes=[];
    }
    addPaciente(paciente){
        this.pacientes.push(paciente);
    }
    eliminaPaciente(paciente){
        indice=this.pacientes.indexOf(paciente);
        console.log(indice);
    }
}