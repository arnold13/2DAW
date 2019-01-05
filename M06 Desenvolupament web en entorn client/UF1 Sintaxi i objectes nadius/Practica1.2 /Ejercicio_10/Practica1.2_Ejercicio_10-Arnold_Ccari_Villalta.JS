var intervalo;


function cuenta_atras(){




var fecha_original = new Date().getTime(); // Tiempo a la hora de ejecutar la funcion



intervalo = setTimeout(function(){

var fecha = new Date().getTime(); // Cada 500 milisegundos se actualiza

console.log(fecha);

console.log(fecha_original);


if(fecha == (fecha_original + 5000)){  // El porque de 5000 es porque la maquina se tarda 1 milisegundo en preparar la funcion
									   // ese milisegundo afecta al contador haciendo que cuando hayan pasado 500 milisegundo la marca este en 501 milisegundos.
	alert("Se acabo el tiempo");       // aunque aveces la maquina no tarda 1 milisegundo, y la operacion es justo de ahi los errores son ocasionados
									   // aunque yo lo hubiera hecho con un setinterval entero para evitar errores. (sin tener que tocar fechas)

}

alert("se acabo el tiempo"); // No importa si la condicion se acaba cumpliendo (Es mas probable que no funcione), despues de 5 segundos exactos la alarma se devolvera igualmente.

},5000); // 5000 segundos del timeout



}





function stop(){


clearInterval(intervalo)

}