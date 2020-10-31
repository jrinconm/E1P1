"use strict";
// Funcion para ejecutar cuando se hace click
// Ejecuta una funcion basada en la lista de funciones de window
function hacerclick(ev){
    // Es sucio, pero me permite llamar una funcion por el nombre de la lista de funciones de la ventana
    window[ev.target.name]();
}
// Funcion al llamar a submit del formulacion
function hacersubmit(ev){
    ev.preventDefault();
    let formulario=ev.target.parentNode;
    if(compruebaFormulario(formulario)){       ;
        // Es sucio, pero me permite llamar una funcion por el nombre de la lista de funciones de la ventana
        window["dar"+ev.target.className](ev.target.parentNode);
    }
    return false;
}
//
function refrescaListaPersonal(){
    let hospital=document.getElementById("Hospital").selectedIndex;
    let select=document.getElementById("Personal");
    let personal=hospitales[hospital].personal;
    refrescaListaFormulario(select,personal);
}
function refrescaListaPacienteHospital(){
    //He cambiado el hospital, refresco la gente tambien
    refrescaListaPersonal();
    //refrescaListaPacientePersonal();
    let hospital=document.getElementById("Hospital").selectedIndex;
    let persona=document.getElementById("Personal").selectedIndex;
    let selectPersonal=document.getElementById("Personal");
    let selectPaciente=document.getElementById("Paciente");
    let personal=hospitales[hospital].personal;
    //refrescaListaFormulario(selectPersonal,personal); 
    // Por si no tiene personal el hospital
    if(hospitales[hospital].personal.length!=0){
        // Por si no tiene pacientes el personal elegido
        refrescaListaFormulario(selectPersonal,personal);
        refrescaListaPersonal();
        if(hospitales[hospital].personal[persona].pacientes.length!=0){
            refrescaListaFormulario(selectPaciente,personal);
        } else {
            refrescaListaFormulario(selectPaciente,[],true);
        }
    } else {
        refrescaListaFormulario(selectPersonal,[],true);
        refrescaListaFormulario(selectPaciente,[],true);
    } 
}
function refrescaListaPacientePersonal(){
    let hospital=document.getElementById("Hospital").selectedIndex;
    let persona=document.getElementById("Personal").selectedIndex;
    let select=document.getElementById("Paciente");
    let pacientes=hospitales[hospital].personal[persona].pacientes;
    refrescaListaFormulario(select,pacientes);
}
//Grupo botones Alta
//Funcion al hacer click en Alta paciente
function pacienteAlta(){
    // Borro y creo el div de paciente
    creaBorraDiv("paciente");
    //Lista de entry tipo texto
    let propiedades=["Nombre","Enfermedad"];
    creaFormulario(propiedades,"visualizacion"+"paciente");  
    // Añado listener para cuando se cambia de hospital
    document.getElementById("Hospital").addEventListener("change",refrescaListaPersonal,false);  
}
//Funcion al hacer click en Alta personal
function personalAlta(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");
    //Lista de entry tipo texto
    let propiedades=["Nombre"];
    creaFormulario(propiedades,"visualizacion"+"personal");    
}
//Funcion al hacer click en Alta hospital
function hospitalAlta(){
    creaBorraDiv("hospital");
    //Lista de entry tipo texto
    let propiedades=["Nombre","Localidad","Responsable"];
    creaFormulario(propiedades,"visualizacion"+"hospital");       
}
//Grupo botones mostrar
//Funcion al hacer click en Mostrar paciente
function pacienteMostrar(){
    // Borro y creo el div de personal
    creaBorraDiv("paciente");    
    // Hago un bucle para revisar el personal de cada hospital
    for (const hospital in hospitales){
        let elemento=document.getElementById("visualizacion"+"paciente");
        let texto="El hospital: " + hospitales[hospital].nombre + " tiene el siguiente personal:";
        let cabecera = creaCabecera(texto,"h2");
        elemento.append(cabecera);
        // Hago un bucle para revisar el personal
        for (const persona in hospitales[hospital].personal){
            let texto="El personal: " + hospitales[hospital].personal[persona].nombre + " tiene los siguientes pacientes:";
            let cabecera2 = creaCabecera(texto,"h3");
            elemento.append(cabecera2);
            let tabla=creaTablaObjeto(hospitales[hospital].personal[persona].pacientes)
            elemento.append(tabla); 
        }
    } 
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
    // Borro y creo el div de hospital
    creaBorraDiv("hospital");
    let tabla=creaTablaObjeto(hospitales,"visualizacion"+"hospital");  
    document.getElementById("visualizacion"+"hospital").appendChild(tabla);      
}
//Grupo botones Baja
//Funcion al hacer click en Baja paciente
function pacienteBaja(){
    // Borro y creo el div de paciente
    creaBorraDiv("paciente");    
    creaFormulario([],"visualizacion"+"paciente","Baja");  
    // Refrescco en cascada las listas
    document.getElementById("Hospital").addEventListener("change",refrescaListaPersonal,false);
    document.getElementById("Hospital").addEventListener("change",refrescaListaPacienteHospital,false);
    document.getElementById("Personal").addEventListener("change",refrescaListaPacientePersonal,false);        
}
//Funcion al hacer click en Baja personal
function personalBaja(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");   
    creaFormulario([],"visualizacion"+"personal","Baja");  
    document.getElementById("Hospital").addEventListener("change",refrescaListaPersonal,false);         
}
//Funcion al hacer click en Baja hospital
function hospitalBaja(){
    // Borro y creo el div de hospital
    creaBorraDiv("hospital");  
    creaFormulario([],"visualizacion"+"hospital","Baja");      
}
//Grupo botones Modificar
//Funcion al hacer click en Modificar paciente
function pacienteModificar(){
    // Borro y creo el div de paciente
    creaBorraDiv("paciente");    
    creaFormulario([],"visualizacion"+"paciente","Modificar");  
    document.getElementById("Hospital").addEventListener("change",refrescaListaPersonal,false);
    document.getElementById("Hospital").addEventListener("change",refrescaListaPacienteHospital,false);
    document.getElementById("Personal").addEventListener("change",refrescaListaPacientePersonal,false);        
}
//Funcion al hacer click en Modificar personal
function personalModificar(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");    
    creaFormulario([],"visualizacion"+"personal","Modificar"); 
    document.getElementById("Hospital").addEventListener("change",refrescaListaPersonal,false);         
}
//Funcion al hacer click en Modificar hospital
function hospitalModificar(){
    // Borro y creo el div de hospital
    creaBorraDiv("hospital");   
    // Uso la misma seleccion que para borrar
    creaFormulario([],"visualizacion"+"hospital","Modificar");  
}
