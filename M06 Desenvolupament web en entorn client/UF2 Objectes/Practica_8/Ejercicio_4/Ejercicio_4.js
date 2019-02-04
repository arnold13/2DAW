/*

Fer una pàgina web amb un <ul> i quatre <li>  a dins i dos botons.

Quan fem click a cada <li> aquest desapareix en 1 segon (1000 ms).

Un dels botons revisualitza “tots” els <li> en uns 200 ms  i el segon botó els fa desaparèixer tots en 600 ms.

Emprar l’objecte jQuery.fx.speeds


 */


$(function () {

    jQuery.fx.speeds.un_segundo = 1000;

    jQuery.fx.speeds.un_quinto_de_segundo = 200;

    jQuery.fx.speeds.tres_quintos_de_segundo = 600;


    $("#Ejercicio_4 li").on("click", function () {

        console.log("a");


        $(this).fadeOut("un_segundo");


    });


    $("#desaparecer_column").on("click",function () {

        $("#Ejercicio_4 li").fadeOut("tres_quintos_de_segundo");


    });



    $("#aparecer_column").on("click",function () {

        $("#Ejercicio_4 li").fadeIn("un_quinto_de_segundo");


    })




});