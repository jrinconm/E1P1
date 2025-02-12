window.onload=iniciar;
// Genero la alerta
alerta=generaAlerta();
// Funcion principal al cargar el documento
function iniciar(){
    //Añado la comprobación de tecla pulsada para cancelar la alerta en todo el documento
    document.addEventListener("keydown",cancelaAlerta,false)
    compruebaAutentificacion();
}
// Borra el div 
function borraDiv(elemento){
    //Elimino el div elemento
    let element = document.getElementById(elemento);
    document.body.removeChild(element);
}
// Crea un div
function creaDiv(elemento){
    let div = document.createElement("div");
    div.setAttribute("id", elemento);
    // En el body no hay nada mas
    document.body.append(div);
}
// Crea una entrada
function creaEntradaFormulario(entrada,form,texto){
    creaLabelFormulario("label"+entrada,form,texto);
    let inputTexto=creaEntradaTXTFormulario("entrada"+entrada);
    form.appendChild(inputTexto);
    let br = document.createElement("br"); 
    form.appendChild(br); 
}
// Crea el formulario de autentificacion
function creaFormularioAutentificacion(nombre,div){
    // Inicializo el formulario
    let form = document.createElement("form");
    form.setAttribute('id',nombre);
    form.addEventListener("submit",hacerSubmitAutentificacion,false);
    //Creo una entrada de texto para la contraseña
    let texto="Introduzca la contraseña:"
    creaEntradaFormulario("Autentificacion",form,texto)
    // Creo el botón de submit
    let enviar = document.createElement("input");
    enviar.setAttribute('type',"submit");
    enviar.setAttribute('value',"Submit");
    enviar.setAttribute('id',"enviar");
    enviar.addEventListener("click",hacerSubmitAutentificacion,false);
    form.appendChild(enviar);
    document.getElementById(div).appendChild(form); 
}
// Crea el formulario de firmas
function creaFormularioFirma(nombre,div){
    let form = document.createElement("form");
    form.setAttribute('id',nombre);
    form.setAttribute('action',"");
    // Creo el label y la entrada de texto para investigador
    let texto="Introduzca nombre del investigador:";
    creaEntradaFormulario("Nombre",form,texto);
    // Creo el label y la entrada de texto para numero de investigador
    texto="Introduzca numero del investigador:";
    creaEntradaFormulario("Numero",form,texto);
    // Creo el label y la entrada de texto para la firma del virus
    texto="Introduzca Id de la firma del virus:";
    creaEntradaFormulario("idFirma",form,texto);
    // Creo el label y la entrada de texto para la firma del virus
    texto="Introduzca la firma del virus:";
    creaEntradaFormulario("firma",form,texto);
    // Creo el botón de submit
    let enviar = document.createElement("input");
    enviar.setAttribute('type',"submit");
    enviar.setAttribute('value',"Submit");
    enviar.setAttribute('id',"enviar");
    enviar.addEventListener("click",hacerSubmitFirma,false);
    form.appendChild(enviar);
    document.getElementById(div).appendChild(form); 
    // Cuando hago foco añado el texto
    document.getElementById("entradafirma").addEventListener("focus",addTexto,false);
}
//Añade una etiqueta con texto a un formulario
function creaLabelFormulario(nombre,form,texto){
    let label=document.createElement("label"); 
    label.setAttribute('id',nombre);
    label.innerText=texto;
    form.appendChild(label); 
    let br = document.createElement("br"); 
    form.appendChild(br); 
}
// Funcion que crea una entrada de texto de formulario
function creaEntradaTXTFormulario(nombre){
    let entrada = document.createElement("input"); 
    entrada.setAttribute("type", "text"); 
    entrada.setAttribute("name", nombre);
    entrada.setAttribute("id", nombre);
    entrada.setAttribute("class", "entradaTexto");
    return entrada;
}
// Funcion que añade el texto
function addTexto(){
    console.log("Evento lanzado")
    document.getElementById("entradafirma").value="S4ND1EG0";
}
// Comprueba en localStorage si estamos autentificados
function compruebaAutentificacion(){
    if(localStorage.getItem("Contraseña")){
        creaDiv("divFirma"); 
        creaFormularioFirma("formFirma","divFirma");
    } else {
        creaFormAutentificacion();
    }
}
// Crea el formulario para la contraseña
function creaFormAutentificacion(){
    creaDiv("divAutentificacion"); 
    creaFormularioAutentificacion("formAutentificacion","divAutentificacion");
}
// Crea el formulario para las firmas
function creaFormFirma(){
    borraDiv("divAutentificacion");
    creaDiv("divFirma");  
    creaFormularioFirma("formFirma","divFirma");
}
//Comprueba la contraseña y lo graba si es correcta
function hacerSubmitAutentificacion(e){
    e.preventDefault();
    let entradapass=document.getElementById("entradaAutentificacion").value;
    if (entradapass==="sobresaliente"){
        localStorage.setItem("Contraseña",true)
        creaFormFirma();
    }
}
//Comprueba los distintos campos
function hacerSubmitFirma(e){
    e.preventDefault();
    valida("entradaNombre",/^[\w]{2,32}$/);
    valida("entradaNumero",/^[\d]{8}[A-Za-z]{1}$/);
    valida("entradaidFirma",/^[\d]{1,10}$/);
    valida("entradafirma",/^S4ND1EG0[\w]{0,42}$/);
}
// Funcion para comprobar un input con un patron
function valida(identificador,patron){
    let elemento = document.getElementById(identificador);
    if(patron.test(elemento.value)){
        elemento.className="";
        return true;
    } else {
        elemento.className="error";
        return false;
    }
}
// Funcion que crea un Timeout y lo devuelve
function generaAlerta(){
    let idA=setTimeout("alert('Ponte a trabajar, no seas Jessie Pinkman');",15000);
    return idA;
}
function cancelaAlerta(){
    //Cancelo la alerta
    clearTimeout(alerta);
    //vuelvo a generarla para que se siga trabajando
    alerta=generaAlerta();
}