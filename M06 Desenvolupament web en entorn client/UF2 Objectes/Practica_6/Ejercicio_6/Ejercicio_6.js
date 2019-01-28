/*

Exc6: Dissenya un programa que faci una estadistica d'una cadena introduida mistjancant un camp textarea.

En premer un boto anomenat "Veure estadistica",

el programa mostrara quants cops surt cada lletra de l'abecedari a la cadena.

Per exemple: si introduim el text "Aquesta es la cadena per fer l'estadistica",

el programa mostrara el seguent resultat:


 */


function Ejercicio_6(){

let cadena_texto = prompt("Introduce una cadena de texto");

let parrafo = document.getElementById("resultado");

let vector_abc = function(){

    let vector = [];

    for (let i = 0; i < 26; i++) {

        vector.push( (i+10).toString(36).toUpperCase() ) // base 10 a base 36;

    }

    return vector;

};

let numero_ocurrencias = function(letra){

        return cadena_texto.split(letra).length - 1;

    };

let vector_guardar_info = [];



    parrafo.innerHTML = "";

    for (let i = 0; i < 26; i++) {

        vector_guardar_info.push("Lletra "+vector_abc()[i]+": " + numero_ocurrencias(vector_abc()[i].toLowerCase()));

        parrafo.innerHTML += vector_guardar_info[i]+ "<br>";


    }

   return vector_guardar_info;


}