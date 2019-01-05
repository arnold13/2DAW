function movimiento_der_alumnos(){

let selector = document.getElementById("lista_alumnos_A");

let selector_lista_ajena = document.getElementById("lista_alumnos_B");

let opcion_escogida = selector.selectedIndex;

let nombre_alumno_escogido = selector.options[opcion_escogida].value;

let opcion_añadida = document.createElement("option");

opcion_añadida.text = nombre_alumno_escogido;

return [selector_lista_ajena.add(opcion_añadida),selector.remove(nombre_alumno_escogido)];



}


function movimiento_izq_alumnos() {

    let selector = document.getElementById("lista_alumnos_B");

    let selector_lista_ajena = document.getElementById("lista_alumnos_A");

    let opcion_escogida = selector.selectedIndex;

    let nombre_alumno_escogido = selector.options[opcion_escogida].value;

    let opcion_añadida = document.createElement("option");

    opcion_añadida.text = nombre_alumno_escogido;

    return [selector_lista_ajena.add(opcion_añadida),selector.remove(nombre_alumno_escogido)];


}