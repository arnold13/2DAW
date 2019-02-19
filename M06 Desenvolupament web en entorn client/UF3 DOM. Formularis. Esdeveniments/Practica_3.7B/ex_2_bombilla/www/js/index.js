
$(function () {

    bombilla_switch();

    calculadora_potencia();

    reloj();
});


function bombilla_switch() {



// Bombilla actualizada =  Funciona con movil tambien, su funcionamiento es simple, si el segundo click se hizo en menos

    // de 800ms , este sera visto como dobleclick, en caso de no, sera visto como un simple click;


    let imagen_bombilla = $("#bombilla img:eq(0)");

    let touchtime = 0;
    imagen_bombilla.on("click", function() {
        if (touchtime === 0) {
            // set first click
            imagen_bombilla.attr("src","pr3.6. material bombeta/lamp_on.jpg")

            touchtime = new Date().getTime();

        } else {
            // compare first click to this click and see if they occurred within double click threshold
            if (((new Date().getTime()) - touchtime) < 800) {
                // double click occurred
                imagen_bombilla.attr("src","pr3.6. material bombeta/lamp_off.jpg")
                touchtime = 0;
            } else {
                // not a double click so set as a new first click
                imagen_bombilla.attr("src","pr3.6. material bombeta/lamp_on.jpg")

                touchtime = new Date().getTime();

            }
        }
    });



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
