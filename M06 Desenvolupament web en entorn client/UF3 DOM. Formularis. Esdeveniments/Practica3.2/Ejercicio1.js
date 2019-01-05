//<editor-fold desc="Enunciado">
// Nom: nom i cognom (al menys el primer cognom), amb inicial en majúscules, i separats el nom del cognom per un espai en blanc.
//     Edat: número entre 18 i 99.
// Comentaris: he de tenir un caràcter "#" i no ha de tenir els insults "bobo" i "tonto".
//     Email: ha de ser una adreça vàlida.
//</editor-fold>

//<editor-fold desc="Funciones_Secundarias relacionados al Regex (Herramientas)">
function regex_nombre(nombre){

    const regex = new RegExp("\\b[A-Z][a-z]* [A-Z][a-z]* [A-Z][a-z]*( [A-Z])?\\b");

    return regex.test(nombre);

    // Nota: Este regex aceptara solo 3 caracteres como respuesta (Nombre+Apellido+Apellido, si insertas menos o mas
    // devolvera falso.

}

function regex_edad(edad){

    const regex = new RegExp("^(1[89]|[2-9][0-9])$");

    return regex.test(edad);


}

function regex_email(email){

    const regex = new RegExp("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$");

    return regex.test(email);

}

function regex_comentario (comentario) {

    const regex = new RegExp("^#\\b(?!bobo|tonto)\\b\\S+");

    return regex.test(comentario);


}


function opcion_escogida_selector(){

    let selector_respuesta = document.getElementById("selector_pregunta");

    let selector_opcion_escogida = selector_respuesta.selectedIndex;

    return selector_respuesta.options[selector_opcion_escogida].value;


}
//</editor-fold>


//<editor-fold desc="Validacion (Herramienta)">

/**
 * @return {Array}
 */
function Validacion() {

let nombre = document.getElementById("Nombre").value;

let edad = document.getElementById("Edat").value;

let email = document.getElementById("E-mail").value;

let comentario_texto = document.getElementById("Textarea_comentarios").value;


let respuesta_formulario = [];



if(!regex_nombre(nombre)){

    respuesta_formulario.push("Vuelve a escrbir el nombre".fontcolor("red"));
}

else{

    respuesta_formulario.push("Nombre : " + nombre + "\n");
}



if(!regex_edad(edad)) {

    respuesta_formulario.push("Vuelve a escrbir la edad".fontcolor("red"));
}

else{

    respuesta_formulario.push("Edad : " + edad + "\n");
}


if(!regex_email(email)){

    respuesta_formulario.push("Vuelve a escrbir el email".fontcolor("red"));
}

else{

    respuesta_formulario.push("Email : " + email + "\n");
}



    respuesta_formulario.push("Nos encontrastes de la siguiente forma : " + opcion_escogida_selector() + "\n");




if(!regex_comentario(comentario_texto)){

    respuesta_formulario.push("Comentario descartado".fontcolor("red"));
}

else{

    respuesta_formulario.push("Comentario : " + comentario_texto + "\n");

}

return respuesta_formulario;


}
//</editor-fold>


//<editor-fold desc="Resolucion">
function Resolucion(){

    let resolucion_en_paragrafo = document.getElementById("campo_resolucion");

    let resultado_validacion = Validacion();

    let mensaje_alert = "";

    // for(let opcion of resultado_validacion){
    //
    //
    //     mensaje_alert += opcion + "\n";
    //
    // }

        // Porque no usar for of en este caso? (For of recorre todo el array pero nos deja la posicion 0 en undefined, ya
        // comienza desde el 1 no desde el 0, convirtiendo la posicion 0 del array pasado en 1, pero, y si intentas pasar eso
        // a string? te queda un undefined en la posicion 0

    // Solucion? Como dije en otras practicas, si tocas TODO EL ARRAY,acciones que afecten en su totalidad al array es mejor
    // usar un for in , for each o .map, pero si estas buscando un dato/s concreto pero necesitas recorrer todo el array, es mejor el for of


    resultado_validacion.forEach(function (element) {
        mensaje_alert += element + "<br>" + "\n";
    });



    return [alert(mensaje_alert),resolucion_en_paragrafo.innerHTML = mensaje_alert];


}
//</editor-fold>


//<editor-fold desc="Borrar_Campos">
function Borrar_camps(){



    let campos_de_texto = [document.getElementById("Nombre"),
        document.getElementById("Edat"),
        document.getElementById("E-mail"),
        document.getElementById("Textarea_comentarios")];

    for (let campos of campos_de_texto){

        campos.value = "";

    }




}
//</editor-fold>