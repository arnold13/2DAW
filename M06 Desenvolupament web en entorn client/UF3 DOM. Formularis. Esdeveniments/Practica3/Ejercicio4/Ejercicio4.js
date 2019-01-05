

function info_provincia(){

let selector = document.getElementById("sel_provincias");

let opcion_escogida = selector.selectedIndex;

let codigo_postal = selector.options[opcion_escogida].value.split(" ")[0];

let nombre = selector.options[opcion_escogida].value.split(" ")[1];


return [document.getElementById("codigo_postal").value = codigo_postal,
document.getElementById("nombre_provincia").value = nombre];




}

