
function Validacion(){


    let respuesta = [document.getElementById("Nombre").value,
    document.getElementById("Provincia").value];

   return alert("Nombre : " + respuesta[0] + "\n" + "Provincia : " + respuesta[1]);


}


function Borrar_campos(){

    return [document.getElementById("Nombre").value = "" ,
        document.getElementById("Provincia").value = ""];


    // Nota: Devolver varios valores en return usando solo comas es una mala practica, es mejor devolver un array
    // con varias acciones efectuadas o una variable con varias variables dentro este en el que estan almacenadas estas acciones

}

function switch_provincia(){

    let campo_provincia = document.getElementById("Provincia");


    if (campo_provincia.readOnly === false){

       return [campo_provincia.readOnly = true,

            campo_provincia.style.backgroundColor = "lightgrey",

            campo_provincia.value = ""];

    }else{

        return [campo_provincia.readOnly = false ,

            campo_provincia.style.backgroundColor = "white"];


    }

}