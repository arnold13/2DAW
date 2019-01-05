function array_fotos(){

var array_fotos =
["Numero_1.jpg"
,"Numero_2.jpg"
,"Numero_3.jpg"
,"Numero_4.jpg"
,"Numero_5.jpg"
,"Numero_6.jpg"
,"Numero_7.jpg"
,"Numero_8.jpg"
,"Numero_9.jpg"
,"Numero_10.jpg"]

return array_fotos;

}



function foto_anterior(){

var arr_fotos = array_fotos();

var url_imagen = document.getElementById("Imagen_carrousel").src;

var foto_actual = url_imagen.replace(/^.*[\\\/]/, '');

var num_foto_anterior = arr_fotos.indexOf(foto_actual) - 1;

console.log(arr_fotos)

console.log(foto_actual)

console.log(num_foto_anterior)

if (num_foto_anterior == -1){

	return document.getElementById("Imagen_carrousel").src = arr_fotos[9];

} else {

	return document.getElementById("Imagen_carrousel").src = arr_fotos[num_foto_anterior];

}





}

function foto_siguiente(){

var arr_fotos = array_fotos();

var url_imagen = document.getElementById("Imagen_carrousel").src;

var foto_actual = url_imagen.replace(/^.*[\\\/]/, ''); // Regex para sacar el nombre de la foto sin el src.

var num_foto_siguiente = arr_fotos.indexOf(foto_actual) + 1;

if (num_foto_siguiente == 10){

	return document.getElementById("Imagen_carrousel").src = arr_fotos[0];

} else {

	return document.getElementById("Imagen_carrousel").src = arr_fotos[num_foto_siguiente];

}


}









/*

Tindrem emmagatzemades un total de 10 imatges, que representin els números del 0 al 9. Els botons + i – faran avançar o retrocedir el carrussel d'imatges.
• Si el carrussel ha arribat a la imatge número 10 i l'usuari prem el botó d'avançar, tornarà a començar des de la imatge 1.
• Si el carrussel ha arribat a la primera imatge i l'usuari prem el botó de retrocedir, es situarà a la imatge 10.

*/