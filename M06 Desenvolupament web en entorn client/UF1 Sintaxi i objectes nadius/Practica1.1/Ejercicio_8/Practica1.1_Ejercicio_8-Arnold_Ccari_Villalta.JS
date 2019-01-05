function Cuenta_de_Numeros(){

var Array_Numeros = [];

var Numero;

var suma_total = 0;

var count = 0;

do{

Numero = prompt("Inserte Numero");

suma_total += parseInt(Numero);

count++;

console.log(suma_total);
console.log(Numero);

}
while(suma_total <= 100);

document.getElementById('log').innerHTML += "Hay un sobrexceso de = " + (suma_total - 100);

return alert("Numero de numeros necesarios para llegar hasta 100 = " + count);

// La aplicacion funciona, tambien se podria poner un if adicional para que cuando se introduzca un String (NaN en ParseInt)

// enves de pararse la aplicacion , este lanzara un alert tipo = "No se permiten Strings!", aunque eso seria como añadir excepciones y es otro tema.


}