function busqueda_de_Caracteres(){

var cadena =  prompt("Introduce una cadena de texto");

var letra_a_encontrar = prompt("Que letra deseas buscar?");

var letra_regex = new RegExp(letra_a_encontrar,'gi'); // La opcion m es innecesario ya que no hay saltos de lineas

var letra_en_cadena = cadena.match(letra_regex); // letra_regex = /letra_regex/g (Esto ultimo es imposible de hacer apelo, se necesita usar una variable regexp de por medio)

if (letra_en_cadena != null || undefined ) {


	return alert(letra_en_cadena.length);

}

}