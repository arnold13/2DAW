function efecto_encima(enlace) {

    function color_font() {

        return enlace.style.color = "white";


    }

    function color_fons() {

        return enlace.style.backgroundColor = "red";

    }

    function letras_mayusculas() {

        return enlace.style.textTransform = "uppercase";

    }

    return color_font(), color_fons(), letras_mayusculas();

}



function efecto_quita_raton(enlace) {


    function color_font() {

        return enlace.style.color = "red";


    }

    function color_fons() {

        return enlace.style.backgroundColor = "white";

    }

    function letras_mayusculas() {

        return enlace.style.textTransform = "lowercase";

    }

    return color_font(), color_fons(), letras_mayusculas();

}






/*


En ficar el ratolí sobre un enllaç determinat, aquest tindrà el següent estil:
• Color de la font blanc
• Fons de la font: vermell
• Lletres en majúscules
En treure el ratolí d'un enllaç, aquest recuperarà el seu estil inicial:
• Color de la font: vermell
• Color de fons: blanc
• Lletres en minúscula, tret de la primera
(Per a això, et cal buscar una mica per internet, o pensar la solució Explica el que trobis o el que tu hagis creat, en comentaris dins el codi)



*/