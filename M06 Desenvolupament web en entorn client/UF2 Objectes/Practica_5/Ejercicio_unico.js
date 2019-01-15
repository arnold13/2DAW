/*
• Player
    ◦ Nom
    ◦ Energia
    ◦ Llista de powerups que té
    ◦ Actiu


  Enemic
    ◦ Nom
    ◦ Energia
    ◦ Pantalla del nivell en el que apareix
    ◦ Jefe (indica si és el monstre final del nivell)


•  Nivell
    ◦ Número de pantalles
    ◦ Llista d'enemics que apareixen
    ◦ Llista de powerups que apareixen


•  Powerups
    ◦ Nom
    ◦ Descripcio

    */


// Defino el objeto global global

function RPG(){

function Player(Nom,Energia,ID_power_up,Actiu){

    Object.assign(this,{Nom,Energia,ID_power_up,Actiu});

}

// Object assign = (Quien recibe datos, Quien los das);

// Object assign devuelve un objete y todos los datos que se le pasen se volveran en propiedades de este

// Entonces si object assign la apuntas a la propia funcion, y escoges las variables que pasas consigues

// que la funcion se vuelva en un setter, un setter que crea objetos con los prototipos de la funcion a la cual

// apuntastes el object assign


    this.Player = Player;


// Pero la cosa no acaba ahi, ya que si apuntas a la propia funcion , una vez ya la usastes como setter puedes convertir

// aquella funcion en un objeto que contendra las propiedades de aquel objeto que anteriormente era una funcion

// Esto lo aplique en mis objetos para tener un codigo lo mas limpio posible (O almenos lo mas limpio que pude hacer yo).


function Enemic(Nom,Energia,ronda_spawn,boss) {

    Object.assign(this, {Nom, Energia, ronda_spawn, boss})

}

    this.Enemic = Enemic;



function Nivel(Num_Rondas, Lista_enemigos,Lista_Powerups){

    Object.assign(this, {Num_Rondas, Lista_enemigos,Lista_Powerups })

}

    this.Nivel = Nivel;


function Powerups(Nom,Descripcion){

    Object.assign(this,{Nom,Descripcion});

}

    this.Powerups = Powerups;

}


function definiendo_juego(){

    // Esta funcion es la construye los objetos, el orden de estos es importante

    // ya que me basare en eso para crear listas y poder visualizar desde otra function

    let Juego = new RPG();

    Definiendo_Player(Juego);

    // Juego = Jugador

    Definiendo_Enemic(Juego);

    // Enemigo = Lista de enemigos(Tipos de enemigos existentes) (Objeto con arrays)

    Definiendo_Nivel(Juego);

    // Nivel podra ver la lista de enemigos ya creada (Los tipos de enemigos existentes) e incorporarlos a su nivel

    // El campo nivel lo hice pensando en que solo deberia existir 1 nivel o mazmorra como quieras llamarlo.

    // Ya que no tiene sentido hacer varios niveles si nos vas a definirlos todos y ni mucho menos lo pondras en marcha

    // con una simulacion por turnos

    // (Aunque no hubiera sido complicado, Nivel pasaria de ser un objeto propiedad nivel a ser un array con objetos nivel)

    Definiendo_Powerups(Juego);

    // Aqui simplemente defino una lista de powerups existentes (Tipos)

    // Como este es la ultima lista de objetos existentes, no le aplique nada especial

    // ya que nuestro jugador solo tiene su HP y no puede existir mas pociones que una pocion de HP

    // Pero si hubiera tenido mas caracteristicas lo mas probable es que hubiera hecho algo parecido a lo que hice con enemigo

    // Crear las power ups y mostrarselo al jugador el tipo de powerups existentes (Como enemigo con nivel);


    return [console.log(Juego), window.Juego = Juego];

}


/**
 * @return {Player}
 */
