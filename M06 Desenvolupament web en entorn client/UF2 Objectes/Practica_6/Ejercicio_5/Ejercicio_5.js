/*

Exc5. Dissenya amb JavaScript un programa que demani a l'usuari una cadena de text,

mitjancant un camp de text (<textarea...>). Per exemple, si introduim el text: "Avui fa bon solet",

 en premer el botó, el programa mostrara la seguent informacio:

Nombre de paraules: 4

Primera paraula: avui

Darrera paraula: solet

A la inversa: solet,bon,fa,avui

Ordenades de la A a la Z: avui,bon,fa,solet

Ordenades de la Z a la A: solet,fa,bon,avui


 */


function cadena_a_vector(){

    let result_textarea = document.getElementById("resultado");

    let vector_cadena_text = prompt("Introduzca una cadena de texto").split(' ');



    return result_textarea.innerHTML = "Nombre de paraules: " + vector_cadena_text.length + "\n" +
        "Primera paraula: " + vector_cadena_text[0] + "\n" +
        "Darrera paraula: " + vector_cadena_text[vector_cadena_text.length - 1] + "\n" +
        "A la inversa: " + vector_cadena_text.reverse() + "\n" +
        "Ordenades de la A a la Z: " + vector_cadena_text.sort() + "\n" +
        "Ordenades de la Z a la A: " + vector_cadena_text.sort().reverse() + "\n";

}