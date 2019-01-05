function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


function busqueda_de_palabras() {

    let origen_texto_busqueda = document.getElementById("area_text");

    let paragrafo_info = document.getElementById("demo");

    let palabra_a_buscar = document.getElementById("Palabra_a_buscar").value;

    let checkbox_html = document.getElementById("Checkbox_palabras_completas");


    if (checkbox_html.checked) {


        origen_texto_busqueda.value.replace(/[-\\()\[\]{}^$*+.?|]/g, '\\$&');

        let regex = new RegExp('(\\s|^)(?:' + palabra_a_buscar + ')(?=\\s|$)', "g");

        paragrafo_info.innerHTML = origen_texto_busqueda.value.replace(regex, "$1" + "<label for='Palabra_a_buscar' class='palabra'> " + palabra_a_buscar + "</label>");


    } else {

        paragrafo_info.innerHTML = replaceAll(origen_texto_busqueda.value, palabra_a_buscar, "<label for='Palabra_a_buscar' class='palabra'> " + palabra_a_buscar + "</label>");


    }



    for (let i = 0; i < document.getElementsByClassName("palabra").length; i++) {

        document.getElementsByClassName("palabra")[i].style.backgroundColor = "yellow";

    }


}


