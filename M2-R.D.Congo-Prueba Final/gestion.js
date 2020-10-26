"use strict";
// Funcion que comprueba los campos de un formulario
function compruebaFormulario(formulario){
    let campos=formulario.elements;    
    for(const campo in campos){
        // Compruebo los input de tipo text
        if(campos[campo].type=="text"){
            if(campos[campo].value.length == 0){
                alert("Debes introducir "+campos[campo].name)
                campos[campo].focus();  
                //Devuelvo falso              
                return false;
            }
        }
        // Compruebo los input de tipo select one
        if(campos[campo].type=="select-one" && campos[campo].options.length==0){
                alert("Debes crear primero un "+campos[campo].name);
                return false;
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
function creaListaFormulario(nombre,listado,array){
    let entrada = document.createElement("select"); 
    entrada.setAttribute("name", nombre);
    entrada.setAttribute("id", nombre);
    entrada.setAttribute("class", "entradaLista");
    if(array){
        for(const opcion in listado){
            var item = document.createElement("option");
            item.text = listado[opcion];
            item.value = listado[opcion];
            entrada.add(item);
        }
    } else {
        for(const opcion in listado){
            var item = document.createElement("option");
            item.text = listado[opcion].nombre;
            item.value = listado[opcion].nombre;
            entrada.add(item);
        }
    }
    return entrada;
}
// Funciones de alta con formularios comprobados
// Da de alta hospital 
function darAltahospital(){
    let nombre=document.getElementById("formhospital").elements["Nombre"].value;
    let localidad=document.getElementById("formhospital").elements["Localidad"].value;
    let responsable=document.getElementById("formhospital").elements["Responsable"].value;
    let hospital=new Hospital(nombre,localidad,responsable);
    hospitales.push(hospital);
}
// Da de alta Personal 
function darAltapersonal(){
    let nombre=document.getElementById("formpersonal").elements["Nombre"].value;
    let especialidad=document.getElementById("Especialidad").value;
    let hospital=document.getElementById("Hospital").selectedIndex;
    hospitales[hospital].addPersonal(new Personal(nombre,especialidad));
}
// Da de alta Personal 
function darAltapaciente(){
    let nombre=document.getElementById("formpaciente").elements["Nombre"].value;
    let enfermedad=document.getElementById("formpaciente").elements["Enfermedad"].value;
    let hospital=document.getElementById("Hospital").selectedIndex;
    let personal=document.getElementById("Personal").selectedIndex;
    hospitales[hospital].personal[personal].addPaciente(new Paciente(nombre,enfermedad));
}
function creaLabelFormulario(nombre){
    let label=document.createElement("label"); 
    label.innerText=nombre+": ";
    return label;
}
function addItemEntradaForm(item,form){
    let label=creaLabelFormulario(item);
    form.appendChild(label);
    let entrada=creaEntradaFormulario(item);
    form.appendChild(entrada);
    let br = document.createElement("br"); 
    form.appendChild(br);  
}
function addItemListaForm(item,lista,form,esArray){
    let label=creaLabelFormulario(item);
    form.appendChild(label);
    let entrada=creaListaFormulario(item,lista,esArray);
    form.appendChild(entrada);
    let br = document.createElement("br"); 
    form.appendChild(br);
}
// Funcion que crea un formulario
function creaFormulario(objeto,div,accion='alta'){
    let formulario = document.createElement("form");
    formulario.setAttribute('id',div.replace('visualizacion','form'));
    switch (accion){
        //Por defecto la acción es alta
        case 'alta':
            for(const propiedad in objeto){
                addItemEntradaForm(objeto[propiedad],formulario);
            } 
            switch (div){
                // Para el alta de Personal... No debería ir así...
                case 'visualizacionpersonal':
                    addItemListaForm("Especialidad",["Médico","Enfermera","Celador"],formulario,true);
                    addItemListaForm("Hospital",hospitales,formulario);
                    break;
                // Para el alta de Pacientes... No debería ir así...
                case 'visualizacionpaciente':
                    addItemListaForm("Hospital",hospitales,formulario);
                    // Compruebo si hay un hospital como minimo
                    if(hospitales.length!=0){
                        // De base esto no se puede elegir personal
                        addItemListaForm("Personal",hospitales[0].personal,formulario);
                    }
                    break;
            }
            break;
        case 'baja':
            break;

    }


    // Creo el botón de submit
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
    //Elimino los divs de visualizacion
    while(document.querySelector('[id^=visualizacion]')){
        let element=document.querySelector('[id^=visualizacion]');
        element.parentNode.removeChild(document.querySelector('[id^=visualizacion]'));
    }
    // No va a existir el div... lo creo
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
