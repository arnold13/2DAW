/*

Estudiarem una mica el plugin jquery-ui. A l’adreça http://jqueryui.com/effect/

tenim exemples d’animació amb efectes molt més amplis que els que venen.


Observa els efectes shake, pulsate i Highlight


Crea un petit formulari amb un input (ubica’l dintre d’un div)  ,

en el qual quan premem submit comprova si has escrit alguna cosa.

Si no has escrit res, fes que passin els tres efectes (pots crea tres html,


un per cada efecte, o un de sol que encadeni els tres efectes) al div que conté l’input.



 */


function tres_efectos_jquery() {

    let input_ejercicio_8 = $("#Ejercicio_8 input:text");

    let div_ejercicio_8 = $("#Ejercicio_8");


    if(input_ejercicio_8.val() === "") {


        div_ejercicio_8.effect("shake");

        div_ejercicio_8.effect("pulsate",{times : 3},1000); // 3 veces el pulso de un maximo de 1 segundo para que se realize 3 veces.

        div_ejercicio_8.effect("highlight",{color: "blue"},1000); // Brillo en azul a su color estandar de una duracion total de 1 segundo.


        $("#Ejercicio_8 p").remove();

    }else{

        div_ejercicio_8.append("<p> Valor input: "+ input_ejercicio_8.val()  + "</p>")

    }

}