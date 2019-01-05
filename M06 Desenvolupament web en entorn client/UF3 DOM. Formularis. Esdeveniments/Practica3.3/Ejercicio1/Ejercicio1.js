


function Reemplazar_palabra(){

    let area_texto = document.getElementById("text_area");

    let palabra_a_buscar = document.getElementById("Buscar_palabra").value;

    let palabra_nueva = document.getElementById("Sustituir_palabra").value;

    let remplazo = area_texto.value.replace(palabra_a_buscar,palabra_nueva);

    return area_texto.value = remplazo;



}