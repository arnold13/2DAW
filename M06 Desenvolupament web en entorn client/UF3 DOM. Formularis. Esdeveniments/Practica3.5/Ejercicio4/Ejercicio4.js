function Caja_registradora() {

    let caja_registradora_img = document.getElementById("Personajes_vendidos").getElementsByTagName("IMG")[0];

    let tabla_personajes_en_venta = document.getElementById("Personajes_disponibles").getElementsByTagName("IMG");

    let personajes_vendidos =  document.getElementById("Personajes_vendidos").getElementsByTagName("TABLE")[0];

    let img;


    caja_registradora_img.addEventListener("drop", drop_handler);

    caja_registradora_img.addEventListener("dragover", dragover_handler);

    for (let element of tabla_personajes_en_venta) {

        element.addEventListener("dragstart", function dragstart_handler() {



            img = new Image();
            img.src = element.src; // Al enviar la ubicacion de la imagen esta aparecera con su tamaño original



        }, true);


    }




    function dragover_handler(ev) {

            ev.preventDefault();

    }


    function drop_handler(ev) {

        ev.preventDefault();



                let nuevo_tr = document.createElement("TR");

                let nuevo_td = document.createElement("TD");

                nuevo_td.innerHTML = img.outerHTML;

                personajes_vendidos.appendChild(nuevo_tr);

                nuevo_tr.appendChild(nuevo_td);



        ev.dataTransfer.clearData();
    }


}