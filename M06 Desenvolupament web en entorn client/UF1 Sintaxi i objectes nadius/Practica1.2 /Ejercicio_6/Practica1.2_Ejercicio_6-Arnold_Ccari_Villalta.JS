function Inspeccion_de_Caracteres(){


while(true){ // Aqui creamos una bucle infinito

var cadena = prompt("Inserte un correo electronico");

if (cadena.indexOf("@") == -1){

    alert("Una adreça de correu ha de contenir el caracter @");

}else if (cadena.match(/@/g).length > 1){

	  alert("Una adreça de correu no pot tenir més d'un caracter @s");

} else {

	return alert("L'adreça de correu especificada és correcta"); // Sin embargo, al ejecutarse el return,

	// devolvemos esta propiedad, terminando con la funcion y en consecuencia con el bucle.



}

}




}