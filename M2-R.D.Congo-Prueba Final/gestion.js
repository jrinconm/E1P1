"use strict";
// Recorre un objeto para crear una fila
// Si valor es true, quiero los valores del objeto
function creaFila(objeto,tipoCelda,valor){
    let fila = document.createElement("tr");
    for(const propiedad in objeto){
        let celda = document.createElement(tipoCelda);
        // Compruebo si es un objeto, si lo es, no lo muestro
        if(typeof objeto[propiedad] !== 'object'){
            if(valor){
                let textoCelda;
                    textoCelda = document.createTextNode(objeto[propiedad]);
                    celda.appendChild(textoCelda);
            } else {
                let textoCelda = document.createTextNode(propiedad);
                celda.appendChild(textoCelda);
            }
            celda.style.textTransform = "capitalize";
            fila.appendChild(celda);
        } else {
            //fila=creaFila(objeto[propiedad],tipoCelda,valor);
        }
    }
    return fila
}
function creaFilaObjeto(objeto,tipoCelda,valor){
    let fila = document.createElement("tr");
    for(const propiedad in objeto){
        let celda = document.createElement(tipoCelda);
        // Compruebo si es un objeto, si lo es, no hago nada
        // Ya se imprimirá en una proxima ronda
        if(valor){
            let textoCelda;
                textoCelda = document.createTextNode(objeto[propiedad]);
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
    // La segunda fila son los valores. Indico true para que recoja los valores
    fila = creaFila(objeto,"td",true);
    cuerpoTabla.appendChild(fila);
    // Añado el cuerpo a la tabla
    tabla.appendChild(cuerpoTabla);
    // Devuelvo la tabla
    return tabla;
}
function creaTablaObjeto(objetos){
    // Creo una tabla
    let tabla=document.createElement("table");
    let cuerpoTabla=document.createElement("tbody");
    // La primera fila es la cabecera
    let filaObjeto = creaFilaObjeto(objetos[0],"th");
    cuerpoTabla.appendChild(filaObjeto);
    for(let objeto in objetos){
        cuerpoTabla.appendChild(creaFilaObjeto(objetos[objeto],"td",true));
    }
    tabla.appendChild(cuerpoTabla);
    return tabla;
}
function creaTablaSinCabecera(objeto){
    // Creo una tabla
    let tabla=document.createElement("table");
    let cuerpoTabla=document.createElement("tbody");
    // La segunda fila son los valores. Indico true para que recoja los valores
    let fila = creaFila(objeto,"td",true);
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
    insertaTabla(objeto,document.getElementById("visualizacion"))
}
function insertaTabla(objeto,div){
    let tabla=creaTabla(objeto);
    div.appendChild(tabla);
}
function addPaciente(){
    hospital.personal[0].addPaciente("Jose","Infarto");
    muestraDatos();
}
function cargaDatos(){
    let hospital=new Hospital("El consuelo","Valencia","Pepe");
    hospital.addPersonal(new Personal("Pepe","medico"))
    hospital.addPersonal(new Personal("Juan","celador"))
    hospital.addPersonal(new Personal("Jose","enfermero"))
    hospital.personal[0].addPaciente("Jose","Infarto");
    hospital.personal[1].addPaciente("Jose2","Infarto2");
    return hospital;
}
function muestraDatos(){   
    cargaDatos(hospital);
    document.body.innerHTML="";
    let div = document.createElement("div");
    div.setAttribute("id", "visualizacion");
    document.body.appendChild(div);
    let boton = document.createElement("button");
    //boton.setAttribute("name", "Add");
    document.body.appendChild(boton);
    boton.innerText="Boton";
    boton.addEventListener("click",addPaciente,false);
    // Muestro la tabla con los datos del hospital
    insertaCabeceraYTabla("Hospital",hospital);
    // Muestro la tabla con los datos del personal
    let cabecera=creaCabecera("Personal");
    document.getElementById("visualizacion").appendChild(cabecera);
    let tabla=creaTablaObjeto(hospital.personal);
    document.getElementById("visualizacion").appendChild(tabla);
    // Muestro la tabla con los datos de los pacientes

//   insertaCabeceraYTabla("Pacientes",paciente1);
    document.getElementById("visualizacion").style = "overflow-x:auto";
}
let hospital=cargaDatos();
window.onload=muestraDatos;
//document.getElementById("Add").addEventListener("click",addPaciente,false);
