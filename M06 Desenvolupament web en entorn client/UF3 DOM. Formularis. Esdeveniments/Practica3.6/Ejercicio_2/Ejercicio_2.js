
$(function () {

   let dropbar_li = $("#dropbar li:not(:first)");

   let dropbar_switch = false;

    dropbar_li.hide();

    $("#dropbar li:first").on("click",function () {

        if(dropbar_switch === false){

            dropbar_switch = true;

            dropbar_li.show();

            dropbar_li.on("click",function () {

                alert("Pulsastes el li numero " + (dropbar_li.index(this) + 1));

            });


        }else if (dropbar_switch === true){

                dropbar_switch = false;

                dropbar_li.hide();

                dropbar_li.off("click");


            }

    });





});