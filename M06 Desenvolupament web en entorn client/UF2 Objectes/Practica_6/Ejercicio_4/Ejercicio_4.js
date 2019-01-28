/*


Exc4. Dissenya amb JavaScript un programa que ordeni un vector de numeros, seguint l'algorisme d'ordenacio de la bombolla.

 Aquest algorisme va comparant numeros consecutius del vector i,

  si el primer es mes gran que el segon, els intercanvia.


 */


function Creacion_Vector() {

    let indice_array = prompt("Cuantas posiciones tendra el array?");

    let vector_usuario = [];

    for(let i = 0; i < indice_array;i++){

        vector_usuario.push(prompt("Especifica un numero; (Index = " + i + " );"))

    }



    return vector_usuario;

}

function ordenar_vector(){


    let vector_usuario = Creacion_Vector();


    vector_usuario.filter(function (x) {

        console.log(x);

        if(x < vector_usuario[vector_usuario.indexOf(x) + 1]){


            let pos_x = vector_usuario.indexOf(x); // 0

            vector_usuario[vector_usuario.indexOf(x)] =  vector_usuario[vector_usuario.indexOf(x) + 1];

             vector_usuario[pos_x + 1] =  x;

        }


    });

    return vector_usuario;

}

function mostrar_resultado(){

    return document.getElementById("resultado").innerHTML = ordenar_vector().toString();


}