/*

Encadena les dues animacions anteriors.

Ho pots fer aprofitant la funció que s’executa quan s’acaba una animació.

A dintre hi posem el codi de la següent animació.


 */





$(function () {


    let div = $("#Ejercicio_7");

    let div_p = $("#Ejercicio_7 p:first-child");


    $("#boton_animar").on("click",function () {


        animando_div(div,div_p);


    });




});


function animando_paragrafo(div_p){

    $("#Ejercicio_7  p:first-child")

        .animate({borderWidth : "5px"})
        .animate({fontSize : div_p.css("font-size").split("px")[0] / 2 + "px"})
        .animate({opacity : "0.2"})
        .animate({color : "red"})


}


function animando_div(div,div_p) {

    $("#Ejercicio_7")


        .animate({marginLeft: "+=200px"})
        .animate({width : (div.width() / 2).toString() })
        .animate({height : (div.height() / 2).toString() })
        .animate({backgroundColor: "yellow"},200,function () {


            animando_paragrafo(div_p);

        })


}
