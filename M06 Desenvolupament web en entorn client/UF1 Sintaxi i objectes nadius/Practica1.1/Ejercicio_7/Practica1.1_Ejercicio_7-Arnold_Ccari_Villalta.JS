
function acceso(){

document.getElementById('log').innerHTML = " ";

var autentificacion = "";

var count = 0;

do{

autentificacion = prompt("Pon una contraseña");

console.log(autentificacion);
console.log(count);
count++;

}

while(autentificacion != "password" && autentificacion != "clauAcces" && autentificacion != "secretKey");


// Aqui pediremos una contraseña, la funcion seria: Mientras autentificacion sea diferente a "password" Y "clauAcces"

// Y "secretKey" , repite el bucle.

// No poner el "||", porque aun que tenga logica decir: "Mientras auten. sea diferente a password o claucess o secretkey"

// El programa lo identifica de otra manera, haciendo de que si es compatible con una de las 3, pero incompatible con las otras 2 , devolvera

// true, creando un bucle infinito. (auten es igual a password, pero no igual a clauAccess por lo que seria True.)




return document.getElementById('log').innerHTML += "Autentificado <br> Numero de intentos = " + count ;

}





