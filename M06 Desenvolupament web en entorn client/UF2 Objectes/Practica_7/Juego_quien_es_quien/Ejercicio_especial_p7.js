/*

Implementeu el joc del «Qui és qui?».


Disposeu de 24 personatges. La màquina pensarà un jugador i l’usuari l’haurà d’endevinar en base a 6 característiques:

color del cabell, color de la roba, si té barba, color dels ulls, sexe i edat.

També podrem optar per picar en qualsevol moment sobre els personatges i ens dirà si l’hem encertat o no.

Finalment, el programa ens dirà quantes preguntes hem fet per endevinar-lo.

Pregunta és cada volta que seleccionem un filtre o pitgem directament sobre la imatge d’un personatge.

Hi haurà un botó de «Juguem!» (abans no es pot fer res)

, i «Me rindo!» (mostra només la fitxa del personatge que havíem d’endevinar).



 */









function montaje_juego(){


    if(typeof window.juego.started === "undefined"){

        window.juego.started = true;

    }else{

        location.reload();
    }


    let personajes = document.getElementById("personajes_juego").getElementsByTagName("td");

    let info_personajes = function(){

      let alba = {

          nombre : "alba",

          color_cabello : "marron",

          color_roba : "azul",

          barba : "ninguna",

          color_de_ulls : "gafas",

          sexe : "Mujer",

          edat : "adulto"

      };


     let antonio = {

          nombre : "antonio",

          color_cabello : "negro",

          color_roba : "rojo",

          barba : "ninguna",

         color_de_ulls : "negro",

         sexe : "Hombre",

         edat : "joven"

     };

     let carlos = {

       nombre : "carlos",

       color_cabello : "rojo",

       color_roba  : "amarillo",

       barba : "corta",

       color_de_ulls : "azul",

       sexe : "Hombre",

       edat : "adulto"


     };

     let carmen = {

       nombre : "carmen",

       color_cabello : "negro",

       color_roba : "amarillo",

       barba : "ninguna",

       color_de_ulls : "negro",

       sexe : "Mujer",

       edat : "adulto"

     };

     let cristina = {

       nombre : "cristina",

       color_cabello : "negro",

       color_roba : "azul",

       barba : "ninguna",

       color_de_ulls : "negro",

       sexe : "Mujer",

       edat : "adulto"

     };


     let daniel = {

       nombre : "daniel",

       color_cabello : "rojo",

       color_roba : "azul",

       barba : "ninguna",

       color_de_ulls : "marron",

       sexe : "Hombre",

       edat : "joven"

     };

     let elena = {


         nombre : "elena",

         color_cabello : "marron",

         color_roba : "negro",

         barba : "ninguna",

         color_de_ulls : "marron",

         sexe : "Mujer",

         edat : "niño"

     };

     let elisa = {

       nombre : "elisa",

       color_cabello : "negro",

       color_roba : "roja",

       barba : "ninguna",

       color_de_ulls : "negro",

       sexe : "Mujer",

       edat : "adulto"


     };

     let irene = {

       nombre : "irene",

       color_cabello : "blanco",

       color_roba : "amarillo",

       barba : "ninguna",

       color_de_ulls : "marron",

       sexe : "Mujer",

       edat : "anciano"


     };


     let ivan = {

       nombre : "ivan",

       color_cabello : "marron",

       color_roba : "azul",

       barba : "ninguna",

       color_de_ulls : "azul",

       sexe : "Hombre",

       edat : "adulto"


     };

     let jorge = {

         nombre : "jorge",

         color_cabello : "negro",

         color_roba : "verde",

         barba : "ninguna",

         color_de_ulls : "marron",

         sexe : "Hombre",

         edat : "adulto"


     };


     let Juan = {


         nombre : "juan",

         color_cabello : "negro",

         color_roba : "gris",

         barba : "ninguna",

         color_de_ulls : "negro",

         sexe : "Hombre",

         edat : "adulto"


     };


     let Julia = {

       nombre : "julia",

       color_cabello : "amarillo",

       color_roba : "rosa",

       barba : "ninguna",

       color_de_ulls : "marron",

       sexe : "Hombre",

       edat : "adulto"

     };


     let Lucas = {

         nombre : "lucas",

         color_cabello : "naranja",

         color_roba : "amarillo",

         barba : "ninguna",

         color_de_ulls : "marron",

         sexe : "Hombre",

         edat : "joven"


     };


     let Lucia = {

       nombre : "lucia",

       color_cabello : "negro",

       color_roba : "verde",

       barba : "ninguna",

       color_de_ulls : "negro",

       sexe : "Mujer",

       edat : "adulto"

     };

     let Luis = {

       nombre : "luis",

       color_cabello : "blanco",

       color_roba : "marron",

       barba : "larga",

       color_de_ulls : "marron",

       sexe : "Hombre",

       edat : "anciano"


     };


     let Manolo = {

       nombre : "manolo",

       color_cabello : "marron",

       color_roba : "azul",

       barba : "ninguna",

       color_de_ulls : "marron",

       sexe : "Hombre",

       edat : "niño"


     };


     let Mar = {

         nombre : "mar",

         color_cabello : "negro",

         color_roba : "azul",

         barba : "ninguna",

         color_de_ulls : "negro",

         sexe : "Mujer",

         edat : "joven"

     };

     let Maria = {

       nombre : "maria",

       color_cabello : "naranja",

       color_roba : "azul",

       barba : "ninguna",

       color_de_ulls : "azul",

       sexe : "Mujer",

       edat : "joven"

     };

     let Noelia = {

       nombre : "noelia",

       color_cabello : "marron",

       color_roba : "marron",

       barba : "ninguna",

       color_de_ulls : "marron",

       sexe : "Mujer",

       edat : "joven"

     };


     let Pablo = {

       nombre : "pablo",

       color_cabello : "amarillo",

       color_roba : "marron",

       barba : "ninguna",

       color_de_ulls : "azul",

       sexe : "Hombre",

       edat : "joven"

     };

     let Paco = {

       nombre : "paco",

       color_cabello : "marron",

       color_roba : "amarillo",

       barba : "larga",

       color_de_ulls : "marron",

       sexe : "Hombre",

       edat : "adulto"


     };


     let Paula = {

         nombre : "paula",

         color_cabello : "naranja",

         color_roba : "amarillo",

         barba : "ninguna",

         color_de_ulls : "marron",

         sexe : "Mujer",

         edat : "adulto"


     };


     let Paz = {

       nombre : "paz",

       color_cabello : "marron",

       color_roba : "verde",

       barba : "ninguna",

       color_de_ulls : "azul",

       sexe : "Mujer",

       edat : "adulto"

     };


     let Rafa = {

       nombre : "rafa",

       color_cabello : "marron",

       color_roba : "negro",

       barba : "ninguna",

       color_de_ulls : "gafas",

       sexe : "Hombre",

       edat : "joven"

     };

     let Rosa = {

       nombre : "rosa",

       color_cabello : "rojo",

       color_roba : "verde",

       barba : "ninguna",

       color_de_ulls : "rojo",

       sexe : "Mujer",

       edat : "adulto"

     };

     let Tatiana = {

       nombre : "tatiana",

       color_cabello : "amarillo",

       color_roba : "azul",

       barba : "ninguna",

       color_de_ulls : "azul",

       sexe : "Mujer",

       edat : "joven"

     };


     let Tomas = {

       nombre : "tomas",

         color_cabello : "marron",

         color_roba : "verde",

         barba : "ninguna",

         color_de_ulls : "azul",

         sexe : "Hombre",

         edat : "joven"


     };






        return [alba,antonio,carlos,carmen,cristina,daniel,elena,elisa,irene,ivan,jorge,Juan,Julia,Lucas,Lucia,Luis,Manolo,
        Mar,Maria,Noelia,Pablo,Paco,Paula,Paz,Rafa,Rosa,Tatiana,Tomas];
    };

    let vector_info_personajes = info_personajes();


    for(let i = 0; i < 28;i++) {


        vector_info_personajes.filter(function (prop) {

            if (personajes[i].getElementsByTagName("IMG")[0].getAttribute("name") === prop.nombre) {

                personajes[i].nombre = prop.nombre;

                personajes[i].color_cabello = prop.color_cabello;

                personajes[i].color_roba = prop.color_roba;

                personajes[i].barba = prop.barba;

                personajes[i].color_de_ulls = prop.color_de_ulls;

                personajes[i].sexe = prop.sexe;

                personajes[i].edat = prop.edat;



            }

        });

    }



    let persona_random = personajes[Math.floor(Math.random()*27)];

    let preguntas_persona_random = [];

    preguntas_persona_random.push("Mi color de cabello es: "+ persona_random.color_cabello);

    preguntas_persona_random.push("Mi color de ropa es: "+persona_random.color_roba);

    preguntas_persona_random.push("Tipo de barba: "+ persona_random.barba);

    preguntas_persona_random.push("Color de ojos: "+ persona_random.color_de_ulls);

    preguntas_persona_random.push("Sexo: "+persona_random.sexe);

    preguntas_persona_random.push("Edat: "+persona_random.edat);

    console.log(preguntas_persona_random);

    console.log(persona_random);



    return [persona_random,preguntas_persona_random];
}


