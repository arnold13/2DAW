function Comprobacion_Mayor_Edad() {

    document.getElementById('log').innerHTML = " ";

    var Edad = prompt("Que edad tienes?");


    if (!(Edad >= 18)) {

        document.getElementById('log').innerHTML += "El usuario es menor de edad";

    } else if (Edad >= 18) {

        console.log(Edad);

        document.getElementById('log').innerHTML += "El usuario es mayor de edad";

    } else {

        console.log(Edad) // Comprobar bugs
    }


} // Fin de la funcion [Comprobacion_Mayor_Edad]



function Comprobacion_Mayor_Edad_con_ternaria() {

    var Edad = prompt("Que edad tienes?");


    document.getElementById('log').innerHTML = " ";

    Edad < 18 ? document.getElementById('log').innerHTML += "El usuario es menor de edad"

        :

        document.getElementById('log').innerHTML += "El usuario es mayor de edad";








} // Fin de la funcion [Comprobacion_Mayor_Edad_con_ternaria]