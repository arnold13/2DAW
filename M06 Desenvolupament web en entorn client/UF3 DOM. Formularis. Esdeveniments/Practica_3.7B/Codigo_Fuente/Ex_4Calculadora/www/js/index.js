$(function () {

    f_input_text();

    f_operaciones();

    f_igual();

});



let input_css_selector = "#calculadora_ex4 input:text:eq(0)";

let primer_valor;

let segundo_valor;

let operacion;


function f_input_text(){

    $(input_css_selector).on("click",function () {

        $(input_css_selector).val("");

    });

    return $(input_css_selector).val("");

}



function f_operaciones(){


    let botones_calculadora =  $("#calculadora_ex4 input:button:not(input[value='='])");



    botones_calculadora.on("click",function () {

        primer_valor = $(input_css_selector).val();

        f_input_text();

    });


    for(let prop of botones_calculadora ){

        $(prop).on("click",function () {

            operacion = $(prop).val();


        });


    }




}

function f_igual() {


    $("#calculadora_ex4 input[value='=']").on("click",function (){


        segundo_valor = $(input_css_selector).val();
        /*
                console.log(primer_valor);
                console.log(segundo_valor);
                console.log(operacion);


                <input type="button" value="Sumatorio">
               <input type="button" value="Producto">
        */


        let calcular = function(){


            switch (operacion) {

                case "+":

                    return Number(primer_valor) + Number(segundo_valor);

                case "-":

                    return Number(primer_valor) - Number(segundo_valor);

                case "*":

                    return Number(primer_valor) * Number(segundo_valor);

                case "/":

                    return Number(primer_valor) / Number(segundo_valor);

                case "x^y":

                    return  Math.pow(Number(primer_valor),Number(segundo_valor));

                case "x^2":

                    return Math.pow((primer_valor),2);

                case "1/x":

                    return 1/Number(primer_valor);

                case "√":

                    return Math.sqrt(Number(primer_valor));

                case "parte entera":

                    return Math.trunc(Number(primer_valor));

                case "2^n":

                    return Math.pow(2,primer_valor);

                case "n!":

                    var total = 1;
                    for (let i=1; i<=Number(primer_valor); i++) {
                        total = total * i;
                    }

                    return total;

                case "Sumatorio":

                    const array_sumatorio = [primer_valor,segundo_valor];

                    const reducer = (accumulator, currentValue) => accumulator + currentValue;

                    return array_sumatorio.reduce(reducer);

                case "Producto":

                    const array_producto = [primer_valor,segundo_valor];


                function product(input){
                    if (toString.call(input) !== "[object Array]")
                        return false;

                    var total   =   1;

                    for(var i=0;i<input.length;i++){
                        if(isNaN(input[i])){
                            continue;
                        }
                        total   *=  Number(input[i]);
                    }
                    return total;
                }


                    return product(array_producto);


            }

        };


        return $(input_css_selector).val(calcular());


    });


}