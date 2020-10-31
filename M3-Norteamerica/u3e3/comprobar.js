window.onload=iniciar;
// Funcion principal al cargar el documento
function iniciar(){
    // Añado el listener al boton enviar
    document.getElementById("fechaBoton").addEventListener('click',validarFecha,false);
}
function validarFecha(){
    let patron="/(\d){2}/(\d){2}/(\d){4} (\d){2}:(\d){2}/";
    valida("fecha",patron);
}
// Borra la X si es correcta
function borrarError(elemento){
    // Cambio a una X roja si está mal  
    document.getElementById(elemento.id+"Img").src="Imagenes/green-tick.png";
}
// Muestra el texto del error y marca el elemento en rojo
function error(elemento){
    // Cambio a una X roja si está mal  
    document.getElementById(elemento.id+"Img").src="Imagenes/Red_X.png";
}
// Valida un elemento 
function valida(identificador){
    let elemento = document.getElementById(identificador);
    if (!elemento.checkValidity()){
        error(elemento);
        return false
    }
    borrarError(elemento);
    return true;
}