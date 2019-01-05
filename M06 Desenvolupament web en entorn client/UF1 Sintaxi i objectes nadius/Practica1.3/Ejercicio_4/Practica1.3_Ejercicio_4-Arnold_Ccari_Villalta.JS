var puntuacion = 0;

var baldosas_totales = ["baldosa1", "baldosa2", "baldosa3", "baldosa4", "baldosa5", "baldosa6", "baldosa7", "baldosa8", "baldosa9", "baldosa10", "baldosa11", "baldosa12", "baldosa13", "baldosa14", "baldosa15", "baldosa16"]

var baldosas_disponibles = ["baldosa1", "baldosa2", "baldosa3", "baldosa4", "baldosa5", "baldosa6", "baldosa7", "baldosa8", "baldosa9", "baldosa10", "baldosa11", "baldosa12", "baldosa13", "baldosa14", "baldosa15", "baldosa16"]

var colores_baldosas = [];

var baldosas_acumuladas = [];

var baldosas_acumuladas_nombres = [];

var juego_de_baldosas = [];

var HardMode = false;

var ronda = 0;

var aviso_1_reproducido = false;

var aviso_2_reproducido = false;

var aviso_3_reproducido = false;

var tiempo_de_reaccion_var = 0;





function Baldosa_aleatoria() {


    this.nombre_baldosa = function() {



        var baldosa_rnd = baldosas_disponibles[Math.floor(Math.random() * baldosas_disponibles.length)]

        var baldosa_elegida = baldosa_rnd;

        baldosas_disponibles.splice(baldosas_disponibles.indexOf(baldosa_elegida), 1);



        return baldosa_elegida;



    };


    this.color_baldosa = function() {

        var letters = '0123456789ABCDEF';

        var color = '#';

        for (var i = 0; i < 6; i++) {

            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;

    };






}







function start() {



    var int_count = 0;


    var tiempo_de_reaccion = function() {



        if (HardMode == true) {

            tiempo_de_reaccion_var = 500;

            return tiempo_de_reaccion_var;

        } else if (HardMode == false) {

            tiempo_de_reaccion_var = 1000;

            return tiempo_de_reaccion_var;

        }
    }




    var activacion_juego = setInterval(function() {


        console.log(int_count)

        if (int_count == 1) {


            clearInterval(activacion_juego);

        }

        if (ronda < 8) {

            juego();



            int_count++;


        } else {

            clearInterval(activacion_juego)


        }







    }, tiempo_de_reaccion())









}


function juego() {


juego_de_baldosas = [];


console.log(juego_de_baldosas)

console.log(ronda)


var nueva_baldosa = new Baldosa_aleatoria();

  var Nombre = nueva_baldosa.nombre_baldosa();

    var Color = nueva_baldosa.color_baldosa();

    document.getElementById(Nombre).style.backgroundColor = Color

        baldosas_acumuladas.push(Color)

        baldosas_acumuladas_nombres.push(Nombre)

        console.log(ronda)

        console.log(Nombre)

        console.log(baldosas_acumuladas)

        console.log(baldosas_acumuladas_nombres)











    setTimeout(function() {


        for (var y = 0; y < baldosas_totales.length; y++) {

            document.getElementById(baldosas_totales[y]).style.backgroundColor = "white";

        }

    }, 2000)











}


function Tecla_simon(elemento) {




    juego_de_baldosas.push(elemento.id);

    console.log(juego_de_baldosas)

    console.log(baldosas_acumuladas_nombres)




    for(var i = 0; i < juego_de_baldosas.length; i++){

        if(juego_de_baldosas.indexOf(baldosas_acumuladas_nombres[i], i) != -1){

            puntuacion += 150;



            console.log(puntuacion);


        } else if (juego_de_baldosas.indexOf(baldosas_acumuladas_nombres[i], i) == -1) {

            alert("Error!")

            window.location.reload();

        }

    }

    ronda = juego_de_baldosas.length;

    console.log(ronda)


 switch (ronda) {


        case 2:



            if (aviso_1_reproducido == false) {

                 alert("Ronda 2");

                 start();

            }

                aviso_1_reproducido = true;


             


            break;

        case 4:

             if (aviso_2_reproducido == false) {

                 alert("Ronda 3");

                start();


            }

                aviso_2_reproducido = true;



            break;

        case 6:
              if (aviso_3_reproducido == false) {

                 alert("Ronda 3");

                start();


            }

                aviso_3_reproducido = true;



            break;

        case 8:
            return alert("Ganastes");
            break;

    }



}




function Modo_Dificil() {

    HardMode = true;

    return start();

}