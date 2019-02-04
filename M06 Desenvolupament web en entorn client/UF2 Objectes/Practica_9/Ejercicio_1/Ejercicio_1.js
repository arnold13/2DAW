/*

Seleccionar tots els elements div que tinguin la classe “module”

i fes que la mida de la lletra sigui de 40px i el text estigui alineat al centre.

---


Seleccionar tots els enllaços senars i canviar el seu atribut href a “informatica.iesjoaquimmir.cat”

---

Selecciona únicament el darrer enllaç i canvia-li el text a “Pàgina canviada”. Fes-ho de dues formes

---

Selecciona únicament el primer enllaç i canvia-li el color a vermell. Fes-ho de dues formes.

---

Modifica l’HTML de forma que s’apliqui el següent codi

$('ul li').filter('.current').css(‘color’,’yellow’);

---

Modifica tots els div per a que tinguin la classe “complet”.

Encabat estableix les propietats css background-color i fontsize

---

Fes el mateix que l’anterior però per als div sense classe del document.

Encabat afegeix tres propietats CSS (color,background-color,fontsize) a aquests divs.

---

Afegeix un <ul> amb 10 <li>  (aprofita l’anterior si vols) i fes que el text de cada element sigui

“Element:  “ + número d’element .

Recorre tots els <li> per a fer-ho

---

Afegeix una segon bloc de <ul><li>.....</ul> i fes que a cada <li> surti un valor aleatori.

Ha de coexistir amb l’anterior exercici 8, per tant afegeix alguna cosa per a que distingeixi un bloc de l’altre

---

Amb un alert mostra quants <li> hi ha al document

---

Crea una taula amb 9 cel·les (3 fileres i 3 columnes).

Fes que canvii el color de fons de dues cel·les.

Generem dos números aleatoris entre 0 i 8  i canviem el color de la cel·la corresponent

---

Compta el número d’imatges amb l’atribut alt

---

Canvia la mida de les imatges a un 200% de la seva mida.

---

Recorre totes les imatges amb alt i mostra el valor de la propietat “alt” de cadascuna.

Fes-ho de dues formes: una especificant a la selecció que les imatges tinguin l’atribut “alt”,

i l’altra especificant a la selecció totes les imatges i comprovant, en recorre-les, si tenen l’atribut “alt” (amb un if)

 */



$(function () {

    let boton = false;

    $("#boton_ejercicio_1").on("click",function () {

        if(boton === false){

            Punto_1();
            Punto_2();
            Punto_3();
            Punto_4();
            Punto_5();
            Punto_6();
            Punto_7();
            Punto_8();
            Punto_9();
            Punto_10();
            Punto_11();
            Punto_12();
            Punto_13();
            Punto_14();




            boton = true;
            // Solo se acciona 1 vez.
        }

    });

});



function Punto_1() {


    let div_punto_1 = $("#Ejercicio_1_Punto_1 .module");

    div_punto_1

        .css("font-size", "40px")
        .css("text-align", "center");

}


function Punto_2(){

    let div_punto_2_enlaces = $("#Ejercicio_1_Punto_2 a");

    div_punto_2_enlaces.each(function (key,value) { // primer parametro each = llave del valor del array || segundo parametro each valor del array ambos de tipo Object



        if(key % 2 === 1){

            $(value).attr("href", "https://agora.xtec.cat/iesjoaquimmir/coordinacio-informatica/");

            // attr es una etiqueta JQuery que solo funciona con selectores JQuery, para usarlo con el objeto valor, primero lo debemos pasar a un objeto para JQuery, y eso lo hacemos insertandolo dentro del selector.

            $(value).text("Enlace nuevo apuntando al departamento de informatico del JMIR");

        }

    });

}


function Punto_3(){

    let div_punto_3_enlaces = $("#Ejercicio_1_Punto_3 a");

    let ultimo_enlace_forma_1 = $(div_punto_3_enlaces[div_punto_3_enlaces.length - 1]);

    let ultimo_enlace_forma_2 = $(div_punto_3_enlaces.last());


    $("#Ejercicio_1_Punto_3")

        .append("<p> Forma 1: "+ ultimo_enlace_forma_1.text() +"</p>")
        .append("<p> Forma 2: "+ ultimo_enlace_forma_2.text()+"</p>");


    ultimo_enlace_forma_2.text("Pagina cambiada");
    
}


