/* 2 clases, pregunta, y partida. 
Creditos a Lionel de las preguntas de saber y ganar
*/
"use strict";
class Pregunta {
    constructor (pregunta){
        this.pregunta=pregunta[0];
        this.respuesta=pregunta[1];
        this.opciones=[pregunta[2],pregunta[3],pregunta[4]]
    }
    // Comprueba la respuesta y devuelve si es correcta o no
    compruebaRespuesta(respuestaUsuario){
        return (respuesta===respuestaUsuario);
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
        // Si no se gana ni pierde se continua
        while(this.aciertos < this.ganar && this.fallos < this.perder){
            // Genero una pregunta del array
            let preguntaAzar=Pregunta.generaPregunta(geografia);
            console.log(preguntaAzar);
            let pregunta = new Pregunta(preguntaAzar);
            console.log(pregunta);
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
let juego = new Partida;
console.log(juego);
juego.jugar();
