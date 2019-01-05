


function Afegir_fila() {


    let tabla = document.getElementById("Tabla_modificable");

    let nuevo_tr = document.createElement("TR");

    tabla.appendChild(nuevo_tr);


    for(let i = 1;i<4;i++){

       let elemento = document.createElement("TH");

        elemento.innerHTML = "Fila "+tabla.childElementCount+" Cel.la "+i;

       nuevo_tr.appendChild(elemento);

    }


}



function Eliminar_fila(){

    let tabla = document.getElementById("Tabla_modificable");

    tabla.removeChild(tabla.childNodes[tabla.childElementCount]);



}