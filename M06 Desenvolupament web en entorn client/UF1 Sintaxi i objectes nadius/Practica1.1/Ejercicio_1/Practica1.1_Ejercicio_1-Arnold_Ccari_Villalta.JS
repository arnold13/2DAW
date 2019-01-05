function Alerta(){


var confirmacion = confirm("Presione uno de los 2 botones que ve en este recuadro"); // Guardando el confirm en una variable;

if( confirmacion ){  // Este if solo se encargara de comprobar si confirm es True (Si se pulso "Aceptar");

return alert("Presionastes aceptar" ); 

} else { // En caso de ser cualquier cosa excepto True (Pulsar "Aceptar") devolvera la siguiente funcion:

return alert("Presionastes Cancelar");

} 







}