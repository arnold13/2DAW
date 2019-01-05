/**
 * @return {boolean}
 */
function Devolver_Parametro() {

    document.getElementById("myTextarea").value = "";

    let opciones_checkbox = [document.getElementById("Opcion_1"),
        document.getElementById("Opcion_2"),
        document.getElementById("Opcion_3")];


    let texto_area = document.getElementById("myTextarea");

    opciones_checkbox.forEach(function (opcion) {
        
        if (opcion.checked){

             texto_area.value += "Vosté és " + opcion.value + "\n";
        }
        else if(!opcion.checked){

             texto_area.value += "vosté no és " + opcion.value + "\n";

        }


        
    });


    return true;
    


}