function Definiendo_Player(Objeto){

    // Si detecta los 2 jugadores, no preguntara y se limitara a saltar el mensaje de maximos jugadores


    let confirmar = true; // Futuro While para seguir creando jugadores.

    let Player = {}; // Quiero que player sea un objeto con 2 objetos dentro (Max 2 jugadores)

    while(confirmar){

        if(typeof Player.Jugador_1 != "object"){

            // El tener varias variables para jugador es porque queria que cada uno tuviera diferente lineas de texto.

            let Nombre_Jugador = prompt("Nombre_del_jugador?");

            let Energia_Jugador = prompt("Energia del jugador? (HP)");

            let lista_power_up_jugador = function () {

                let lista = [];

                let confirmacion = true;

                while(confirmacion){

                    let pocion  = prompt("que pocion deseas?(Insertar numero) \n\n  1 - Pocion de vida (HP) \n 0 - Ninguna");

                    if (pocion === "1"){

                        lista.push("Pocion_HP");

                        confirmacion = confirm("Quieres mas pociones?");

                    }else{

                        confirmacion = false;
                    }


                }

                return lista;

            };

            let Activo = confirm("Esta activo?");

            let Jugador_1 = new Objeto.Player(Nombre_Jugador,Energia_Jugador,lista_power_up_jugador(),Activo);

            alert("Programado Jugador_1");

            Player.Jugador_1 = Jugador_1;

            confirmar = confirm("Añadir Jugador 2?");

            if(confirmar === false){

                break;

            }

        } // Un segundo IF para para crear un segundo jugador

        if(typeof Player.Jugador_1 === "object" && typeof Player.Jugador_2 != "object"){

            let Nombre_Jugador_2 = prompt("Nombre_del_jugador 2?");

            let Energia_Jugador_2= prompt("Energia del jugador 2? (HP)");

            let lista_power_up_jugador = function () {

                let lista = [];

                let confirmacion = true;

                while(confirmacion){

                    let pocion  = prompt("que pocion deseas?(Insertar numero) \n\n  1 - Pocion de vida (HP) \n 0 - Ninguna");

                    if (pocion === "1"){

                        lista.push("Pocion_HP");

                        confirmacion = confirm("Quieres mas pociones?");

                    }else{

                        confirmacion = false;
                    }


                }

                return lista;

            };

            let Activo_2 = confirm("Esta activo?");


            let Jugador_2 = new Objeto.Player(Nombre_Jugador_2,Energia_Jugador_2,lista_power_up_jugador(),Activo_2);

            alert("Programado Jugador_2");

            Player.Jugador_2  = Jugador_2;

            break; // Como no quiero mas jugadores ademas del 2 , cierro el while y paso a crear el objeto.player

            // La funcion dentro del objeto a el objeto finalizado.

        }






    }

    Objeto.Player = Player; // Como el objeto Player ya esta bien estructurado al final de la funcion quiero el

    // que es hasta ahora la funcion de Objeto.Player sera ahora el objeto finalizado de Player (El de esta funcion),

    // SOBREESCRIBIENDOLO.

    // Apartir de ahora es la misma base para las demas funciones.


}


/**
 * @return {number}
 */
function Definiendo_Enemic(Objeto){

    let confirmacion = true;

    let Enemic = []; // Objeto funcion propia

    while(confirmacion) {

        /**
         * @return {string}
         */
        let Nombre_Enemic = function () {


            let nombre = prompt("Nombre_del_Enemigo?");

            for (let prop in Enemic) { // Como podremos crear varios enemigos, este comprobara si dentro del

                                        // array enemigos ya existe un enemigo con el nombre establecido. (Para evitar clones o sobreescritura)

                if (Enemic[prop].nombre === nombre) {

                    alert("Ya existe un monstruo con este nombre en la tabla,escoge 1 nombre adecuado por favor");

                    Nombre_Enemic();

                }
            }

            return nombre;


        };

        let Energia_Enemic = prompt("Energia del Enemigo? (HP)");

        let Ronda_spawn_Enemic = prompt("En que ronda aparece?");

        let boolean_boss = confirm("Es el Jefe del nivel?");

        Enemic.push(new  Objeto.Enemic(Nombre_Enemic(), Energia_Enemic, Ronda_spawn_Enemic, boolean_boss));

        confirmacion = confirm("Quieres incluir mas monstruos?");

    }

    Objeto.Enemic = Enemic; // Lo mismo que con player, El objeto.propiedad_metodo es sobreeescrito por el array de la funcion propia;

}

/**
 * @return {null}
 */
