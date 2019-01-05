var Nueva_Ventana;

function Ventana_Nueva() {

    var pregunta_tiene_respuesta_valida = false;

    Nueva_Ventana = window.open("", "", "width=500, height=500");

    Nueva_Ventana.document.write("<h1> Aquesta és la finestra secundària </h1> <br><br> ");

    Nueva_Ventana.document.write('<td><input type="button" value="Cerrar Ventana" onclick="window.close()">');

    Nueva_Ventana.moveTo(30, 30);


    do {

        var pregunta = Nueva_Ventana.prompt("Com vols agrandir la finestra secundària: verticalment [V] o horitzontalment [H]?");


        if (pregunta == "V" || pregunta == "v") {

            pregunta_tiene_respuesta_valida = true;

            Max_ancho();

        } else if (pregunta == "H" || pregunta == "h") {

            pregunta_tiene_respuesta_valida = true;

            Max_Alto();

        }

    } while (!pregunta_tiene_respuesta_valida);

    function Max_ancho() {

        var altura_default = window.innerHeight;


        return Nueva_Ventana.resizeTo(


            Nueva_Ventana.screen.availWidth,
            altura_default);




    }

    function Max_Alto() {

        var Ancho_default = window.innerWidth;

        return Nueva_Ventana.resizeTo(


            Ancho_default,

            window.screen.availHeight);




    }
}