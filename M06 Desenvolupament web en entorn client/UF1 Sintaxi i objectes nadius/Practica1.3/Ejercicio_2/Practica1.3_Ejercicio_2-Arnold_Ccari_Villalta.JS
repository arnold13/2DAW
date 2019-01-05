function Color_Random(){

var gama_de_colores = ["Blue","Red","Yellow","Black","Green","Orange","Purple","Pink","Brown","Grey"];

var numero_aleatorio = Math.floor(Math.random()*10+1);

// El math random solo da 0.decimal, nunca da 1, po
//r lo que 0.9 por 10 como mucho lo podra redondera hasta 9,
//por eso el +1,para que pueda soltar un numero aleatorio de 0 al 10

var color_aleatorio = gama_de_colores[numero_aleatorio];

return color_aleatorio;


}


function efecto_encima(enlace) {


   function color_fons() {

        return enlace.style.backgroundColor = Color_Random();

    }



    return color_fons();


}



function efecto_quita_raton(enlace) {




    function color_fons() {

        return enlace.style.backgroundColor = "white";

    }



    return color_fons();

}




/*

Exercici2.

Dissenya un document que mostri una taula, amb tres files i tres cel.les per fila,
com la que es mostra a la imatge. Quan l'usuari fiqui el ratolí damunt d'una de les cel.les,
el seu color de fons es fixarà a un color aleatori, d'entre 10 possibles. Quan retiri el ratolí,
el fons de la cel.la perdrà novament el seu color.

*/