
/*

Crea una taula amb 4 cel·les, cadascuna amb una imatge.

A mode comprovació de com funcionen els parells de mètodes [show, hide],

[fadeIn, fadeOut], [slideDown,slideUp] i [slideToggle] fes que en fer click sobre la cel·la…

    1. Desaparegui en fer click, reaparegui al següent click, etc..
    2. Fer fadeIn al primer click, fadeOut al següent, fadeIn al següent, etc…
    3. slideDown al primer click, slideUp al següent….
    4. Fer un Toggle a cada click

 */




$(function () {



    //<editor-fold desc="Imagen 1">

    $("#Ejercicio_2 td:eq(0) img:eq(0)").hide();


    $("#Ejercicio_2 td:eq(0)").on("click",function () {

        if($("#Ejercicio_2 td:eq(0) img:eq(0)").is(":visible")){


            $("#Ejercicio_2 td:eq(0) img:eq(0)").hide();

            $("#Ejercicio_2 td:eq(0)").append("<p> Pulsar aqui para recuperar la imagen </p>")


        }else{

                $("#Ejercicio_2 td:eq(0) p").remove();

                $("#Ejercicio_2 td:eq(0) img:eq(0)").show();

        }

    });
    //</editor-fold>

    //<editor-fold desc="Imagen 2">

    $("#Ejercicio_2 td:eq(1) img:eq(0)").hide();


    $("#Ejercicio_2 td:eq(1)").on("click",function () {




        if($("#Ejercicio_2 td:eq(1) img:eq(0)").is(":visible")){

           $.when( $("#Ejercicio_2 td:eq(1) img:eq(0)").fadeOut()).then(function(){

               $("#Ejercicio_2 td:eq(1)").append("<p> Pulsar aqui para recuperar la imagen con fadeout </p>")


           });

        }else{


            $("#Ejercicio_2 td:eq(1) p").remove();

            $("#Ejercicio_2 td:eq(1) img:eq(0)").fadeIn();



        }

    });
    //</editor-fold>

    //<editor-fold desc="Imagen 3">

    $("#Ejercicio_2 td:eq(2) img:eq(0)").hide();


    $("#Ejercicio_2 td:eq(2)").on("click",function () {


        if($("#Ejercicio_2 td:eq(2) img:eq(0)").is(":visible")){


            $("#Ejercicio_2 td:eq(2) img:eq(0)").slideUp();

            $.when($("#Ejercicio_2 td:eq(2) img:eq(0)").slideUp()).then(function () {

                $("#Ejercicio_2 td:eq(2)").append("<p>Se ejecuto slidedown,pulsar otra vez para ejecutar slideup</p>");


            });




        }else{

            $("#Ejercicio_2 td:eq(2) p").remove();

            $("#Ejercicio_2 td:eq(2) img:eq(0)").slideDown();


        }


    })
    //</editor-fold>

    //<editor-fold desc="Imagen 4">
    $("#Ejercicio_2 td:eq(3) img:eq(0)").hide();

    $("#Ejercicio_2 td:eq(3)").on("click",function() {



        if( $("#Ejercicio_2 td:eq(3) img:eq(0)").is(":visible")){

            $("#Ejercicio_2 td:eq(3) img:eq(0)").slideToggle();

            $("#Ejercicio_2 td:eq(3)").append("<p>La imagen no esta visible, pulsar otra vez para recuperarla con slidetoogle</p>")




        }else{



            $("#Ejercicio_2 td:eq(3) img:eq(0)").slideToggle();

            $("#Ejercicio_2 td:eq(3) p").remove();



        }



    });
    //</editor-fold>




});