/*

Exercici 1

Dissenya un programa amb JavaScript i JQuery, format per una taula amb diverses files i dos botons.

En prémer el primer, es pintaran d'un color totes les files imparells; en prémer el segon,

es pintaran de verd les parells (tin en compte que les files comencen a numerar-se per la zero).


 */




$(function(){

    // document.ready o document.on(ready) estan en desuso
    // , de ahi el meter directamente la funcion en un parentesis comos selector para reemplaza en document.ready)


    $("#filas_pares").on('click',function () {


        $("#Ejercicio_1_div table tr").each(function (index) {


            if(index % 2 === 0){

                $(this).css("background-color", "green");

            }

        })


    });




    $("#filas_inpares").on("click",function () {

        $("#Ejercicio_1_div table tr").each(function (index) {


            if(index % 2 !== 0){

                $(this).css("background-color", "blue");

            }

        })



    })



});





