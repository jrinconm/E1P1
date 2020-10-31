window.onload=iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener('click',validar,false);
    document.getElementById("club").addEventListener('click',pincharClub,false);
}
function validar(){
    validaIdentificador();
    validaNombre();
}
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
function validaIdentificador(){
    let elemento = document.getElementById("identificador");
}
function validaNombre(){
    let elemento = document.getElementById("nombre");
}
function validaFechaNacimiento(){
    let elemento = document.getElementById("fechaNacimiento");
}
function validaCorreo(){
    let elemento = document.getElementById("correo");
}
function validaTelefono(){
    let elemento = document.getElementById("telefono");
}
function validaEdad(){
    let elemento = document.getElementById("edad");
}
function validaSocio(){
    let elemento = document.getElementById("socio");
}
