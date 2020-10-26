"use strict";
// Funcion que comprueba los campos de un formulario
function compruebaFormulario(formulario){
    // Primero compruebo las listas
    //validaLista();
    // Compruebo los input de tipo text
    let campos=formulario.elements;    
    for(const campo in campos){
        if(campos[campo].type=="text"){
            if(campos[campo].value.length == 0){
                alert("Debes introducir "+campos[campo].name)
                campos[campo].focus();  
                //Devuelvo falso              
                return false;
            }
        }
    }
    // Si llego hasta aquí es que todo ha ido bien
    return true;
}
// Funcion que crea una entrada de formulario
function creaEntradaFormulario(nombre){
    let entrada = document.createElement("input"); 
    entrada.setAttribute("type", "text"); 
    entrada.setAttribute("name", nombre);
    entrada.setAttribute("id", nombre);
    entrada.setAttribute("class", "entradaTexto");
    return entrada;
}
function creaListaFormulario(nombre,listado){
    let entrada = document.createElement("select"); 
    entrada.setAttribute("name", nombre);
    entrada.setAttribute("id", nombre);
    entrada.setAttribute("class", "entradaLista");
    for(const opcion in listado){
        var item = document.createElement("option");
        item.text = listado[opcion].nombre;
        item.value = listado[opcion].nombre;
        entrada.add(item);
    }
    return entrada;
}
function darAltahospital(){
    let nombre=document.getElementById("Nombre").value;
    let localidad=document.getElementById("Localidad").value;
    let responsable=document.getElementById("Responsable").value;
    let hospital=new Hospital(nombre,localidad,responsable);
    hospitales.push(hospital);
}
function creaLabelFormulario(nombre){
    let label=document.createElement("label"); 
    label.innerText=nombre+": ";
    return label;
}
// Funcion que crea un formulario
function creaFormulario(objeto,div){
    let formulario = document.createElement("form");
    for(const propiedad in objeto){
        let label=creaLabelFormulario(objeto[propiedad]);
        formulario.appendChild(label);
        let entrada=creaEntradaFormulario(objeto[propiedad]);
        formulario.appendChild(entrada);
        let br = document.createElement("br"); 
        formulario.appendChild(br);  
    } 
    if (div=="visualizacion"+"personal"){
        let label=creaLabelFormulario("Hospital");
        formulario.appendChild(label);
        let entrada=creaListaFormulario("Hospital",hospitales);
        formulario.appendChild(entrada);
    }    
    let enviar = document.createElement("input");
    enviar.setAttribute('type',"submit");
    enviar.setAttribute('value',"Submit");
    // Elimino visualizacion del texto div para que se quede solo la clase
    enviar.setAttribute('class',div.replace('visualizacion',''));
    enviar.addEventListener("click",submit,false);
    formulario.appendChild(enviar);
    document.getElementById(div).appendChild(formulario);     
}
// Funcion que crea una cabecera (por defecto H1) con "texto" y la deja lista para añadir
function creaCabecera(texto,tipo="h1"){
    let cabecera = document.createElement(tipo);
    let textoCabecera = document.createTextNode(texto);
    cabecera.appendChild(textoCabecera);
    return cabecera;
}
// Inicializa el div que muestra un elemento (las clases)
function creaBorraDiv(elemento){
    // Si no existe el div lo creo
    if (!document.getElementById("visualizacion"+elemento)){
        let div = document.createElement("div");
        div.setAttribute("id", "visualizacion"+elemento);
        document.getElementById(elemento).append(div);
    }
    // Borro el contenido del div 
    document.getElementById("visualizacion"+elemento).innerHTML="";
}
/* Creo un boton combinando:
Tipo(alta, baja, modificacion y mostrar) y Elemento(hospita, personal, paciente)
El nombre del boton combina elemento+tipo y llama a una funcion llamada click
*/
function creaboton(tipo, elemento){
    let boton = document.createElement("button");
    boton.setAttribute("name", elemento+tipo); 
    boton.setAttribute("class", tipo); 
    document.getElementById(elemento).appendChild(boton);
    //document.body.appendChild(boton);
    boton.innerText=tipo + " " +elemento;
    boton.addEventListener("click",click,false);
}
// Carga la pantalla inicial
function muestraDatos(){  
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
// Inicializo los hospitales comunes para todo el programa
let hospitales=[];
window.onload=muestraDatos;
