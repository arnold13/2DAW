/*

Emprant animate, crea un petit text  dins d’un div

(centrat, i que ocupi un 50% de l’ample de la finestra),

que es desplaçarà cap a la dreta uns 200 píxels, es farà un 50% més petit,

el farem un 80% transparent, augmentarem la vora del div en 5 píxels, i la mida de les fonts serà la meitat.


 */




$(function () {


    let div = $("#Ejercicio_5");

    let div_p = $("#Ejercicio_5 p:first-child");


    $("#boton_animar").on("click",function () {

        console.log();

        $("#Ejercicio_5")


            .animate({marginLeft: "+=200px"})
            .animate({width : (div.width() / 2).toString() })
            .animate({height : (div.height() / 2).toString() })



        $("#Ejercicio_5  p:first-child")

            .animate({borderWidth : "5px"})
            .animate({fontSize : div_p.css("font-size").split("px")[0] / 2 + "px"})
            .animate({opacity : "0.2"})





    })





});

/*



 */
