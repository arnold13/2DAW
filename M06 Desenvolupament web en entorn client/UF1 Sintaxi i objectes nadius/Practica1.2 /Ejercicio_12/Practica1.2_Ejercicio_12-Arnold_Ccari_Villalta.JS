
// Ver despues de leer la funcion Tiempo

function Reloj_en_js(){



var hora_real = function(){  // Con esta funcion puedo devolver el resultado de la funcion tiempo en el html

console.log(Tiempo())

return document.getElementById("temps").innerHTML = Tiempo();


}


return setInterval(function(){ // Aqui solo hago que se ejecute la anterior funcion y que se actualize cada segundo

hora_real();

},1000); // 1000 milisegundos = 1 seg.


}



// Primero ver esta funcion

function Tiempo(){  // El porque de la creacion de una segunda funcion, es para que cargue de nuevo los datos  de una variable Fecha
					// si esto lo pongo en una misma funcion, la fecha no se actualizara,y cada vez que llame a la variable Date
					// este me mostrara los valores con los que se inicializo por primera vez, si llamo a una funcion, esta se actualizara en cada llamada
					// incluyendo sus propias variables.

var fecha_actual = new Date();

var hora = fecha_actual.getHours();

var minutos = fecha_actual.getMinutes();

var segundos = fecha_actual.getSeconds();

var tiempo = document.getElementById("temps").innerHTML; //Valor de tiempo

var tiempo_repartido = tiempo.split(":"); // Repartido en arrays (3 arrays)


tiempo_repartido[0] = hora; // Cambio los valores actuales a las fechas reales.

tiempo_repartido[1] = minutos;

tiempo_repartido[2] = segundos;

return tiempo_repartido.join(":"); // Devuelvo la hora actual con ":" como separacion

}