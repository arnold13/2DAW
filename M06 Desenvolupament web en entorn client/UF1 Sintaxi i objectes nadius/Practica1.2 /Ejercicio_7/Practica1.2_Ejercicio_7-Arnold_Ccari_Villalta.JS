function redondeando(){



while(true){


var numero_decimal = prompt("Inserte un decimal de 7 o 6 cifras") // String

 if(numero_decimal.split(".")[1].length < 6 ){ // 1 Cadena, 2 valores,coger el valor que iba despues del punto, contarlo y comprobar si es menos de 6


alert("El numero solo puede tener 6 o 7 decimales, no menos")


} else if (numero_decimal.split(".")[1].length > 7 ) { // Lo mismo pero comprobar si es menos de 7

		alert("El numero solo puede tener 6 o 7 decimales, no mas")





} else {


var numero_decimal_redondeado = Number(numero_decimal).toFixed(2);

return alert("número introduït: "+ numero_decimal +" → número mostrat per l'script: "+ numero_decimal_redondeado);

// Si ningun if funciono, coger el primer String, pasarlo a Numero, para usar Fixed y convertirlo en String de nuevo pero con 2 decimales (redondeado)

}



}




}