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
            //celda.style.textTransform = "capitalize";
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
    let filaObjeto = creaFila(objetos[0],"th");
    cuerpoTabla.appendChild(filaObjeto);
    for(let objeto in objetos){
        cuerpoTabla.appendChild(creaFila(objetos[objeto],"td",true));
        //cuerpoTabla.appendChild(creaFilaObjeto(objetos[objeto],"td",true));
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
// Funcion que crea una cabecera H1 con "texto" y la deja lista para añadir
function creaCabecera(texto){
    let cabecera = document.createElement("h1");
    let textoCabecera = document.createTextNode(texto);
    cabecera.appendChild(textoCabecera);
    return cabecera;
}
/*
function insertaCabeceraYTabla(nombreObjeto,objeto){
    let cabecera = creaCabecera(nombreObjeto);
    document.getElementById("visualizacion").appendChild(cabecera);
    insertaTabla(objeto,document.getElementById("visualizacion"))
}
function insertaTabla(objeto,div){
    let tabla=creaTabla(objeto);
    div.appendChild(tabla);
}
*/
function click(ev){
    // Es sucio, pero me permite llamar una funcion por el nombre de la lista de funciones de la ventana
    window[ev.target.name]();
}
function pacienteAlta(){
    hospitales[0].personal[0].addPaciente("Jose","Infarto");
}
function personalAlta(){
    hospitales[0].addPersonal(new Personal("Pepe","medico"))
}
function hospitalAlta(){
    hospitales.push(new Hospital("El consuelo","Valencia","Pepe"));
}
function hospitalMostrar(){
    if (!document.getElementById("visualizacion"+"hospital")){
        let div = document.createElement("div");
        div.setAttribute("id", "visualizacion"+"hospital");
        document.getElementById("hospital").append(div);
    }
    document.getElementById("visualizacion"+"hospital").innerHTML="";
    let tabla=creaTablaObjeto(hospitales);
    document.getElementById("visualizacion"+"hospital").append(tabla);    
}
function personalMostrar(){
    if (!document.getElementById("visualizacion"+"personal")){
        let div = document.createElement("div");
        div.setAttribute("id", "visualizacion"+"personal");
        document.getElementById("personal").append(div);
    }
    document.getElementById("visualizacion"+"personal").innerHTML="";
    for (const hospital in hospitales){
        let elemento=document.getElementById("visualizacion"+"personal");
        let cabecera = document.createElement("h2");
        let textoCabecera = document.createTextNode("Hospital: " + hospitales[hospital].nombre + " tiene el siguiente personal:");
        elemento.appendChild(textoCabecera);
        let tabla=creaTablaObjeto(hospitales[hospital].personal)
        elemento.append(tabla); 
    }
    //let tabla=creaTablaObjeto(personal);
    //document.getElementById("visualizacion"+"personal").append(tabla);    
}
function cargaDatos(){
    let hospitales=[];
    addhospital(hospitales);
    let hospital=hospitales[0];
    return hospitales;
}
function creaboton(tipo, elemento){
    let boton = document.createElement("button");
    boton.setAttribute("name", elemento+tipo); 
    boton.setAttribute("class", tipo); 
    document.getElementById(elemento).appendChild(boton);
    //document.body.appendChild(boton);
    boton.innerText=tipo + " " +elemento;
    boton.addEventListener("click",click,false);
}
function muestraDatos(){  
    //document.body.innerHTML="";
    //document.body.appendChild(div);
    let tipos=["Alta","Modificar","Baja","Mostrar"];
    let clases=["hospital","personal","paciente"]
    for(const clase in clases){
        let div = document.createElement("div");
        div.setAttribute("id", clases[clase]);
        document.body.appendChild(div);
        let cabecera=creaCabecera(clases[clase]);
        document.getElementById(clases[clase]).appendChild(cabecera);
        for(const tipo in tipos){
            creaboton(tipos[tipo],clases[clase])
        }
    }
}
//let hospitales=cargaDatos();
//let hospital=hospitales[0];
let hospitales=[];
window.onload=muestraDatos;
