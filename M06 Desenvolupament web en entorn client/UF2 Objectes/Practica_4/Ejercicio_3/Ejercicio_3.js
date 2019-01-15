
herramientas_cookie(); // Inicializando herramientas

// Exc3: Defineix l'estructura d'un objecte que emmagatzema una factura. Les factures són formades per la següent informació:


//     •Dades de la pròpia empresa (nom de l'empresa, adreça, telèfon i NIF)  /NIF
// •Dades del client (nom, cognoms, adreça, telèfon i DNI) DNI,COGNOM
// •Una llista de productes adquirits (descripció, preu i quantitat de cadascun)
//
//
// •Altra informació bàsica
// (import total, tipus d'IVA aplicable i forma de pagament)
//
// Un cop definides les propietats de la factura, cal afegir un mètode que calculi
// l'import total de la factura i n'actualitzi la propietat corresponent. Finalment,
//     afegiu un altre mètode que mostri per pantalla la informació de la factura.




function Factura(){


    // Como funciona?

    // Primero: Modelar la jerarquia (Establecer la jerarquia de controladores

    // Ej: Persona tiene nombre y metodos de nombre, pues Persona Fisica (Cliente) , heredara esos datos

    // Atencion! = Se heredan los metodos pero no las propiedades establecidas manualmente.

    // Segundo: Hacer un setter y un getter (Que es mas un metodo para establecer los datos del cliente,empresa y articulo

    // de una Forma mas facil pero que hacen la misma funcion que un setter y un getter.



    //<editor-fold desc="Modelo persona">

    // Jerarquia: Persona -> Persona juridica (Empresa) | Persona Fisica (Cliente);

    // Persona solo se usa como modelo en esta parte;

    function Persona(Nombre,telefono,direccion) {

        this.Nombre = Nombre || "no definido";

        this.telefono = telefono;

        this.direccion = direccion;


    }

    //</editor-fold>

    //<editor-fold desc="Modelo, herencia , setter y getter de empresa">

    //Apartado de empresa:


    //* Modelo de empresa, con call puedo llamar las propiedades de la funcion a la que llamo;


    let modelo_empresa = function (Nombre,telefono,direccion,NIF) {

        Persona.call(this,Nombre,telefono,direccion);

        this.NIF = NIF ;

    };


    //* Herencia  "Metodo nuevo = Metodo.prototype (El tipo)", es lo mismo que usar un new Method.

    //  Basicamente es un clon de modelo empresa (A lo que viene ser su constructor).

    // Atencion: Cuando heredas un metodo, todos los VALORES que tenia el metodo son borrados

    // Ej: this.NIF = NIF (No se borra al ser una referencia) || this.NIF = "Hola!" (Se borra al ser un valor propio del constructor);


    this.Persona_Juridica =  Object.create(modelo_empresa.prototype);

    //* Setter

    //* Porque un setter? para definir los datos de una forma facil y ademas porque fue la unica manera que encontre de hacerlo asin

    // ya que si usamos el constructor persona juridica,esta le dara los datos a factura, ya que el this hara referencia a ese mimso.


    this.set_Persona_Juridica = function (Nombre,telefono,direccion,NIF) {

        this.Persona_Juridica.Nombre = Nombre || alert("Te has olvidado de definir el Nombre de la empresa");

        this.Persona_Juridica.telefono = telefono || alert("Te has olvidado de definir el telefono de la empresa");

        this.Persona_Juridica.direccion = direccion || alert("Te has olvidado de definir la direccion de la empresa");

        this.Persona_Juridica.NIF = NIF || alert("Te has olvidado de definir el NIF de la empresa");

    };


    // Getter, esto lo puse por 2 razones, para que sea mas facil la implementacion de estos datos en el HTML y porque me

    // senti medio obligado al hacer un setter sin su getter, ya que la idea original fue usar el propio constructor como funcion

    // pero no se pudo ya que un objeto no puede ser funcion y array a la vez.


    this.get_Persona_Juridica = function () {

        let mensaje = "<h1><b> Apartado de empresa </b></h1>";

        for (let prop in this.Persona_Juridica){

            if(this.Persona_Juridica.hasOwnProperty(prop)){ // Has own property verifica si la propiedad que pongo dentro

                                                            // de este metodo es de propiedad del constructor al que esta vinculado.

                mensaje += "<br><br>" + "La propiedad " + prop + " Tiene el siguiente valor : " + this.Persona_Juridica[prop];
            }

        }

        return mensaje;
    };




    //</editor-fold>

    //<editor-fold desc="Modelo, herencia , setter y getter de cliente">

    // Esto es casi una copia exacta del constructor persona juridica por lo que no lo explicare.


    //Cliente


        let modelo_cliente = function (Nombre, telefono, direccion, DNI, cognom) {

            Persona.call(this, Nombre, telefono, direccion);

            this.DNI = DNI;

            this.cognom = cognom;
        };

        this.Persona_Fisica = Object.create(modelo_cliente.prototype);


        this.set_Persona_Fisica = function (Nombre, telefono, direccion, DNI, cognom) {


            this.Persona_Fisica.Nombre = Nombre || alert("Te has olvidado de definir el Nombre del cliente");

            this.Persona_Fisica.telefono = telefono || alert("Te has olvidado de definir el telefono del cliente");

            this.Persona_Fisica.direccion = direccion || alert("Te has olvidado de definir la direccion del cliente");

            this.Persona_Fisica.DNI = DNI || alert("Te has olvidado de definir el DNI deL cliente");

            this.Persona_Fisica.cognom = cognom || alert("Te has olvidado de definir el apellido del cliente");


        };


        this.get_Persona_Fisica = function () {


            let mensaje = '<h1><b>'+ 'Apartado de Cliente' +'</b></h1>';

            for (let prop in this.Persona_Fisica){

                if(this.Persona_Fisica.hasOwnProperty(prop)){



                    mensaje += "<br><br>" + "La propiedad " + prop + " Tiene el siguiente valor : " + this.Persona_Fisica[prop];
                }

            }



            return mensaje;



        };
    //</editor-fold>

    //<editor-fold desc="Articulo">


    // Valores por defecto de articulo (Al crear la variable tipo Factura, este dato se creara automaticamente);


    this.Articulo = {

        desc : "Sin definir",

        precio :  "Sin definir",

        cantidad :  "Sin definir"

    };


    this.set_articulos = function(desc,precio,cantidad){

        //<editor-fold desc="Explicacion">
        // Porque hacer un setter? , cuando creas el objeto y deseas pasarle datos

        // mediante un metodo y no de forma manual (ej: factura.articulo,desc = "nuevo desc";), es

        // conveniente hacer un setter, ya que este hara el trabajo de funcion para declarar el objeto sin

        // este sea marcado como funcion en el navegador web.

        // ej: this.Articulo = function (p1,p2,p3) { this.articulo = { desc = p1 }}

        // Al no crear un constructor por defecto, este no se inicializara amenos que el propio usuario

        // llame de forma explicita el metodo articulo, y aun haciendolo, en la consola saldra reflejado

        // como funcion y no como objeto ya que lo primero que llamas es una funcion para crear el supuesto

        // objeto, de ahi la necesidad de uso de setters y getters.
        //</editor-fold>

        this.Articulo = {

            desc : desc,

            precio :  precio ,

            cantidad :  cantidad

        };

        return "articulo actualizado"

    };


    this.get_articulos = function () {

        let mensaje = '<h1><b>'+ 'Apartado de Articulos' +'</b></h1>';

        for (let prop in this.Articulo){

            if(this.Articulo.hasOwnProperty(prop)){



                    mensaje += "<br><br>" + "La propiedad " + prop + " Tiene el siguiente valor : " + this.Articulo[prop];


            }
        }

        return mensaje;


    };
    //</editor-fold>

    //<editor-fold desc="Metodos y propiedades propias de factura">

    // La propia factura


    this.total = function (precio,cantidad) {

        Factura.call(precio,cantidad);

        return (this.Articulo.precio / 100 * (this.tipo_de_iva + 100) )*this.Articulo.cantidad + " €";
    };

    this.tipo_de_iva = 21;

    this.forma_de_pagamiento = "Metalico";

    let self = this;



        function disparadores(){

            document.getElementById("desglose").addEventListener("click", function () {

                console.log({self});

                document.getElementById("Info_factura").innerHTML = self.get_Persona_Fisica()+self.get_Persona_Juridica()+self.get_articulos();


            },false);

            document.getElementById("Resetear_datos").addEventListener("click",function () {

                delete self.forma_de_pagamiento;
                delete self.Persona_Fisica;
                delete self.Persona_Juridica;
                delete self.Articulo;
                delete self.tipo_de_iva;

                console.log(self);



             },false)


            document.getElementById("Guardar_datos").addEventListener("click", function () {

                persistencia_de_datos(self);

            },false);




            document.getElementById("Recuperar_datos_por_cookie").addEventListener("click", function () {

                obtener_datos_por_cookie();

                console.log(window.factura_cache);

            },false);


            document.getElementById("Recuperar_datos_por_localstorage").addEventListener("click", function () {

                obtener_datos_por_localstorage();


            },false);


            document.getElementById("Recuperar_datos_por_sessionstorage").addEventListener("click", function () {

                obtener_datos_por_sessionstorage();


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

    //</editor-fold>


} // Final factura


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

    localStorage.setItem("factura",persistencia_navegador_localstorage);


    //</editor-fold>

    //<editor-fold desc="Guardando en sessionstorage">

    let persistencia_navegador_sessionstorage = JSON.stringify(constructor);

    sessionStorage.setItem("factura",persistencia_navegador_sessionstorage);


    //</editor-fold>

    //<editor-fold desc="Guardando en una cookie">


    herramientas_cookie.setCookie("factura",  JSON.stringify(constructor), 30);


    //</editor-fold>



};
//</editor-fold>

//<editor-fold desc="Persistencia: Recuperar datos en Cookie,local y sesion">
let obtener_datos_por_cookie = function () {

    //<editor-fold desc="Obtencion de datos mediante cookies">

    let copia_factura_cache = JSON.parse(herramientas_cookie.getCookie("factura"));

    let factura_cache = Object.assign(new Factura,copia_factura_cache);

    return cliente = factura_cache; // Para poder ver el objeto en la ventana


    //</editor-fold>


};

let obtener_datos_por_localstorage = function(){

    //<editor-fold desc="Recuperar datos por localstorage">
    let copia_factura_cache = JSON.parse(localStorage.getItem("factura"));

    let factura_cache = Object.assign(new Factura,copia_factura_cache);

    return cliente = factura_cache; // Para poder ver el objeto en la ventana
    //</editor-fold>

};


let obtener_datos_por_sessionstorage = function(){

    //<editor-fold desc="Recuperar datos por sessionstorage">
    let copia_factura_cache = JSON.parse(sessionStorage.getItem("factura"));

    let factura_cache = Object.assign(new Factura,copia_factura_cache);

    return cliente = factura_cache; // Para poder ver el objeto en la ventana
    //</editor-fold>

};
//</editor-fold>



//<editor-fold desc="Ejecutando el codigo">
// Ejecutando el Codigo;







let cliente = new Factura();

cliente.set_Persona_Fisica("Ferran","672245123","Carrer colegi","J3411294X","Martorell");

cliente.set_Persona_Juridica("Nosequeponer.SL","612412341","Calle numancia","X1241231X");

cliente.set_articulos("Boligrafo",1,2);






//</editor-fold>

