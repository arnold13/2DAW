/*

Exc1. Dissenya un lloc web amb JavaScript que demani 10 numeros per pantalla i els guardi en un vector.
Un cop emplenat el vector, haura de comprovar si s'ha repetit algun numero. En cas a rmatiu, mostrara el missatge:
"Has repetit els seguents numeros: 3,6,8"
Si, en canvi, no s'ha repetit cap numero, mostrara el missatge: "No hi ha cap numero repetit"
Nota: si un determinat numero surt repetit mes de dues vegades, solament s'haura de mostrar una vegada al missatge d'alerta.

 */


function Ejercicio_1(){

 let Vector_Numeros = [];

 let Vector_Numeros_Repetidos = [];

     for(let i = 1; i < 11;i++){

         Vector_Numeros.push(prompt("Especifica un numero; (Index = " + i + " );"))

     }

     console.log(Vector_Numeros);

    for(let i = 0;i < Vector_Numeros.length;i++){

        if(Vector_Numeros.includes(Vector_Numeros[i],i+1)){

            Vector_Numeros_Repetidos.push(Vector_Numeros[i]);

        }

    }


    return Vector_Numeros_Repetidos;

}

/**
 * @return {string}
 */
function Numeros_repetidos(){


    let numeros_repetidos = Ejercicio_1();


    let mensaje = "Los numeros repetidos en el array de numeros son: ";


    for(let prop of numeros_repetidos){


        mensaje += prop +",";

    }

    mensaje = mensaje.slice(0,-1)+"."; // Cambio el string por el mismo string pero sin su ultimo caracter, que lo cambio por un ".".


    return document.getElementById("mostrar_numeros_repetidos").innerHTML = mensaje;


}