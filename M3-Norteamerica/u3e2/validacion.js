window.onload=iniciar;
// Funcion principal al cargar el documento
function iniciar(){
    // Añado el listener al boton enviar
    document.getElementById("enviar").addEventListener('click',validar,false);
    // Añado el listerner al check del club
    document.getElementById("club").addEventListener('click',pincharClub,false);
}
// Activa y desactiva los campos asociados a club
function pincharClub(){
    if(document.getElementById("club").checked){
        document.getElementById("socio").disabled=false;
        document.getElementById("infantil").disabled=false;
        document.getElementById("juvenil").disabled=false;
        document.getElementById("senior").disabled=false;
    } else {
        document.getElementById("socio").disabled=true;   
        document.getElementById("infantil").disabled=true;
        document.getElementById("juvenil").disabled=true;
        document.getElementById("senior").disabled=true;     
    }
}
// Funcion llamada al hacer click en enviar. Inicia la validacion
function validar(){
    // Lista de campos a validar
    let camposValidar=["identificador","nombre","fechaNacimiento","correo","telefono","edad","socio"]
    for(const campo of camposValidar){
        valida(campo);
    }
}
// Muestra el texto del error y marca el elemento en rojo
function error(elemento){
    let mensajeError = document.createTextNode(elemento.validationMessage);
    elemento.appendChild(mensajeError);
    elemento.className="error";
}
// Borra la clase error si es correcta
function borrarError(identificador){
    let elemento = document.getElementById(identificador);
    elemento.className="";
}
// Valida un elemento 
function valida(identificador){
    let elemento = document.getElementById(identificador);
    if (!elemento.checkValidity()){
        error(elemento);
        return false
    }
    borrarError(identificador);
    return true;
}
