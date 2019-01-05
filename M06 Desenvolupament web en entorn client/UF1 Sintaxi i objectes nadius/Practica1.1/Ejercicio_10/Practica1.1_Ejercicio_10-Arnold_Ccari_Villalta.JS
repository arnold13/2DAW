function Ventana_Nueva(){

document.write("En 5 segons, s'obrira una nova finestra");

setTimeout(function(){ // Declaro una funcion que se ejecutara en 5000 milisegundos

var Nueva_Ventana = window.open("","Nueva ventana!"); // Nueva_Ventana se convierte en un documento (Ya que contiene el valor de la nueva pagina creada)

Nueva_Ventana.document.write("<h1> Aquesta és la finestra secundària </h1> <br><br> ") // Al ser un documento, puedo ejecutar las opciones de un documento para JS

Nueva_Ventana.document.write('<td><input type="button" value="Cerrar Ventana" onclick="window.close()">'); // window.close();, cierra la pagina actual (se ejecuta esta funcion a si mismo).




},5000);

}