function juego(){

    let herramientas_juego = montaje_juego();

    let personajes = document.getElementById("personajes_juego").getElementsByTagName("td");

     window.persona_random = herramientas_juego[0];

     window.preguntas_persona_random = herramientas_juego[1];



    for(let i = 0; i < 28;i++) {

        personajes[i].addEventListener("click", function () {


            if(persona_random !== this){

                alert("te equivocastes de persona");

                alert(preguntas_persona_random.shift());

                if(preguntas_persona_random.length === 0){

                    alert("perdistes,la solucion era: " + persona_random.nombre)
                }


            }else{

                alert("Me encontrastes");

                alert("Numero de preguntas usadas: " + (6-preguntas_persona_random.length));

                location.reload();

            }



        }, false);

    }





    document.getElementById("pelo_sel").addEventListener("change", function () {

        if(persona_random.color_cabello === document.getElementById("pelo_sel").options[document.getElementById("pelo_sel").selectedIndex].value){

            alert("Tengo ese cabello!");



        }else{


            if(preguntas_persona_random.length === 0){

                alert("perdistes,la solucion era: " + persona_random.nombre);

                location.reload();
            }else{

                alert("No tengo ese cabello");

                alert(preguntas_persona_random.shift());

            }


        }

    },true);





    //----


    document.getElementById("ropa_sel").addEventListener("change", function () {

        if(persona_random.color_roba === document.getElementById("ropa_sel").options[document.getElementById("ropa_sel").selectedIndex].value){

            alert("Tengo ese color de ropa!");


        }else{


            if(preguntas_persona_random.length === 0){

                alert("perdistes,la solucion era: " + persona_random.nombre);

                location.reload();
            }else{

                alert("No tengo ese color de ropa");

                alert(preguntas_persona_random.shift());

            }


        }

    },true);


    //------


    document.getElementById("barba_sel").addEventListener("change", function () {

        if(persona_random.barba === document.getElementById("barba_sel").options[document.getElementById("barba_sel").selectedIndex].value){

            alert("Tengo ese tipo de barba!");


        }else{


            if(preguntas_persona_random.length === 0){

                alert("perdistes,la solucion era: " + persona_random.nombre);

                location.reload();
            }else{

                alert("No tengo ese tipo de barba");

                alert(preguntas_persona_random.shift());

            }


        }

    },true);


    //----



    document.getElementById("color_ojos").addEventListener("change", function () {

        if(persona_random.color_de_ulls === document.getElementById("color_ojos").options[document.getElementById("color_ojos").selectedIndex].value){

            alert("Tengo ese color de ojos!");


        }else{


            if(preguntas_persona_random.length === 0){

                alert("perdistes,la solucion era: " + persona_random.nombre);

                location.reload();
            }else{

                alert("No tengo ese color de ojos");

                alert(preguntas_persona_random.shift());

            }


        }

    },true);


    //----

    //----



    document.getElementById("sexo").addEventListener("change", function () {

        if(persona_random.sexe === document.getElementById("sexo").options[document.getElementById("sexo").selectedIndex].value){

            alert("soy de ese sexo");


        }else{


            if(preguntas_persona_random.length === 0){

                alert("perdistes,la solucion era: " + persona_random.nombre);

                location.reload();
            }else{

                alert("No tengo ese sexo");

                alert(preguntas_persona_random.shift());

            }


        }

    },true);


    //----

    //----



    document.getElementById("edad").addEventListener("change", function () {

        if(persona_random.edat === document.getElementById("edad").options[document.getElementById("edad").selectedIndex].value){

            alert("tengo esa edat");


        }else{


            if(preguntas_persona_random.length === 0){

                alert("perdistes,la solucion era: " + persona_random.nombre);

                location.reload();
            }else{

                alert("no tengo esa edat");

                alert(preguntas_persona_random.shift());

            }


        }

    },true);


    //----





}

function rendirse(){


    if(typeof window.persona_random !== "undefined") {

        alert("perdistes!, La persona a buscar era: " + window.persona_random.nombre);

        location.reload();

    }else{

        alert("El juego a un no inicializo!");

    }
}



