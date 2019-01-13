
// Atencion: El ejercicio no pide nada de insertar datos, solo diseña.

herramientas_cookie();

//<editor-fold desc="Funcion Articulos">
function Articulo(codigo, descripcion, precio) {


        //<editor-fold desc="Propiedades del prototipo">
        let self = this;

        this.codi = codigo;

        this.descripcion = descripcion;

        this.precio = precio;
        //</editor-fold>

        //<editor-fold desc="Metodos propios de articulo">
        this.calculo_iva = function () {

            return ( this.precio / 100 * 21).toFixed(2) + " €";

        };

        this.calculo_total = function () {

            return ( this.precio / 100 * 121).toFixed(2) + " €";

        };


         //</editor-fold>

        //<editor-fold desc="Lanzadores de eventos">

         //<editor-fold desc="Funciones de eventos">
         function disparadores(){

             document.getElementById("b_bruto").addEventListener("click", function () {

                 document.getElementById("Preu_brut").value = self.precio + "€";

             }, false);


             document.getElementById("b_iva").addEventListener("click", function () {

                 document.getElementById("Iva").value = self.calculo_iva();

             }, false);


             document.getElementById("b_total").addEventListener("click", function () {

                 document.getElementById("Import_total").value = self.calculo_total();

             }, false);

             // Cookies,session,local

             document.getElementById("Guardar_datos").addEventListener("click", function () {

                 persistencia_de_datos(self);

             },false);

             document.getElementById("Recuperar_datos_por_cookie").addEventListener("click", function () {

                 obtener_datos_por_cookie();

                 document.getElementById("demo").innerHTML = "<h1> Datos recuperados por cookie! </h1>"



             },false);


             document.getElementById("Recuperar_datos_por_localstorage").addEventListener("click", function () {

                 obtener_datos_por_localstorage();

                 document.getElementById("demo").innerHTML = "<h1> Datos recuperados por localstorage! </h1>"

             },false);


             document.getElementById("Recuperar_datos_por_sessionstorage").addEventListener("click", function () {

                 obtener_datos_por_sessionstorage();

                 document.getElementById("demo").innerHTML = "<h1> Datos recuperados por sessionstorage! </h1>"


             },false);


             document.getElementById("Resetear_datos").addEventListener("click",function () {


    self.precio = 0;

    self.codi = null;

    self.descripcion = null;

    document.getElementById("Preu_brut").value = "";

    document.getElementById("Iva").value = "";

    document.getElementById("Import_total").value = "";




},false)



}
         //</editor-fold>

         //<editor-fold desc="Eventos segun el estado del documento">

    if(document.readyState !== "complete"){ // Si la pagina html NO se termino de cargar haz..


        window.addEventListener("load",function () {

            herramientas_cookie();

            disparadores();

        },false);

                // Uso un evento de window enves de window.onload porque este se puede apilar, en este caso no, pero

                // si necesito instanciar otra classe de otro tipo podre crear otro evento en window para que se efectue en

                // la carga.


         }else{

             disparadores();

                // Las funciones de los disparadores se ejecutaran en caso de que un articulo sea instanciado

                // despues de la creacion de la pagina.

         }
         //</editor-fold>

         //</editor-fold>

    }
//</editor-fold>


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

        localStorage.setItem("articulo",persistencia_navegador_localstorage);


        //</editor-fold>

        //<editor-fold desc="Guardando en sessionstorage">

        let persistencia_navegador_sessionstorage = JSON.stringify(constructor);

        sessionStorage.setItem("articulo",persistencia_navegador_sessionstorage);


        //</editor-fold>

        //<editor-fold desc="Guardando en una cookie">


         herramientas_cookie.setCookie("articulo",  JSON.stringify(constructor), 30);


        //</editor-fold>



    };
//</editor-fold>


//<editor-fold desc="Obtencion de datos segun la forma">
    let obtener_datos_por_cookie = function () {

        //<editor-fold desc="Obtencion de datos mediante cookies">

        let Articulo_codi_cache = JSON.parse(herramientas_cookie.getCookie("articulo")).codi;

        let Articulo_descripcion_cache = JSON.parse(herramientas_cookie.getCookie("articulo")).descripcion;

        let Articulo_precio_cache  = JSON.parse(herramientas_cookie.getCookie("articulo")).precio;


        let Articulo_en_cache = new Articulo(Articulo_codi_cache,Articulo_descripcion_cache,Articulo_precio_cache)

        return window.Articulo_en_cache = Articulo_en_cache; // Para poder ver el objeto en la ventana


        //</editor-fold>


    };

    let obtener_datos_por_localstorage = function(){

        //<editor-fold desc="Recuperar datos por localstorage">
        let Articulo_codi_cache = JSON.parse(localStorage.getItem("articulo")).codi;

        let Articulo_descripcion_cache = JSON.parse(localStorage.getItem("articulo")).descripcion;

        let Articulo_precio_cache  = JSON.parse(localStorage.getItem("articulo")).precio;


        let Articulo_en_cache = new Articulo(Articulo_codi_cache,Articulo_descripcion_cache,Articulo_precio_cache)
        //</editor-fold>

    };


    let obtener_datos_por_sessionstorage = function(){

        //<editor-fold desc="Recuperar datos por sessionstorage">
        let Articulo_codi_cache = JSON.parse(sessionStorage.getItem("articulo")).codi;

        let Articulo_descripcion_cache = JSON.parse(sessionStorage.getItem("articulo")).descripcion;

        let Articulo_precio_cache  = JSON.parse(sessionStorage.getItem("articulo")).precio;


        let Articulo_en_cache = new Articulo(Articulo_codi_cache,Articulo_descripcion_cache,Articulo_precio_cache)
        //</editor-fold>

    };
//</editor-fold>


    //<editor-fold desc="Probando el codigo (Ejercicio_4)">

     boligrafo = new Articulo("123", "Sirve para escribir", 10);


    //</editor-fold>







