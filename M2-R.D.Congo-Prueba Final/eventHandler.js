// Funcion para ejecutar cuando se hace click
// Ejecuta una funcion basada en la lista de funciones de window
function click(ev){
    // Es sucio, pero me permite llamar una funcion por el nombre de la lista de funciones de la ventana
    window[ev.target.name]();
}
function submit(ev){
    // Es sucio, pero me permite llamar una funcion por el nombre de la lista de funciones de la ventana
    ev.preventDefault();
    formulario=ev.target.parentNode;
    compruebaFormulario(formulario);
    return false;
}
function pacienteAlta(){
    // Borro y creo el div de paciente
    creaBorraDiv("paciente");
    let propiedades=["Nombre","Enfermedad","Hospital","Personal"];
    creaFormulario(propiedades,"visualizacion"+"paciente");    
    //hospitales[0].personal[0].addPaciente(new Paciente("Jose","Infarto"));
}
function personalAlta(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");
    let propiedades=["Nombre","Especialidad","Hospital"];
    creaFormulario(propiedades,"visualizacion"+"personal");    
}
function hospitalAlta(){
    creaBorraDiv("hospital");
    let propiedades=["Nombre","Localidad","Responsable"];
    creaFormulario(propiedades,"visualizacion"+"hospital");   
    //hospitales.push(new Hospital("El consuelo","Valencia","Pepe"));
}
function hospitalMostrar(){
    // Borro y creo el div de personal
    creaBorraDiv("hospital");
    creaTablaObjeto(hospitales,"visualizacion"+"hospital");    
}
function personalMostrar(){
    // Borro y creo el div de personal
    creaBorraDiv("personal");
    // Hago un bucle para revisar el personal de cada hospital
    for (const hospital in hospitales){
        let elemento=document.getElementById("visualizacion"+"personal");
        let texto="El hospital: " + hospitales[hospital].nombre + " tiene el siguiente personal:";
        let cabecera = creaCabecera(texto,"h2");
        elemento.append(cabecera);
        let tabla=creaTablaObjeto(hospitales[hospital].personal)
        elemento.append(tabla); 
    } 
}
function pacienteMostrar(){
    // Borro y creo el div de personal
    creaBorraDiv("paciente");
    creaTablaObjeto(hospitales,"visualizacion"+"paciente");    
}