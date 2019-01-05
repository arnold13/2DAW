/**
 * @return {boolean}
 */


function opciones_grupo_A() {


    let opciones = [document.getElementById("Opcion_A_Grupo_1"),
        document.getElementById("Opcion_B_Grupo_1"),
        document.getElementById("Opcion_C_Grupo_1"),
        document.getElementById("Opcion_D_Grupo_1"),
    ];


    /*
       opciones.forEach(function (opcion) {

           if (opcion.checked){


               console.log("llegue")
                return opcion.value;
           } else {

               console.log("attempt")

           }


       });

    */


// Nota: Recorrer un array con la finalidad de buscar cierto dato se deberia aser con un for normal, sin embargo
// para no ser tan bruto,decidi hacerlo con un for of, un metodo creado en 2015 que es una version mejorada del for que
// no se estanca como el foreach o el map, ya que como se puede ver en las lineas comentadas mas arriba, haciendo pruebas
// me percate que el foreach y el map primero recorren todo el array para luego realizar la accion que se les encomienda
// La unica manera de que funcionara era usar una variable como intermediario pero eso seria gastar recursos innecesarios


// El for of simplemente recorre el array, leendo el dato, realizando la accion dentro del for encomendada y luego pasa
// al siguiente dato (A diferencia de foreach o map, que primero leen todos los datos y luego realizan la accion


    for (let opcion of opciones) {

        if (opcion.checked) {


            return opcion.value;


        }


    }
}


function opciones_grupo_B() {


    let opciones = [document.getElementById("Opcion_A_Grupo_2"),
        document.getElementById("Opcion_B_Grupo_2"),
        document.getElementById("Opcion_C_Grupo_2"),
    ];


    for (let opcion of opciones) {

        if (opcion.checked) {


            return opcion.value;


        }


    }


}

/**
 * @return {boolean}
 */

function Avaluacion(){

    document.getElementById("res_A").value =  opciones_grupo_A();

    document.getElementById("res_B").value =  opciones_grupo_B();


    return false;
}



