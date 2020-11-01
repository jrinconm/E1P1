window.onload=iniciar;
// Funcion principal al cargar el documento
function iniciar(){
    creaFormAutentificacion();
}
// Borra el div 
function borraDiv(elemento){
    //Elimino el div elemento
    let element = document.getElementById(elemento);
    document.body.removeChild(element);
}
function creaDiv(elemento){
    let div = document.createElement("div");
    div.setAttribute("id", elemento);
    // En el body no hay nada mas
    document.body.append(div);
}
function creaFormularioAutentificacion(nombre,div){
    let form = document.createElement("form");
    form.setAttribute('id',nombre);
    form.addEventListener("submit",hacerSubmitAutentificacion,false);
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
function creaEntradaFormulario(entrada,form,texto){
    creaLabelFormulario("label"+entrada,form,texto);
    let inputTexto=creaEntradaTXTFormulario("entrada"+entrada);
    form.appendChild(inputTexto);
    let br = document.createElement("br"); 
    form.appendChild(br); 
}
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
    // Creo el botón de submit
    let enviar = document.createElement("input");
    enviar.setAttribute('type',"submit");
    enviar.setAttribute('value',"Submit");
    enviar.setAttribute('id',"enviar");
    enviar.addEventListener("click",hacerSubmitAutentificacion,false);
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
        creaFormFirma();
    }
}
function validar(){

}
function alerta(){
    alert("Ponte a trabajar, no seas Jessie Pinkman");
}