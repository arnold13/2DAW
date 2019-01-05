function cadena(){

var cadena_numeros = [];

for (var i = 0; i < 5; i++) {

cadena_numeros.push(prompt("Inserte numero"))

}

return cadena_numeros;

}


function suma(){

document.getElementById('log').innerHTML = " ";


var variable_Cadena = cadena();


var resultado = 0;

for (var i = 0; i < variable_Cadena.length; i++) {


	resultado += parseInt(variable_Cadena[i]);


}


return document.getElementById('log').innerHTML += "La suma total de los numeros dados es de " + resultado;



}

