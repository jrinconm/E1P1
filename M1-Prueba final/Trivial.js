/* 2 clases, pregunta, y partida. 
Creditos a Lionel de las preguntas de saber y ganar
*/
"use strict";
class Pregunta {
    constructor (pregunta){        
        this.pregunta=pregunta;
        this.tipo=pregunta.shift();
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
        let textoMostrar="Por un quesito, una pregunta de : "+ this.tipo + "\n" + this.texto +"\n";
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
    static generaPregunta(listapreguntas, clave){
        let cantidadPreguntas = listapreguntas.length;
        console.log(cantidadPreguntas);
        let preguntaAzar=Math.floor(Math.random()*(listapreguntas.length));
        listapreguntas[preguntaAzar].unshift(clave);
        return listapreguntas[preguntaAzar];
    }
}
class Partida {
    // Inicializo los valores
    constructor (){
        // Parametrizo los valores para victoria y derrota
        this.ganar=4;
        this.perder=3;
        this.aciertos=0;
        this.fallos=0;        
    }
    // Metodo que comprueba si has ganado o perdido
    resultados(){
        if(this.aciertos === this.ganar){
            return "Has ganado!!!";
        } else if (this.fallos === this.perder){
            return "Has perdido!!!";
        } else {
            return "La partida está en progeso"
        }
    }
    // El metodo que inicia la partida
    jugar(){
        const tipos = {
            "Geografía": [
                ["¿Cuál es el idioma más hablado en Suiza?","Alemán","Ingles","Frances","Italiano"],
                ["¿Qué país está entre Perú y Colombia?","Ecuador","México","Brasil","Argentina"],
                ["¿Cuál es el río más largo de Europa Occidental?","Rin","Venubio","Tajo","Nilo"],
                ["¿Qué lago baña la ciudad de Ginebra?","El lago Leman","El lago Azul","El lago Victoria","El lago Tanganica"], 
                ["¿En qué país europeo se habla el magyar?","Hungría","Mauritania","Magyaría","Mauritania"],
                ["¿Qué palabra significa “hijo de” en los apellidos escoceses?","Mac","Gregor","Colin","Leod"],
                ["¿Cuál es la capital de Indonesia?","Jakarta","Indonesia","India","Nueva Delhi"],
                ["¿En qué país se encuentra el pico Aconcagua?","Argentina","China","Brasil","Africa"],
                ["¿En qué hemisferio se encuentra Jamaica?","Norte","Sur","Este","Oeste"],
                ["¿A qué país pertenece la isla de Creta?","Grecia","Turquía","Egipto","Italia"]] ,
            "Entretenimiento": [
                ["¿Cuál es el oso más famoso del parque nacional de Yellowstone?","El oso Yogui","EL oso Bubu","Baloo","Winnie the Pooh"],
                ["¿Qué actor, que no era el feo ni el malo, era el bueno?","Clint Eastwood","Terence Hill","Robert Pattinson","Val Kilmer"],
                ["¿Con qué director de cine italiano se casó la actriz Giulietta Masina?","Federico Fellini","Vittorio de Sica","Mario Monicelli","Paolo Vasile"],
                ["¿Quién fue la gran ganadora de los Grammy Latinos 2018?","Rosalía","Medina Azahara","Camila Cabello","Rihanna"],
                ["¿Cuál de los Siete Enanitos no tenía barba?","Mudito","Gruñón","Bonachón","Calvito"],
                ["¿Qué conocido actor español protagonizó “La máscara del Zorro” en 1998?","Antonio Banderas","La Roca","Santiago Segura","Javier Bardem"],
                ["¿Cuál es el tipo de música por el que se conoció mundialmente Astrud Gilberto?","Bossa Nova","Trance","Pop","Vals"],
                ["¿Qué canción de Los Beatles ha sido la más grabada?","Yesterday","Tomorrow","California Girls","Bohemian Rhapsody"],
                ["¿Quién dijo: “Hitler me ha copiado el bigote”?","Charlie Chaplin","Jose María Aznar","Mario Moreno Cantinflas","Oliver Hardy"],
                ["¿Quién fue la primera voz de Mickey Mouse?","Walt Disney","Florentino Fernandez","James McDonald","Wayne Allwine"]],
           "Historia": [
                ["¿Qué reina británica era hija de los Reyes Católicos?","Catalina de Aragón","Margaret Thatcher","Lady Di","Juana de Arco"],
                ["¿Qué país fue llamado la Galia por los romanos?","Francia","Inglaterra","Italia","Alemania"],
                ["¿Qué batalla crucial tuvo lugar en 1815?","Waterloo","Navas de Tolosa","Desembarco de Normandia","Batalla de Lepanto"],
                ["¿Cuál era la ciudad hogar de Marco Polo?","Venecia","Amedio","Florencia","Nueva York"],
                ["¿Quién era el emperador de Roma cuando murió Jesús?","Tiberio","Cesar","Pilatos","Neron"],
                ["¿Cómo se conoce a la policía italiana?","Carabinieri","Polizei","Prego qui vene poli","Police"],
                ["¿Cuál fue la dictadura que comenzó en España en el año 1923?","La del general Primo de Rivera","La de Francisco Franco","La dictadura Sovietica","Dictadura de los 30 tiranos"],
                ["¿Quién fue el primer presidente de los Estados Unidos?","George Washington","Donald Trump","Benjamin Franklin","Abraham Lincoln"],
                ["¿Qué país africano fue fundado en 1847 por esclavos americanos liberados?","Liberia","Nigeria","Argelia","Madagascar"],
                ["¿En qué ciudad se entrevistaron Franco y Hitler?","Hendaya","Madrid","Berlin","Nunca jamas"]],
            "Arte y literatura": [
                ["¿Qué escribía un testador?","Testamentos","Atestados","Textos","Testas"],
                ["¿Quién visitó un país gobernado por caballos?","Gulliver","El primer caballero","Garci","El barón de Münchhausen"],
                ["¿Cuál era el lema de los Tres Mosqueteros?","Todos para uno y uno para todos","Donde comen dos comen tres","Tanto por uno san bruno","París no cayó en una hora"],
                ["¿Qué tiene en Segovia 128 arcos?","El Acueducto","La armería","La Alhambra","El castillo de Segovia"],
                ["¿Quién fue el italiano que puso música al Othelo de Shakespeare?","Verdi","Leonardo","Donatello","Splinter"],
                ["¿Quién escribió La Guerra de los Mundos en 1898?","H.G. Wells","Orson Welles","Cervantes","Isaac Asimov"],
                ["¿De qué asignatura fue catedrático Antonio Machado?","Francés","Literatura","Programación","Matematicas"],
                ["¿Quién escribió las aventuras de Sandokán?","Emilio Salgari","Carlos Cuarteroni","Steve Reeves","Kabir Bedi"],
                ["¿Cuál es la identidad secreta de Don Diego de la Vega?","El Zorro","Batman","Íñigo Montoya","Lady Bug"],
                ["¿Qué mide en París alrededor de 333 metros?","La Torre Eiffel","La Torre de Pisa","El Miguelete","La torre de comunicaciones"]],
            "Ciencias y Naturaleza": [                
                ["¿Cómo se llaman las células nerviosas?","Neuronas","Nervios","Plaquetas","Café"],
                ["¿Qué es más valioso, un brillante o un diamante?","Un brillante","Un diamante","Un zafiro","Un Ferrari"],
                ["¿Cuál es el pájaro símbolo de la paz?","Paloma","Murcielago","Oso panda","Leon"],
                ["¿En qué mes el sol está más cerca de la Tierra?","Diciembre","Agosto","Verano","Marzo"],
                ["¿En qué parte del cuerpo se encuentra la piel más gruesa?","Espalda","Cara","Pies","Trasero"],
                ["¿A qué le tiene miedo una persona que sufre vértigo?","A las alturas","A las vértebras","Al vaiven de los barcos","A los espacios abiertos"],
                ["¿Cómo se llama la ciencia que estudia la sangre?","Hematología","Vampirología","Sanguinología","Venología"],
                ["¿Qué fabricó Alessandro Volta, por primera vez, en 1800?","Pila","Voltarén","Volta a Italia","Corriente alterna"],
                ["¿Cuál de los cinco sentidos se desarrolla el primero?","Olfato","Oido","Tacto","Gusto"],
                ["¿Cuál es el dedo más sensible de la mano?","Índice","Meñique","Anular","Corazón"]],
            "Deportes y Pasatiempos": [                  
                ["¿Qué pieza de ajedrez puede hacer un movimiento en forma de L?","Caballo","Torre","Reina","Borracho"],
                ["¿Cómo se llaman los deportistas que practican el judo?","Judokas","Karatekas","Artistas marciales","Judenses"],
                ["¿Qué deporte practican los Harlem Globetrotters?","Baloncesto","Viajan en globo","Futbol","Beisbol"],
                ["¿A cuántos puntos se disputa un set en el tenis de mesa?","Veintiuno","Cuarenta y cinco","El mejor de tres","Dos partes de 45 minutos cada una"],
                ["¿Qué obtienes si añades fruta fresca al vino tinto?","Sangría","Vino saludable","Ron","Manzanilla"],
                ["¿A qué equipo de fútbol pertenecía el estadio Metropolitano?","Atlético de Madrid","Metrópolis","Nueva York","Valencia"],
                ["¿En qué país se encuentra el circuito de Le Mans?","Francia","Jerez","Estados Unidos","Dubai"],
                ["¿Quién fueron los finalistas de baloncesto en los Juegos Olímpicos de Los Ángeles de 1984?","España y Estados Unidos","España y Japon","Estados Unidos y Japon","Estados Unidos y Francia"],
                ["¿Cuál era el nombre anterior de Muhammad Alí?","Cassius Clay","The Rock","Simbad","Poli Díaz"],
                ["¿Cuántos jugadores tiene un equipo de voleibol?","Seis","Once","Dos","Nueve"]],
            "Deportes y Pasatiempos": [ 
                ["¿Quién fue el primer presentador del concurso 'Un, dos, tres, responda otra vez' que se emitía en Televisión Española?","Kiko Ledgard","Mayra Gomez Kemp","Chicho Ibáñez Serrador","Chiquito de la calzada"],
                ["¿En qué popular serie de TV podemos ubicar a un personaje llamado Walter White?","En Breaking Bad","En Bonanza","En Fariña","Cuéntame como pasó"],
                ["¿Qué popular serie de Netflix nos habla sobre la vida del narcotraficante Pablo Escobar Gaviria?","Narcos","Fariña","Happy","Juego de tronos"],
                ["¿Qué actor interpreta el personaje de Leonard Hofstadter en la serie 'The Big Bang Theory'?","Johnny Galecki","Sheldon Cooper","Jim Parsons","Simon Helberg"],
                ["¿Cuál es el nombre de pila del aventurero Bear Grylls?","Edward","Jhon","Yogui","Alfred"],
                ["¿Cómo se llama el actor que interpreta al Dr House?","Hugh Laurie","Hugh Grant","Cary Grant","Cavadas"],
                ["¿Cuáles son los apellidos de los cirujanos que protagonizan la serie 'Nip/Tuck'?","McNamara y Troy","Jekyll y Hyde","Jack y TheRipper","Cyrus y Hemsworth"],
                ["¿Qué artista tiene en su poder más premios Grammy?","Georg Solti","Beyonce","Julio Iglesias","Billie Eilish"],
                ["¿Qué artista tiene en su poder más premios Emmy?","Julia Louis Dreyfus","Beyonce","Julio Iglesias","Regina King"],
                ["¿Qué jugador de la NBA fue pareja durante un tiempo de la popular Kim Kardashian?","Kris Humphries","Kanye West","Damon Thomas","Pau Gasol"]]};
        // Defino los 7 tipos de preguntas
        //let tipos = [geografia,entretenimiento,historia,arteLiteratura,cienciasNaturaleza,deportesPasatiempos,culturaPopular];
        // Creo la lista de preguntas
        let preguntas=[];
        for (const tipo in tipos){
            console.log(tipo);
            console.log(tipos[tipo]);
            preguntas.push(Pregunta.generaPregunta(tipos[tipo], tipo));
        }
        //let preguntas = tipos.map(tipo=>Pregunta.generaPregunta(tipo.valor,tipo.clave));
        console.log(preguntas);
        let listaPreguntas=[];
        for(const pregunta in preguntas){
            listaPreguntas.push(new Pregunta(preguntas[pregunta]));
            console.log(preguntas);
            console.log(listaPreguntas);
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
        }        
    }    
}
// Creo todas las preguntas necesarias para jugar multiples partidas

let juego = new Partida;
juego.jugar();
let nodoResultadosTexto=document.createTextNode(juego.resultados()+" ");
let nodoAciertosTexto=document.createTextNode("Aciertos: " + juego.aciertos +" ");
let nodoFallosTexto=document.createTextNode("Fallos: " + juego.fallos +" ");
document.getElementById("resultado").appendChild(nodoResultadosTexto);
document.getElementById("resultado").appendChild(nodoAciertosTexto);
document.getElementById("resultado").appendChild(nodoFallosTexto);

