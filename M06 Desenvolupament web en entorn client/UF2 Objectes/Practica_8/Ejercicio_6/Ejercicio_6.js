/*

Emprant  el plugin

<script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script>

Farem una animació de color  de l’anterior document. Partirem d’un color de fons del div gris i el convertirem en groc.

El color del text serà inicialment blau i acabarà sent vermell.

Cal emprar backgroundColor i color  com a propietats dins d’animate per a crear l’animació del color.



 */





$(function () {


    let div = $("#Ejercicio_6");

    let div_p = $("#Ejercicio_6 p:first-child");


    $("#boton_animar").on("click",function () {

        console.log();

        $("#Ejercicio_6")


            .animate({marginLeft: "+=200px"})
            .animate({width : (div.width() / 2).toString() })
            .animate({height : (div.height() / 2).toString() })
            .animate({backgroundColor: "yellow"})



        $("#Ejercicio_6  p:first-child")

            .animate({borderWidth : "5px"})
            .animate({fontSize : div_p.css("font-size").split("px")[0] / 2 + "px"})
            .animate({opacity : "0.2"})
            .animate({color : "red"})





    })





});

/*



 */
