function buscaminas_tabla() {

    let numero_random = Math.floor((Math.random() * 3) + 4);

    let tabla = document.getElementById("buscaminas");


    Dimension_tablero();


    function random_casilla() {


        return Math.floor((Math.random() * numero_random) + 1);


    }


    function Dimension_tablero() {


        for (let i = 0; i < numero_random; i++) {

            let nuevo_tr = document.createElement("TR");

            tabla.appendChild(nuevo_tr);


            for (let i = 0; i < numero_random; i++) {

                let count = -1;

                count++;

                let elemento = document.createElement("TH");

                elemento.innerHTML = '<img src="Fruta.png" alt="12" width="50" height="50" class="Fruta">';

                tabla.appendChild(elemento);

                let imagen = elemento.getElementsByClassName("Fruta")[count];


                elemento.addEventListener("click", function () {


                    if (imagen.className === "Fruta") {


                        elemento.innerHTML = "<img src=\"Banana.png\" alt=\"12\" width=\"50px\" height=\"50px\" class=\"Banana\">";


                    } else {


                    }


                }, false);


                nuevo_tr.appendChild(elemento);


            }


        }


        Calculos();


    }


    function Calculos() {


        const tabla = document.getElementById("buscaminas");


        for (let i = 0; i < numero_random; i++) {


            let columna_aleatoria = tabla.getElementsByTagName("TR")[i];

            let casilla_aleatoria = columna_aleatoria.getElementsByClassName("Fruta")[random_casilla() - 1];

            casilla_aleatoria.className = "mono";

            casilla_aleatoria.addEventListener("click", function () {
                casilla_aleatoria.innerHTML = '<img src="Monkey.png" alt="12" width="50px" height="50px" class="mono">';

                casilla_aleatoria.src = "Monkey.png";

                alert("Perdistes");

                opcion_reiniciar();
            });

        }

    }


    function opcion_reiniciar(){

        let reinicio = confirm("Reiniciar?")

        if (reinicio){

            location.reload();

        }else if (!reinicio) {

            document.getElementById("demo").innerHTML = "Game Over"

        }


    }



}