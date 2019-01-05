var puntuacion = 0;

var baldosas_totales = ["baldosa1", "baldosa2", "baldosa3", "baldosa4", "baldosa5", "baldosa6", "baldosa7", "baldosa8", "baldosa9", "baldosa10", "baldosa11", "baldosa12", "baldosa13", "baldosa14", "baldosa15", "baldosa16"]

var baldosas_disponibles = ["baldosa1", "baldosa2", "baldosa3", "baldosa4", "baldosa5", "baldosa6", "baldosa7", "baldosa8", "baldosa9", "baldosa10", "baldosa11", "baldosa12", "baldosa13", "baldosa14", "baldosa15", "baldosa16"]

var colores_baldosas = [];

var baldosas_acumuladas = [];

var baldosas_acumuladas_nombres = [];

var HardMode = false;

var ronda = 0;

function Baldosa_aleatoria() {


    var nombre_baldosa = function() {



        var baldosa_rnd = baldosas_disponibles[Math.floor(Math.random() * baldosas_disponibles.length)]

        var baldosa_elegida = baldosa_rnd;

        baldosas_disponibles.splice(baldosas_disponibles.indexOf(baldosa_elegida), 1);



        return baldosa_elegida;



    };



    var color_baldosa = function() {

        var letters = '0123456789ABCDEF';

        var color = '#';

        for (var i = 0; i < 6; i++) {

            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;

    };


        Baldosa_aleatoria.nombre_baldosa = nombre_baldosa;



    return document.getElementById(nombre_baldosa()).style.backgroundColor = color_baldosa();

}







function start() {

    var int_count = 0;


    var tiempo_de_reaccion = function() {



        if (HardMode == true) {

            return 500;

        } else if (HardMode == false) {

            return 1000;

        }
    }




    var activacion_juego = setInterval(function() {


        console.log(int_count)

        if (int_count == 1) {


            clearInterval(activacion_juego);

        }

        if (ronda < 8) {

            juego();

            ronda++;

            int_count++;


        } else {

            clearInterval(activacion_juego)


        }







    }, tiempo_de_reaccion())









}


function juego() {



    switch (ronda) {

        case 0:
            alert("El juego empieza");
            alert("Ronda 1");
            break;

        case 2:
            alert("Ronda 2");
            break;

        case 4:
            alert("Ronda 3");
            break;

        case 6:
            alert("Ronda 4");
            break;

        case 8:
            return alert("Ganastes");
            break;

    }


var Baldosa_guardada = Baldosa_aleatoria();



    baldosas_acumuladas += Baldosa_guardada

    console.log(Baldosa_aleatoria.nombre_baldosa())




    for (var i = 0; i < baldosas_acumuladas.length; i++) {




    }







    setTimeout(function() {


        for (var y = 0; y < baldosas_totales.length; y++) {

            document.getElementById(baldosas_totales[y]).style.backgroundColor = "white";

        }

    }, 1000)




console.log(baldosas_acumuladas)



baldosas_acumuladas_nombres.push(Baldosa_aleatoria.nombre_baldosa())



console.log(baldosas_acumuladas_nombres)

console.log(baldosas_acumuladas_nombres.length)






}


function Tecla_simon(elemento) {


    var juego_de_baldosas = [];



    console.log(elemento.id)




}




function Modo_Dificil() {

    HardMode = true;

    return start();

}