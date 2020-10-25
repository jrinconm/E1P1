"use strict";
// Recorre un objeto para crear una fila
// Si valor es true, quiero los valores del objeto
function creaFila(objeto,tipoCelda,valor){
    let fila = document.createElement("tr");
    for(const propiedad in objeto){
        let celda = document.createElement(tipoCelda);
        if(valor){
            let textoCelda;
            // Compruebo si es otro objeto, si lo es, muestro el nombre
            if(typeof objeto[propiedad] === 'object'){
                textoCelda = document.createTextNode(objeto[propiedad]["nombre"]);
            } else {
                textoCelda = document.createTextNode(objeto[propiedad]);
            }
            celda.appendChild(textoCelda);
            celda.style.textTransform = "capitalize";
            fila.appendChild(celda);
        } else {
            let textoCelda = document.createTextNode(propiedad);
            celda.appendChild(textoCelda);
            celda.style.textTransform = "capitalize";
            fila.appendChild(celda);
        }
    }
    return fila
}
function creaTabla(objeto){
    // Creo una tabla
    let tabla=document.createElement("table");
    let cuerpoTabla=document.createElement("tbody");
    // La primera fila es la cabecera
    let fila = creaFila(objeto,"th");
    cuerpoTabla.appendChild(fila);
    // La seunda fila son los valores. Indico true para que recoja los valores
    fila = creaFila(objeto,"td",true);
    cuerpoTabla.appendChild(fila);
    // Añado el cuerpo a la tabla
    tabla.appendChild(cuerpoTabla);
    // Devuelvo la tabla
    return tabla;
}
function creaCabecera(texto){
    let cabecera = document.createElement("h1");
    let textoCabecera = document.createTextNode(texto);
    cabecera.appendChild(textoCabecera);
    return cabecera;
}
function insertaCabeceraYTabla(nombreObjeto,objeto){
    let cabecera = creaCabecera(nombreObjeto);
    document.getElementById("visualizacion").appendChild(cabecera);
    let tabla=creaTabla(objeto);
    document.getElementById("visualizacion").appendChild(tabla);
}
function muestraDatos(){
    insertaCabeceraYTabla("Hospital",hospital);
    insertaCabeceraYTabla("Personal",personal1);
    insertaCabeceraYTabla("Pacientes",paciente1);
    document.getElementById("visualizacion").style = "overflow-x:auto";
}
let hospital=new Hospital("El consuelo","Valencia","Pepe");
let personal1=new Personal("Pepe","medico",hospital);
let paciente1=new Paciente("Jose","Infarto",personal1);
let personal2=new Personal("Pepe2","medico2",hospital);
let paciente2=new Paciente("Jose2","Infarto2",personal1);
window.onload=muestraDatos;
