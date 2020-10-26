"use strict";
// Funcion para ejecutar cuando se hace click
// Ejecuta una funcion basada en la lista de funciones de window
function click(ev){
    // Es sucio, pero me permite llamar una funcion por el nombre de la lista de funciones de la ventana
    window[ev.target.name]();
}
// Funcion al llamar a submit del formulacion
function submit(ev){
    ev.preventDefault();
    let formulario=ev.target.parentNode;
    if(compruebaFormulario(formulario)){        
        // Es sucio, pero me permite llamar una funcion por el nombre de la lista de funciones de la ventana
        window["darAlta"+ev.target.className](ev.target.parentNode);
    }
    return false;
}
//Grupo botones Alta
//Funcion al hacer click en Alta paciente
function pacienteAlta(){
    // Borro y creo el div de paciente
    creaBorraDiv("paciente");
    let propiedades=["Nombre","Enfermedad","Hospital","Personal"];
    creaFormulario(propiedades,"visualizacion"+"paciente");    
    //hospitales[0].personal[0].addPaciente(new Paciente("Jose","Infarto"));
}
//Funcion al hacer click en Alta personal
function personalAlta(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");
    let propiedades=["Nombre"];
    creaFormulario(propiedades,"visualizacion"+"personal");    
}
//Funcion al hacer click en Alta hospital
function hospitalAlta(){
    creaBorraDiv("hospital");
    let propiedades=["Nombre","Localidad","Responsable"];
    creaFormulario(propiedades,"visualizacion"+"hospital");       
}
//Grupo botones mostrar
//Funcion al hacer click en Mostrar paciente
function pacienteMostrar(){
    // Borro y creo el div de personal
    creaBorraDiv("paciente");    
}
//Funcion al hacer click en Mostrar personal
function personalMostrar(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");
    // Hago un bucle para revisar el personal de cada hospital
    for (const hospital in hospitales){
        let elemento=document.getElementById("visualizacion"+"personal");
        let texto="El hospital: " + hospitales[hospital].nombre + " tiene el siguiente personal:";
        let cabecera = creaCabecera(texto,"h2");
        elemento.append(cabecera);
        let tabla=creaTablaObjeto(hospitales[hospital].personal)
        elemento.append(tabla); 
    } 
}
//Funcion al hacer click en Mostrar hospital
function hospitalMostrar(){
    // Borro y creo el div de personal
    creaBorraDiv("hospital");
    let tabla=creaTablaObjeto(hospitales,"visualizacion"+"hospital");  
    document.getElementById("visualizacion"+"hospital").appendChild(tabla);      
}
//Grupo botones Baja
//Funcion al hacer click en Baja paciente
function pacienteBaja(){
    // Borro y creo el div de paciente
    creaBorraDiv("paciente");    
}
//Funcion al hacer click en Baja personal
function pacienteBaja(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");    
}
//Funcion al hacer click en Baja hospital
function pacienteBaja(){
    // Borro y creo el div de hospital
    creaBorraDiv("hospital");    
}
//Grupo botones Modificar
//Funcion al hacer click en Modificar paciente
function pacienteModificar(){
    // Borro y creo el div de paciente
    creaBorraDiv("paciente");    
}
//Funcion al hacer click en Modificar personal
function pacienteModificar(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");    
}
//Funcion al hacer click en Modificar hospital
function pacienteModificar(){
    // Borro y creo el div de hospital
    creaBorraDiv("hospital");    
}
