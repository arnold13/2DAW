


function Funcion_Hora(pregunta){


if ((pregunta >= 6) && (pregunta <= 12)) {

return "Mañana"

}

else if((pregunta >= 13) && (pregunta <= 18)){

return "Tarde"

}

else if((pregunta >= 19 && pregunta <=24) || (pregunta <= 5)){

return "Noche"

}

else {

return "Error"

}


}





function Ejercicio_Hora(){

document.getElementById('log').innerHTML = " "; // Primero borra el contenido que habia en el div log 



for (var i = 0; i < 24; i++) {



document.getElementById('log').innerHTML += '</br> ' +'La hora ' + i + ' equivale a ' +  Funcion_Hora(i);


}



}









function Ejercicio_Pregunta(){

document.getElementById('log').innerHTML = " ";



var hora = new Date();

var pregunta = prompt("Que hora es?",hora.getHours());








document.getElementById('log').innerHTML += '</br> ' +'La hora ' + pregunta + ' equivale a ' +  Funcion_Hora(pregunta);



}















