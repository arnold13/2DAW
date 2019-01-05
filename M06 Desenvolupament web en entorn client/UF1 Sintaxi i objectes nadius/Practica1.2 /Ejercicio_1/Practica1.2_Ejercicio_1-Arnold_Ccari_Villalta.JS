function Cuenta_caracteres(){

var frase = prompt("Introduce una cadena de texto");

var num_palabras = frase.split(" ");

var num_caracteres = frase.split("");

var frase_mayus = frase.toUpperCase();


var analisis = "La frase escrite fue : " + frase + "\n" +
			   "Numero de palabras: " + num_palabras.length + "\n" +
			   "Numero de caracteres : " + num_caracteres.length + "\n" +
			   "La frase en mayusculas: " + frase_mayus + "\n" ;

return alert(analisis);



}



