//<editor-fold desc="Enunciado">

/*


Exc3. Dissenya un lloc web amb JavaScript que crei dos vectors d'igual longitud i demani numeros a l'usuari per emplenar-los.

 Un cop emplenats els dos vectors, creara un tercer vector que emmagatzemi, unicament, els elements comuns dels dos primers,

 es a dir, els numeros que es repeteixen (en qualsevol posició) . Despres, mostrara per pantalla el tercer vector.


 */

//</editor-fold>


function elementos_comunes_en_diferentes_vectores(){

let longitud_vector = prompt("De que tamaño quieres que sea los 2 vectores (Ambos son del mismo tamaño)?");

let vector_1 = [];

let vector_2 = [];

for(let i = 0; i < longitud_vector;i++){

    let numero;


    do{

     numero = parseInt(prompt("Inserta un numero [Puesto: "+ i  +" ],1er array"));

    if(isNaN(numero)){

        alert("No se intrudujo un numero valido,repita.")

    }


     }while(isNaN(numero));

    vector_1.push(numero);


}

alert("comenzando 2n array:");

for(let i = 0; i < longitud_vector;i++){

    let numero;

    do{

        numero = parseInt(prompt("Inserta un numero [Puesto: "+ i +" ], 2n array"));


        if(isNaN(numero)){

            alert("No se intrudujo un numero valido,repita.")

        }




    }while(isNaN(numero));

    vector_2.push(numero);


}


return [vector_1,vector_2];



}

function comparar_diferencias(){

    let vector_explicito = elementos_comunes_en_diferentes_vectores();

    console.log(vector_explicito);

    let vector_original = vector_explicito[0];

    let segundo_vector = vector_explicito[1];

    vector_original = vector_original.concat(segundo_vector);

    console.log(vector_original);

    let duplicados = [];


    for(let i = 0;i < vector_original.length;i++){

        if(vector_original.includes(vector_original[i],i+1)){

            duplicados.push(vector_original[i]);

        }

    }
    console.log(duplicados);

    return duplicados;




}

    function mostrar_resultado(){

        document.getElementById("resultado").innerText = comparar_diferencias().toString();



    }