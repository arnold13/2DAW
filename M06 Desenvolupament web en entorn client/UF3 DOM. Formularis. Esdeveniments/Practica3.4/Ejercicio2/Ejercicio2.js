function recogida_de_informacion() {

    let nombre = document.getElementById("nombre");

    let telefono = document.getElementById("telefono");

    let email = document.getElementById("email");


    return [nombre,telefono,email];
}



function Enviar_formulario() {

    let informacion_usuario = recogida_de_informacion();

    let tabla = document.getElementById("formulario");

    let nuevo_tr = document.createElement("TR");

    tabla.appendChild(nuevo_tr);


    for(let i = 0;i<3;i++){



            let elemento = document.createElement("TH");

            elemento.innerHTML = informacion_usuario[i].value;

            nuevo_tr.appendChild(elemento);





    }




}