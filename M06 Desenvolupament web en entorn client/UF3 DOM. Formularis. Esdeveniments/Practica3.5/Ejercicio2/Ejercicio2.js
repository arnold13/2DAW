function desplegable(){

    let pestana_flotante = document.getElementsByClassName("dropdown")[0];

    let pestanas_plegables = document.getElementsByClassName("dropdown-content")[0].getElementsByTagName("A");

    let estatus_pestana = false;

    let div_plegable = document.getElementsByClassName("dropdown-content")[0];



    pestana_flotante.addEventListener("click",switch_menu,true);


    function switch_menu(){


        if(estatus_pestana){

            estatus_pestana = false;

            div_plegable.style.display = "none";




        }else{


            estatus_pestana = true;

            div_plegable.style.display = 'block';

            menu_flotante()


        }

    }

    function menu_flotante(){

        let opcion_1 = pestanas_plegables[0];

        opcion_1.addEventListener("click",function () {

            document.getElementById("demo").innerText = "Pulsastes el boton 1";


        },false);

        let opcion_2 = pestanas_plegables[1];

        opcion_2.addEventListener("click",function () {

            document.getElementById("demo").innerText = "Pulsastes el boton 2";

        },false);

        let opcion_3 = pestanas_plegables[2];

        opcion_3.addEventListener("click",function () {

            document.getElementById("demo").innerText = "Pulsastes el boton 3";

        },false);

    }


}