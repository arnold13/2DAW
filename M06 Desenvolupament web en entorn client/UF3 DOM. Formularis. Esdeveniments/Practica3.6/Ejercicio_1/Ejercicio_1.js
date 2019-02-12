
$(function () {

    bombilla_switch();

    calculadora_potencia();

    reloj();
});


function bombilla_switch() {


    let imagen_bombilla = $("#bombilla img:eq(0)");

    imagen_bombilla.on("dblclick",function () {

        imagen_bombilla.attr("src","../pr3.6. material bombeta/lamp_off.jpg")

    });

    imagen_bombilla.on("click",function () {

        imagen_bombilla.attr("src","../pr3.6. material bombeta/lamp_on.jpg")

    })

}


function calculadora_potencia(){

    let input_text = $("#calculadora input:text:eq(0)");

    let boton_duplicador = $("#calculadora input:button:eq(0)");


    input_text.on("click",function () {

        input_text.val("");

    });


    boton_duplicador.on("click",function () {


        input_text.val(input_text.val() * input_text.val());

    });


}



function reloj() {


    let reloj = function(){

      return $("#reloj p:eq(0)").html(new Date());

    };

    reloj();

    setInterval(reloj,1000);

}