function Definiendo_Nivel(Objeto){


    let Num_Rondas_Nivel = prompt("Cuantas rondas tendra el nivel?");

    let lista_enemigos = function () {

        let lista = [];

        let confirmacion = true;

        let lista_de_monstruo = function () {

            let lista_string = "\n";

            for(let prop in Objeto.Enemic){


                if(Objeto.Enemic.hasOwnProperty(prop)){

                    lista_string += "Nombre del Enemigo : " + Objeto.Enemic[prop].Nom + "\n\n" ;

                    //El hasownproperty es para evitar errores, como aqui tocamos varios objetos y propiedades

                    // puede que sin querer usemos una propiedad de un objeto diferente sin quererlo

                    // Ahi entra en juego esa funcion, si la propiedad prop pertenece al objeto Enemic (Si es una de sus propiedades)

                    // Haz lo siguiente:


                    // Ingresar en una lista los nombres de los tipos de enemigos existentes para poder escoger cual de ellos quieres en tu nivel.

                }

            }

            return lista_string;

        };

        while(confirmacion){

            let monstruo  = prompt("Pon el nombre del monstruo: \n\n"+ "La siguiente tabla muestra los monstruos existentes en la lista (Coge solo el nombre): \n" + lista_de_monstruo());

            let lista_array_nombres_m = function () {

                let lista = [];

                for(let prop in Objeto.Enemic){

                    // Ver enemigos existentes, porque no quiero que si en este nivel solo tuvieran que existir goblins
                    // el jugador le ponga un dios de 99999k de HP de la nada. (Amenos que lo haya especificado antes)

                    if(Objeto.Enemic.hasOwnProperty(prop)){

                        lista.push(Objeto.Enemic[prop].Nom); // Lista = Array.

                    }


                }

                return lista;
            }; // Array de los nombres de los monstruos disponibles

            if(!lista_array_nombres_m().includes(monstruo)){

                alert("Ese monstruo no existe;") // Si el nombre del monstruo al que quieres poner en tu nivel no existe entre los tipos de monstruos..

            }else{
                lista.push(monstruo); // Si existe, metelo en la lista de monstruos.

            }


            confirmacion = confirm("Quieres incluir mas monstruos al nivel?");


        }

        return lista;

    };


    // Atencion: Monstruos y enemigos es lo mismo para mi, perdon si esto puede causar confusion

    let lista_power_ups = function () {

        return ["Pocion_HP"]; // Tipos de powerUps encontrable en este nivel (Almenos eso entendi yo);

        // Solo existe una posible pocion en este juego, no se merece ni que haga un array para poder visualizarlo

        // cuando podria hacerlo de forma estatica y se veria exactamente igual.

    };

    Objeto.Nivel = new Objeto.Nivel(Num_Rondas_Nivel, lista_enemigos(), lista_power_ups());

    // Mas de lo de antes, Objeto.Prop_Method = Nuevo Objeto con propiedadaes definidas.
}

function Definiendo_Powerups(Objeto){

    // Esto ya lo hice pues porque se tenia que hacer, no se que mas pociones le puedes poner ademas de HP, pero

    // si se te ocurre alguna puedes ponerlo en esta lista de tipos de powerups.

let PowerUps = []; // Lista de powerups

let confirmacion = true;

    while(confirmacion) {

        let nom_PowerUp = prompt("Nombre del powerUp?");

        let descripcion = prompt("Descripcion del powerup?");

        PowerUps.push(new  Objeto.Powerups(nom_PowerUp,descripcion));

        confirmacion = confirm("Quieres incluir mas PowerUps?");

    }



    Objeto.Powerups = PowerUps; // Mas de lo de antes, Objeto.Prop_Method = Nuevo Objeto con propiedadaes definidas.

}

function Desplegar_JSON() {


    let datos_JSON = JSON.stringify(window.Juego,undefined,4);


    if(datos_JSON === undefined){

        document.getElementById("myTextarea").innerText = "Primero define como sera tu mazmorra!";

    }else{

        document.getElementById("myTextarea").innerText = datos_JSON;

    }


}




// Consola

// Aqui no hay nada, ya que lo instancio todo en la funcion de desplegar;

// Eso solo para poder hacer el onclick y ahorrarme los eventos que como podras haber visto en mis anteriores practicas

// es extremedamente doloroso hacerlas.
