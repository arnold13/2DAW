$(function () {

Arrastrar();

});


function Arrastrar() {


    let productos_disponibles = $("#Caja_registradora #productos_disponibles img");

    let productos_vendidos = $("#Caja_registradora #productos_vendidos img");

    let imagen_click = false;

    let imagen_escogida;




    productos_disponibles

        .mousedown(function () {

            $("#info").text("Estas presionando el producto "+this.alt);

            imagen_escogida = this;

            imagen_click = true;


    })


        .mousemove(function () {

            if(imagen_click === false) return ;


            $("#info").text("Estas moviendo el producto "+this.alt);



        });





    productos_vendidos

        .mouseup(function () {


            $("#info").text("Producto "+imagen_escogida.alt + " vendido con exito");

            $("#Caja_registradora #productos_vendidos ul").append("<li><img src='"+imagen_escogida.src+"' alt='"+imagen_escogida.alt+"'></li>")

            imagen_escogida.remove();

            imagen_click = false;





        });




}