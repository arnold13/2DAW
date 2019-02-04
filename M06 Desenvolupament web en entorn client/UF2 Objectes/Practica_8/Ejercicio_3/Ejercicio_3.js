/*

Crea una taula amb quatre elements.

En cada cel·la ubica una imatge, de forma que quan fem clic desaparegui la imatge

i dos segons després torni a aparèixer.


 */



$(function () {

    $("#Ejercicio_3 td img").on("click",function () {

        let self = this;

        $.when($(this).fadeOut(1500)).then(function() {



            setTimeout(function () {


                $(self).fadeIn(1500);


            },2000);



        });










    })




});