function Cuenta_de_Nombres(){

var count = 0;

var Nombres;

var Array_Nombres = [];

do{

Nombres = prompt("Introduce un nombre, para acabar la lista pulsa la tecla 0");


Array_Nombres.push(Nombres);


console.log(Array_Nombres.length);

console.log(Array_Nombres);


}while(Nombres != 0)

var Tamaño_Array = Array_Nombres.length;


return alert("El nombre total de nombres introducidos es de = " + Tamaño_Array);


}