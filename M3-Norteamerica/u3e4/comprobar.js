window.onload=iniciar;
// Funcion principal al cargar el documento
function iniciar(){
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
}
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
function compruebaAutentificacion(){
    if(localStorage.getItem("Contraseña")){
        creaDiv("divFirma"); 
        creaFormularioFirma("formFirma","divFirma");
    } else {
        creaFormAutentificacion();
    }
}
function creaFormAutentificacion(){
    creaDiv("divAutentificacion"); 
    creaFormularioAutentificacion("formAutentificacion","divAutentificacion");
}
function creaFormFirma(){
    borraDiv("divAutentificacion");
    creaDiv("divFirma"); 
    creaFormularioFirma("formFirma","divFirma");
}
function hacerSubmitAutentificacion(e){
    e.preventDefault();
    let entradapass=document.getElementById("entradaAutentificacion").value;
    if (entradapass==="sobresaliente"){
        localStorage.setItem("Contraseña",true)
        creaFormFirma();
    }
}
function hacerSubmitFirma(e){
    e.preventDefault();

}
function validar(){

}
function alerta(){
    alert("Ponte a trabajar, no seas Jessie Pinkman");
}