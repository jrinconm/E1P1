/* 2 clases, pregunta, y partida. 
Creditos a Lionel de las preguntas de saber y ganar
*/
"use strict";
class Pregunta {
    constructor (listapreguntas){
        this.preguntaAzar = generaPregunta(listapreguntas);
        this.pregunta=preguntaAzar[0];
        this.respuesta=preguntaAzar[1];
    }
    // Getter para obtener la pregunta
    get pregunta(){
        return this.pregunta;
    }
    // Comprueba la respuesta y devuelve si es correcta o no
    compruebaRespuesta(respuestaUsuario){
        return (respuesta===respuestaUsuario);
    }
    // Obtiene la pregunta de una lista de preguntas
    generaPregunta(listapreguntas){
        let cantidadPreguntas = listapreguntas.length;
        let preguntaAzar=Math.floor(Math.random()*(listapreguntas.length+1));
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