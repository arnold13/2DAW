var movimiento;

function Nueva_Ventana(){

var ventana_movible = window.open("","","width=250, height=250");

ventana_movible.document.write("<h1> Aquesta és la finestra secundària </h1> <br><br> ") // Al ser un documento, puedo ejecutar las opciones de un documento para JS

ventana_movible.document.write('<td><input type="button" value="Cerrar Ventana" onclick="window.close()">'); // window.close();, cierra la pagina actual (se ejecuta esta funcion a si mismo).






movimiento = setInterval(function(){

ventana_movible.moveBy(5,0);

setTimeout(function(){

ventana_movible.moveBy(0,5);



},1000)

},2000);







}


function Ventana_Movible_stop(){

return clearInterval(movimiento);

console.log(movimiento)

}
