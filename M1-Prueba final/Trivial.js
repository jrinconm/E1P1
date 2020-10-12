/* 2 clases, pregunta, y partida. 
Creditos a Lionel de las preguntas de saber y ganar
*/
"use strict";
let geografia = [
    ["Cuál es el idioma más hablado en Suiza","Alemán","Ingles", "Frances", "Italiano"],
    ["Qué país está entre Perú y Colombia","Ecuador", "México", "Brasil", "Argentina"],
    ["Cuál es el río más largo de Europa Occidental", "Rin", "Venubio","Tajo", "Nilo"],
]
class Pregunta {
    constructor (pregunta){
        this.pregunta=preguntaAzar[0];
        this.respuesta=preguntaAzar[1];
        this.opciones=[preguntaAzar[2],preguntaAzar[3],preguntaAzar[4]]
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
        let ganar=6, perder=3;
        let aciertos=0,fallos=0;        
    }
    // El metodo que inicia la partida
    jugar(){
        // Si no se gana ni pierde se continua
        while(aciertos < ganar && fallos < perder){
            // Genero una pregunta del array

            pregunta = new Pregunta;

        }
    }
}
let preguntaAzar=Pregunta.generaPregunta(geografia);
console.log(preguntaAzar);
let primeraPregunta = new Pregunta(preguntaAzar);
console.log(primeraPregunta);