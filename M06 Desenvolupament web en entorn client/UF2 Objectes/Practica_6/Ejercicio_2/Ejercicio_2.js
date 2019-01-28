//<editor-fold desc="Enunciado">
/*

Exc2. Dissenya un lloc web amb JavaScript, format per un camp de text i dos botons ("Afegir" i "Treure").
•En premer el boto "Afegir", aniran sortint al camp de text numeros consecutius, separats per guions: 1-2-3-4...
(un sol numero cada cop que es premi el boto)
•En premer el boto "Treure", aniran desapareixent els numeros del vector (un numero cada cop que es premi el boto)

 */
//</editor-fold>



// Esta funcion devolvera  un array de tipo Number, o un string (Cuando llega a 0 añade un 0 de tipo string);

/**
 * @return {number[],String}
 */


function Afegir(){

    if (typeof Vector_Numeros === 'undefined') { // Instanciado la variable

        let Vector_Numeros = [0];

        document.getElementById("text_numeros").innerText = Vector_Numeros[0].toString();

        // Porque pongo toString al final de innerText?

        // Si se fija bien estamos insertando (No añadiendo) un valor Numeric a innerText donde deberia entrar solo String

        // JS ya hace el cambio de por si y ademas no es considerado ningun tipo de error,

        // pero no esta de mas insertar un toString para evitar errores ya que estamos insertando un elemento de un tipo diferente

        // en un recipiente de tipo diferente (Me di cuenta de eso por el IDE);

        //


        return window.Vector_Numeros = Vector_Numeros;

        // Con window lo estoy declarando en la global


    } else if (Vector_Numeros.length <= 0) { // En caso de ser 0 o menos

        Vector_Numeros.push(0);

        return document.getElementById("text_numeros").innerText = Vector_Numeros[0].toString();


    }


    Vector_Numeros.push(Vector_Numeros[Vector_Numeros.length -1]+1); // Length empieza por 1 y el array cuenta desde el 0

    document.getElementById("text_numeros").innerText += "," + Vector_Numeros[Vector_Numeros.length -1];

    return Vector_Numeros;
}


/**
 * @return {string}
 */
function Treure(){


    if (typeof Vector_Numeros === 'undefined') { // Instanciado la variable


        return document.getElementById("text_numeros").innerText = "No puedes retirar un numero si el vector a un no existe, añade 1 numero!"



    } else if (Vector_Numeros.length <= 1) { // En caso de ser 1 o menos (Es logico, si retiramos cuando queda solo 1 elemento, este sera zero, entonces retiro aquel ultimo mensaje y salta ese mensaje)

        Vector_Numeros.pop();

        return document.getElementById("text_numeros").innerText = "El array se quedo vacio!";


    }

    Vector_Numeros.pop();

    return document.getElementById("text_numeros").innerText =  Vector_Numeros.toString();

}