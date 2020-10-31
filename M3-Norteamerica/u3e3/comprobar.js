window.onload=iniciar;
// Funcion principal al cargar el documento
function iniciar(){
    // Añado el listener al boton enviar
    document.getElementById("fechaBoton").addEventListener('click',validarFecha,false);
    document.getElementById("cocineroBoton").addEventListener('click',validarCocinero,false);
    document.getElementById("destinatarioBoton").addEventListener('click',validarDestinatario,false);
    document.getElementById("gramosBoton").addEventListener('click',validarGramos,false);
    document.getElementById("composicionBoton").addEventListener('click',validarComposicion,false);
}
function validarFecha(){
    let patron=/^(\d){2}\/(\d){2}\/(\d){4}\ (\d){2}:(\d){2}$/;
    valida("fecha",patron);
}
function validarCocinero(){
    // Por caracter entendi algo que no sea "word"
    let patron=/^[A-Z]{2}[^\w][\d]{4}$/;
    valida("cocinero",patron);
}
function validarDestinatario(){
    // Por caracter entendi algo que no sea "word"
    let patron=/^[A-Z]{2,3}_[a-z]{1,}:[\d]{4}$/;
    valida("destinatario",patron);
}
function validarGramos(){
    // Entre el 1000 y el 4999 o 5000
    let patron=/^([1-4]{1}[0-9]{3}|5000)$/;
    valida("gramos",patron);
}
function validarComposicion(){
    //Cantidad+g+(letras+numero)*2
    let patron=/^[\d]{1,}g([A-Za-z]{1,2}[\d]{0,1}){2}$/;
    valida("composicion",patron);
}
// Borra la X si es correcta
function acierto(elemento){
    // Cambio a una X roja si está mal  
    document.getElementById(elemento.id+"Img").src="Imagenes/green-tick.png";
}
// Muestra el texto del error y marca el elemento en rojo
function error(elemento){
    // Cambio a una X roja si está mal  
    document.getElementById(elemento.id+"Img").src="Imagenes/Red_X.png";
}
// Valida un elemento 
function valida(identificador,patron){
    let elemento = document.getElementById(identificador);
    if(patron.test(elemento.value)){
        acierto(elemento);
    } else {
        error(elemento);
    }
}