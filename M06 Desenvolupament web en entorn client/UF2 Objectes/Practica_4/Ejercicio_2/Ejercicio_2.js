
//<editor-fold desc="Prototipo">
function Viaje(origen,destino,transporte,precio){

    let self = this;

    function disparadores(){

        // Cookies,session,local


        document.getElementById("Recuperar_datos_por_cookie").addEventListener("click", function () {

            obtener_datos_por_cookie();

            console.log(window.Viaje_en_Cache);

            resumen_viaje(window.Viaje_en_Cache);

        },false);


        document.getElementById("Recuperar_datos_por_localstorage").addEventListener("click", function () {

            obtener_datos_por_localstorage();

            resumen_viaje(window.Viaje_en_Cache);

        },false);


        document.getElementById("Recuperar_datos_por_sessionstorage").addEventListener("click", function () {

            obtener_datos_por_sessionstorage();

            resumen_viaje(window.Viaje_en_Cache);


        },false);

    }


    if(document.readyState !== "complete"){ // Si la pagina html NO se termino de cargar haz..


        window.addEventListener("load",function () {

            herramientas_cookie();

            disparadores();

        },false);

    }else{

        disparadores();



    }

        return {

            origen: origen,

            destino: destino,

            transporte: transporte,

            precio: precio,

            precio_total: function () {

                return (precio / 100 * 121) + "€";

            }

        };


    }
    //</editor-fold>

//<editor-fold desc="Lanzador de eventos">
    window.onload = function () {

    herramientas_cookie();

    document.getElementById("Viaje").addEventListener("click",function () {

        let origen = prompt("Origen?");

        let destino = prompt("Destino?");

        let transporte = prompt("Medio de transporte?");

        let precio = prompt("Precio pagado?");


        let viaje_1 = new Viaje(origen,destino,transporte,precio);

        resumen_viaje(viaje_1);

        let boton = document.createElement("button");
        let value = document.createTextNode("Guardar datos");

        boton.addEventListener("click", function () {

            persistencia_de_datos(viaje_1);

        },false);

        boton.appendChild(value);
        document.body.appendChild(boton);

    },false)

};
    //</editor-fold>

function resumen_viaje(constructor) {

    document.write("Ha reservado una viaje con las siguientes caracteristicas:" + "</br>" +
        "Origen: " + constructor.origen + "</br>" +
        "Destino:" + constructor.destino + "</br>" +
        "Transporte: " + constructor.transporte + "</br>" +
        "Precio base: " + constructor.precio +"€" +"</br>" +
        "Precio Total: " + constructor.precio_total() + "</br> </br>");
}



//<editor-fold desc="Herramientos para la creacion de la cookie">
function herramientas_cookie(){

    function setCookie (name,value,days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    herramientas_cookie.setCookie = setCookie;

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    herramientas_cookie.getCookie = getCookie;


    function eraseCookie(name) {
        document.cookie = name+'=; Max-Age=-99999999;';
    }

    herramientas_cookie.eraseCookie = eraseCookie;


    function listCookies() {
        let theCookies = document.cookie.split(';');
        let aString = '';
        for (let i = 1 ; i <= theCookies.length; i++) {
            aString += i + ' ' + theCookies[i-1] + "\n";
        }
        return aString;
    }

    herramientas_cookie.listCookies = listCookies;


}
//</editor-fold>


//<editor-fold desc="Persistencia : Guardar datos en Cookie,local y session">
let persistencia_de_datos = function(constructor){


    //<editor-fold desc="Guardando_en_localstorage">

    let persistencia_navegador_localstorage = JSON.stringify(constructor);

    localStorage.setItem("viaje",persistencia_navegador_localstorage);


    //</editor-fold>

    //<editor-fold desc="Guardando en sessionstorage">

    let persistencia_navegador_sessionstorage = JSON.stringify(constructor);

    sessionStorage.setItem("viaje",persistencia_navegador_sessionstorage);


    //</editor-fold>

    //<editor-fold desc="Guardando en una cookie">


    herramientas_cookie.setCookie("viaje",  JSON.stringify(constructor), 30);


    //</editor-fold>



};
//</editor-fold>


//<editor-fold desc="Obtencion de datos segun la forma">
let obtener_datos_por_cookie = function () {

    //<editor-fold desc="Obtencion de datos mediante cookies">


    let Viaje_origen_cache = JSON.parse(herramientas_cookie.getCookie("viaje")).origen;

    let Viaje_destino_cache = JSON.parse(herramientas_cookie.getCookie("viaje")).destino;

    let Viaje_transporte_cache  = JSON.parse(herramientas_cookie.getCookie("viaje")).transporte;

    let Viaje_precio_cache  = JSON.parse(herramientas_cookie.getCookie("viaje")).precio;

    let Viaje_en_Cache = new Viaje(Viaje_origen_cache,Viaje_destino_cache,Viaje_transporte_cache,Viaje_precio_cache);

    return window.Viaje_en_Cache = Viaje_en_Cache; // Para poder ver el objeto en la ventana


    //</editor-fold>

};

let obtener_datos_por_localstorage = function(){

    //<editor-fold desc="Recuperar datos por localstorage">
    let Viaje_origen_cache = JSON.parse(localStorage.getItem("viaje")).origen;

    let Viaje_destino_cache = JSON.parse(localStorage.getItem("viaje")).destino;

    let Viaje_transporte_cache  = JSON.parse(localStorage.getItem("viaje")).transporte;

    let Viaje_precio_cache  = JSON.parse(localStorage.getItem("viaje")).precio;

    let Viaje_en_Cache = new Viaje(Viaje_origen_cache,Viaje_destino_cache,Viaje_transporte_cache,Viaje_precio_cache);

    return window.Viaje_en_Cache = Viaje_en_Cache; // Para poder ver el objeto en la ventana
    //</editor-fold>

};


let obtener_datos_por_sessionstorage = function(){

    //<editor-fold desc="Recuperar datos por sessionstorage">
    let Viaje_origen_cache = JSON.parse(sessionStorage.getItem("viaje")).origen;

    let Viaje_destino_cache = JSON.parse(sessionStorage.getItem("viaje")).destino;

    let Viaje_transporte_cache  = JSON.parse(sessionStorage.getItem("viaje")).transporte;

    let Viaje_precio_cache  = JSON.parse(sessionStorage.getItem("viaje")).precio;

    let Viaje_en_Cache = new Viaje(Viaje_origen_cache,Viaje_destino_cache,Viaje_transporte_cache,Viaje_precio_cache);

    return window.Viaje_en_Cache = Viaje_en_Cache; // Para poder ver el objeto en la ventana
    //</editor-fold>

};
//</editor-fold>

let Viaje_1 = new Viaje("no_establecido","no_establecido","no_establecido",0);






// //<editor-fold desc="Description">
// Exc2. Dissenya un prototip anomenat viatge que disposi de quatre propietats
// (origen, destí, transport, preu), els valors de les quals seran sol.licitades a
// l'usuari mitjançant un quadre de diàleg (prompt()). A més, el prototip disposarà d'
// un mètode que mostri l'import total del viatge sol.licitat (iva inclòs).
// En prémer el botó de la imatge, es procedirà a demanar els valors de les quatre propietats
// i, en acabar, es mostrarà la informació del viatge, de la seüent forma:
//</editor-fold>