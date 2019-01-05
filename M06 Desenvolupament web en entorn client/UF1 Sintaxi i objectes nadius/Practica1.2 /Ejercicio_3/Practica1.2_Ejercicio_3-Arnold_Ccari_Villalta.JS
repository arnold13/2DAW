function Posicion_de_caracteres(){

var frase = prompt("Introdueix una cadena de text");

var posicion_caracter = prompt("Que posicion quieres consultar");

do{

var arr_frase = frase.split("");

var valor_posicion_caracter = arr_frase[posicion_caracter];

if(valor_posicion_caracter == null || undefined){

posicion_caracter = prompt("La posicion marcada no es correcta, intentelo de nuevo");

}


}while(valor_posicion_caracter != null && undefined);


return alert(valor_posicion_caracter);


}