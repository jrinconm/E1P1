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
        const tipos = [geografia,entretenimiento,historia];
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
            // Si acierto sumo un acierto, si fallo sumo un fallo. Muestro mensaje en ambos casos.
            if(preguntaActual.compruebaRespuesta(respuestaUsuario)){
                this.aciertos++;
                alert("Acertaste!!! Sumas 1 punto.");
            } else {
                this.fallos++;
                // Muestro la respuesta correcta
                alert("Fallo!!! La respuesta era:\n"+preguntaActual.respuesta);
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
let historia = [
    ["¿Qué reina británica era hija de los Reyes Católicos?","Catalina de Aragón","Margaret Thatcher","Lady Di","Juana de Arco"]
    ["¿Qué país fue llamado la Galia por los romanos?","Francia","Inglaterra","Italia","Alemania"],
    ["¿Qué batalla crucial tuvo lugar en 1815?","Waterloo","Navas de Tolosa","Desembarco de Normandia","Batalla de Lepanto"],
    ["¿Cuál era la ciudad hogar de Marco Polo?","Venecia","Amedio","Florencia","Nueva York"],
    ["¿Quién era el emperador de Roma cuando murió Jesús?","Tiberio","Cesar","Pilatos","Neron"],
    ["¿Cómo se conoce a la policía italiana?","Carabinieri","Polizei","Prego qui vene poli","Police"],
    ["¿Cuál fue la dictadura que comenzó en España en el año 1923?","La del general Primo de Rivera","La de Francisco Franco","La dictadura Sovietica","Dictadura de los 30 tiranos"],
    ["¿Quién fue el primer presidente de los Estados Unidos?","George Washington","Donald Trump","Benjamin Franklin","Abraham Lincoln"],
    ["¿Qué país africano fue fundado en 1847 por esclavos americanos liberados?","Liberia","Nigeria","Argelia","Madagascar"],
    ["¿En qué ciudad se entrevistaron Franco y Hitler?","Hendaya","Madrid","Berlin","Nunca jamas"]
];
/*

Arte y Literatura (marrón o morado)
31. ¿Qué escribía un testador?
32. ¿Quién visitó un país gobernado por caballos?
33. ¿Cuál era el lema de los Tres Mosqueteros?
34. ¿Qué tiene en Segovia 128 arcos?
35. ¿Quién fue el italiano que puso música al Othelo de Shakespeare?
36. ¿Quién escribió La Guerra de los Mundos en 1898?
37. ¿De qué asignatura fue catedrático Antonio Machado?
38. ¿Quién escribió las aventuras de Sandokán?
39. ¿Cuál es la identidad secreta de Don Diego de la Vega?
40. ¿Qué mide en París alrededor de 333 metros?
Soluciones:
31. Testamentos 32. Gulliver 33. “Todos para uno y uno para todos” 34. El Acueducto 35. Verdi 36. H.G. Wells 37. Francés 38. Emilio Salgari 39. El Zorro 40. La Torre Eiffel

Ciencias y Naturaleza (verde)
41. ¿Cómo se llaman las células nerviosas?
42. ¿Qué es más valioso, un brillante o un diamante?
43. ¿Cuál es el pájaro símbolo de la paz?
44. ¿En qué mes el sol está más cerca de la Tierra?
45. ¿En qué parte del cuerpo se encuentra la piel más gruesa?
46. ¿A qué le tiene miedo una persona que sufre vértigo?
47. ¿Cómo se llama la ciencia que estudia la sangre?
48. ¿Qué fabricó Alessandro Volta, por primera vez, en 1800?
49. ¿Cuál de los cinco sentidos se desarrolla el primero?
50. ¿Cuál es el dedo más sensible de la mano?
Soluciones:
41. Neuronas 42. Un brillante 43. Paloma 44. Diciembre 45. Espalda 46. A las alturas 47. Hematología 48. Pila 49. Olfato 50. Índice

Deportes y Pasatiempos (naranja)
51. ¿Qué pieza de ajedrez puede hacer un movimiento en forma de L?
52. ¿Cómo se llaman los deportistas que practican el judo?
53. ¿Qué deporte practican los Harlem Globetrotters?
54. ¿A cuántos puntos se disputa un set en el tenis de mesa?
55. ¿Qué obtienes si añades fruta fresca al vino tinto?
56. ¿A qué equipo de fútbol pertenecía el estadio Metropolitano?
57. ¿En qué país se encuentra el circuito de Le Mans?
58. ¿Quién fueron los finalistas de baloncesto en los Juegos Olímpicos de Los Ángeles de 1984?
59. ¿Cuál era el nombre anterior de Muhammad Alí?
60. ¿Cuántos jugadores tiene un equipo de voleibol?
Soluciones:
51. Caballo 52. Judokas 53. Baloncesto 54. Veintiuno 55. Sangría 56. Atlético de Madrid 57. Francia 58. España y Estados Unidos 59. Cassius Clay 60. Seis

Cultura popular
61. ¿Quién fue el primer presentador del concurso "Un, dos, tres, responda otra vez" que se emitía en Televisión Española?
62. ¿En qué popular serie de TV podemos ubicar a un personaje llamado Walter White?
63. ¿Qué popular serie de Netflix nos habla sobre la vida del narcotraficante Pablo Escobar Gaviria?
64. ¿Qué actor interpreta el personaje de Leonard Hofstadter en la serie "The Big Bang Theory"?
65. ¿Cuál es el nombre de pila del aventurero Bear Grylls?
66. ¿Cómo se llama el actor que interpreta al Dr House?
67. ¿Cuáles son los apellidos de los cirujanos que protagonizan la serie 'Nip/Tuck'?
68. ¿Qué artista tiene en su poder más premios Grammy?
69. ¿Qué artista tiene en su poder más premios Emmy?
70. ¿Qué jugador de la NBA fue pareja durante un tiempo de la popular Kim Kardashian?
Soluciones:
61. Kiko Ledgard 62. En Breaking Bad 63. Narcos 64. Johnny Galecki 65. Edward 66. Hugh Laurie 67. McNamara y Troy 68. Georg Solti 69. Julia Louis Dreyfus 70. Kris Humphries
*/
let juego = new Partida;
juego.jugar();
