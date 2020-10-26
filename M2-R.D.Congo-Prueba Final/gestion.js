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
                //celda.style.textTransform = "capitalize";
                fila.appendChild(celda);
        } else {
            let textoCelda = document.createTextNode(propiedad);
            celda.appendChild(textoCelda);
            //celda.style.textTransform = "capitalize";
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
// Funcion que crea una entrada de formulario
function creaEntradaFormulario(nombre){
    let entrada = document.createElement("input"); 
    entrada.setAttribute("type", "text"); 
    entrada.setAttribute("name", nombre);
    return entrada;
}
function creaListaFormulario(nombre,listado){
    let entrada = document.createElement("select"); 
    entrada.setAttribute("name", nombre);
    for(const opcion in listado){
        var item = document.createElement("option");
        item.text = listado[opcion].nombre;
        item.value = listado[opcion].nombre;
        entrada.add(item);
    }
    return entrada;
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
    formulario.appendChild(enviar);
    document.getElementById(div).appendChild(formulario);    
    return formulario;  
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