function Punto_4() {

    let div_punto_3_enlaces = $("#Ejercicio_1_Punto_4 a");

    let primer_enlace_forma_1 = $(div_punto_3_enlaces[0]);

    let primer_enlace_forma_2 = $(div_punto_3_enlaces.first());


    $("#Ejercicio_1_Punto_4")

        .append("<p> Forma 1: "+ primer_enlace_forma_1.text() +"</p>")
        .append("<p> Forma 2: "+ primer_enlace_forma_2.text()+"</p>");


    primer_enlace_forma_2.css("color","red");


}


function Punto_5(){


    $('#Ejercicio_1_Punto_5 ul li').filter('.current')

        .css("color","yellow")
        .css("width","50px")
        .css("backgroundColor","Grey")


}


function Punto_6(){

    $("#Ejercicio_1_Punto_6 div").each(function (key,value) {

        let $value = $(value);


        $value.addClass("complet");

    });


    $("#Ejercicio_1_Punto_6 .complet").each(function (key,value) {

        let $value = $(value);

        $value

            .css("backgroundColor","red")
            .css("font-size","20px")

    })

}


function Punto_7(){



    $("#Ejercicio_1_Punto_7 div").each(function (key,value) {

        let $value = $(value);

        if($value.hasClass("")){


            $value

                .css("backgroundColor","red")
                .css("font-size","20px")

        }


    })



}


function Punto_8(){

    $("#Ejercicio_1_Punto_8 li").each(function (key,value) {

        let $value = $(value);

        $value.append("<b>"+ key +"</b>")


    })



}


function Punto_9() {

    $("#Ejercicio_1_Punto_9 ul:eq(0) li").each(function (key, value) {

        let $value = $(value);

        $value.append("<b>" + key + "</b>")


    });

    $("#Ejercicio_1_Punto_9 ul:eq(1) li").each(function (key, value) {

        let numero_de_li = $("#Ejercicio_1_Punto_9 ul:eq(1) li").length - 1;

        let $value = $(value);

        $value.append("<b>" + Math.floor(Math.random() * (numero_de_li + 1)) + "</b>")


    })
}


function Punto_10(){

    let numero_de_li = $("#Ejercicio_1_Punto_10 li").length;

    alert("Ejercicio_1 / Punto 10 : Numero de li´s : " + numero_de_li);


}


function Punto_11() {

    let td_array_jquery = $("#Ejercicio_1_Punto_11 td");

    let numero_aleatorio_td = function () {

       return Math.floor(Math.random()  * td_array_jquery.length)

    };


    $(td_array_jquery[numero_aleatorio_td()])

        .css("backgroundColor","red");





    $(td_array_jquery[numero_aleatorio_td()])

        .css("backgroundColor","red");





    
}


function Punto_12(){


let numero_de_imagenes_con_alt = 0;

$("#Ejercicio_1_Punto_12 img").each(function () {



    if($(this).attr("alt") !== undefined){

        numero_de_imagenes_con_alt++;

    }



});

    $("#Ejercicio_1_Punto_12").append("<p align='center'>Numero de imagenes con alt: "+ numero_de_imagenes_con_alt +"</p>")

}


function Punto_13(){

    let imagenes_div =  $("#Ejercicio_1_Punto_13 img");


    imagenes_div.width((imagenes_div.width() * 2));

    imagenes_div.height((imagenes_div.height() * 2));
    
}


function Punto_14() {

    let Forma_1 = $("#Ejercicio_1_Punto_14 img").filter("[alt]").length;

    /**
     * @return {number}
     */
    let Forma_2 = function(){

        let numero_de_imagenes_con_alt = 0;

        $("#Ejercicio_1_Punto_14 img").each(function () {



            if($(this).attr("alt") !== undefined){

                numero_de_imagenes_con_alt++;

            }



        });

        return numero_de_imagenes_con_alt

    };




    $("#Ejercicio_1_Punto_14")

        .append("<p>Numero de imagenes con alt con la forma 1: "+ Forma_1 +"</p>")
        .append("<p>Numero de imagenes con alt con la forma 2: "+ Forma_2() +"</p>")





}
