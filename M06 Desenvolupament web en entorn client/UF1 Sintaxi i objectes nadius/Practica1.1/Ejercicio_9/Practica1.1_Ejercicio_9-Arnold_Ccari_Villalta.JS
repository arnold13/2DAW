function Numeros_aleatorios(){

var Numero_aleatorio = Math.floor(Math.random() * 10) +1; // Numero entre el 0 al 10

var Numero_Introducido;

var count = 0;

console.log(Numero_aleatorio);

while(Numero_Introducido != Numero_aleatorio){

Numero_Introducido = parseInt(prompt("Introduce un numero del 1 al 10"))|| alert("Solo se admiten numeros");

// En caso de que el ParseInt falle, soltara un alert. (De esta manera te ahorras mucho tiempo, ya que )

// es esto o poner (if numero_introducido == NaN {etc...})

if (Numero_Introducido > Numero_aleatorio) {

alert("El numero introducido es mayor que el numero aleatorio");

} else if (Numero_Introducido < Numero_aleatorio){

alert("El numero introducido es menor que el numero aleatorio");

}

console.log(Numero_Introducido);

count++;

}

return alert("Enhorabuena \n\n Solo te costo: " + count + " intentos");



}

