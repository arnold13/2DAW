function Grupo_caracteres_invertidos(){

var frase = prompt("Introdueix una cadena de text");

var frase_en_array = frase.split("");

var frase_invertida = "";

for (var i = frase_en_array.length - 1; i >= 0; i--) {


var letra = frase_en_array[i];



frase_invertida += letra;

}

console.log(frase_invertida)


return alert(frase_invertida);



}