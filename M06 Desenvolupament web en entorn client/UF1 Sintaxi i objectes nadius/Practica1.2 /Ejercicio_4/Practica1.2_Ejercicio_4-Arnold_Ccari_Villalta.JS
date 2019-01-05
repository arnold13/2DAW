function cadena_de_Text(){


var cadena = prompt("Escribe una cadena de texto");

var cadena_seleccionada = cadena.split("");

var cadena_de_texto = new String("");

for (var i = 4-1 ; i < 15; i++) { 

// -1 porque el digito 0 no lo contamos a la hora de contar los strings, se supone que ya viene por defecto.


cadena_de_texto += cadena_seleccionada[i];

}


return alert(cadena_de_texto)


}