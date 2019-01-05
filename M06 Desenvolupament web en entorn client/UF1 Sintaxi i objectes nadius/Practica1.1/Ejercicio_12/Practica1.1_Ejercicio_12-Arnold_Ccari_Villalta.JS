var intervalo;

function Cambio_de_color(){

intervalo = setInterval(function(){

document.bgColor = Color_Random();

},2000);



}

function stop(){

return clearInterval(intervalo);

}


function Color_Random() {
  var letras = '0123456789ABCDEF';
  var arr_letras =  letras.split(""); // El split es para sacar caracter por caracter la frase y meterlo en un array (Split devuelve un array);
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += arr_letras[Math.floor(Math.random() * 16)];
  }

    console.log(color);


  return color;
}