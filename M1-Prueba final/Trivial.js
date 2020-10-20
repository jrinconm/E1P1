/* 2 clases, pregunta, y partida. 
Creditos a Lionel de las preguntas de saber y ganar
*/
"use strict";
class Pregunta {
    constructor (pregunta){
        this.pregunta=pregunta;
        this.texto=pregunta[0];
        this.respuesta=pregunta[1];
        this.opciones=[...pregunta];
        this.opciones.shift();
    }
    // Comprueba la respuesta y devuelve si es correcta o no
    compruebaRespuesta(respuestaUsuario){
        return (this.respuesta===this.opciones[parseInt(respuestaUsuario)-1]);
    }
    // Crea el texto con la pregunta y las opciones
    creaTextoPregunta(){
        let textoMostrar=this.texto+"\n";
        let opcionesMostrar=this.cambiaOpciones();
        for(const opcion in opcionesMostrar){
            textoMostrar+=(parseInt(opcion)+1) + ".-" +opcionesMostrar[opcion] + "\n";
        }
        return textoMostrar;
    }
    // Cambia el orden de las opciones al azar
    cambiaOpciones(){
        let arrayIntercambio=[...this.opciones];
        let arrayTemporal=[];
        let cantidadOpciones=arrayIntercambio.length;
        for(let cont=0;cont<cantidadOpciones;cont++){
            let extraerOpcion=Math.floor(Math.random()*arrayIntercambio.length);
            arrayTemporal.push(arrayIntercambio[extraerOpcion]);
            arrayIntercambio.splice(extraerOpcion,1);
        }
        this.opciones = [...arrayTemporal];
        return [...arrayTemporal];
       }
    // Obtiene la pregunta de una lista de preguntas
    static generaPregunta(listapreguntas){
        let cantidadPreguntas = listapreguntas.length;
        let preguntaAzar=Math.floor(Math.random()*(listapreguntas.length));
        return listapreguntas[preguntaAzar];
    }
}
class Partida {
    // Inicializo los valores
    constructor (){
        // Parametrizo los valores para victoria y derrota
        this.ganar=6;
        this.perder=3;
        this.aciertos=0;
        this.fallos=0;        
    }
    // El metodo que inicia la partida
    jugar(){
        // Defino los 7 tipos de preguntas
        const tipos = [geografia,entretenimiento];
        // Creo la lista de preguntas
        let preguntas = tipos.map(tipo=>Pregunta.generaPregunta(tipo));
        let listaPreguntas=[];
        for(const pregunta in preguntas){
            listaPreguntas.push(new Pregunta(preguntas[pregunta]));
        }
        // Si no se gana ni pierde se continua
        while(this.aciertos < this.ganar && this.fallos < this.perder){
            // Genero una pregunta del array
            let preguntaActual=listaPreguntas.pop();
            let respuestaUsuario=prompt(preguntaActual.creaTextoPregunta());
            if(preguntaActual.compruebaRespuesta(respuestaUsuario)){
                this.aciertos++;
            } else {
                this.fallos++;
            }
            console.log("Aciertos: "+ this.aciertos + " - Fallos: " + this.fallos);
        }
    }
}
let geografia = [
    ["¿Cuál es el idioma más hablado en Suiza?","Alemán","Ingles","Frances","Italiano"],
    ["¿Qué país está entre Perú y Colombia?","Ecuador","México","Brasil","Argentina"],
    ["¿Cuál es el río más largo de Europa Occidental?","Rin","Venubio","Tajo","Nilo"],
    ["¿Qué lago baña la ciudad de Ginebra?","El lago Leman","El lago Azul","El lago Victoria","El lago Tanganica"], 
    ["¿En qué país europeo se habla el magyar?","Hungría","Mauritania","Magyaría","Mauritania"],
    ["¿Qué palabra significa “hijo de” en los apellidos escoceses?","Mac","Gregor","Colin","Leod"],
    ["¿Cuál es la capital de Indonesia?","Jakarta","Indonesia","India","Nueva Delhi"],
    ["¿En qué país se encuentra el pico Aconcagua?","Argentina","China","Brasil","Africa"],
    ["¿En qué hemisferio se encuentra Jamaica?","Norte","Sur","Este","Oeste"],
    ["¿A qué país pertenece la isla de Creta?","Grecia","Turquía","Egipto","Italia"]
];
let entretenimiento = [
    ["¿Cuál es el oso más famoso del parque nacional de Yellowstone?","El oso Yogui","EL oso Bubu","Baloo","Winnie the Pooh"]
    ["¿Qué actor, que no era el feo ni el malo, era el bueno?","Clint Eastwood","Terence Hill","Robert Pattinson","Val Kilmer"],
    ["¿Con qué director de cine italiano se casó la actriz Giulietta Masina?","Federico Fellini","Vittorio de Sica","Mario Monicelli","Paolo Vasile"],
    ["¿Quién fue la gran ganadora de los Grammy Latinos 2018?","Rosalía","Medina Azahara","Camila Cabello","Rihanna"],
    ["¿Cuál de los Siete Enanitos no tenía barba?","Mudito","Gruñón","Bonachón","Calvito"],
    ["¿Qué conocido actor español protagonizó “La máscara del Zorro” en 1998?","Antonio Banderas","La Roca","Santiago Segura","Javier Bardem"],
    ["¿Cuál es el tipo de música por el que se conoció mundialmente Astrud Gilberto?","Bossa Nova","Trance","Pop","Vals"],
    ["¿Qué canción de Los Beatles ha sido la más grabada?","Yesterday","Tomorrow","California Girls","Bohemian Rhapsody"],
    ["¿Quién dijo: “Hitler me ha copiado el bigote”?","Charlie Chaplin","Jose María Aznar","Mario Moreno Cantinflas","Oliver Hardy"],
    ["¿Quién fue la primera voz de Mickey Mouse?","Walt Disney","Florentino Fernandez","James McDonald","Wayne Allwine"]
];
let juego = new Partida;
juego.jugar();
