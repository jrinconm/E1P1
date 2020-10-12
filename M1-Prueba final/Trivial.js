/* 2 clases, pregunta, y partida. 
Creditos a Lionel de las preguntas de saber y ganar
*/
"use strict";
class Pregunta {
    constructor (pregunta, respuesta){
        this.pregunta=pregunta;
        this.respuesta=respuesta;
    }
    get pregunta(){
        return this.pregunta;
    }
    compruebaRespuesta(respuestaUsuario){
        return (respuesta===respuestaUsuario);
    }
    static generaPregunta(listapreguntas){
        let cantidadPreguntas = listapreguntas.length;
        let preguntaAzar=Math.floor(Math.random()*(listapreguntas.length+1));
        return listapreguntas[preguntaAzar];
    }

}