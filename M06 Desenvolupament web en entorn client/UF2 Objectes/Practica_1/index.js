
/*

//<editor-fold desc="Punto _1">
// Punto 1:


//<editor-fold desc="Classe Cuenta">
function Cuenta(){


    //<editor-fold desc="Variables privadas">


    let titular = String();


    let cantidad = Number();




    //</editor-fold>

    //<editor-fold desc="Constructores">


    if(arguments.length>0)
    {

        if (arguments.length === 1){

            titular = arguments[0];


        } else if (arguments.length === 2){


            titular = arguments[0];

            if (arguments[1] < 0) {

                cantidad = 0;

            } else {

                cantidad = arguments[1];
            }

        }

    };





    //</editor-fold

    //<editor-fold desc="Getters and setters">
    return {

        set_titular : function (param) {

            return ( typeof param === "string") ?  titular = param :  console.error("Inserta un valor alfanumerico");



        },

        get_titular : function() {


            return titular;


        },



        set_cantidad : function (param) {

            return ( typeof param === "number") ?  cantidad = param :  console.error("Inserta un valor numerico");


        },

        get_cantidad : function() {

            return cantidad;


        },



        ingresar : function (param) {

            if(param> 0){
                return cantidad += param;
            }


        },

        retirar : function (param){

            if (cantidad - Math.abs(param) < 0) {
                return cantidad = 0;
            } else {
                return cantidad -= param;
            }

        },

        toString : function() {

            return "El titular " + titular + " tiene " + cantidad + " euros en la cuenta";

        }





    };
    //</editor-fold>


}
//</editor-fold>

//<editor-fold desc="Main class">


function main_class() {

    function main_method(){

        let cuenta_1 = new Cuenta("DiscoDurodeRoer");
        let cuenta_2 = new Cuenta("Fernando", 300);

        //Ingresa dinero en las cuentas
        cuenta_1.ingresar(300);
        cuenta_2.ingresar(400);

//Retiramos dinero en las cuentas
        cuenta_1.retirar(500);
        cuenta_2.retirar(100);

//Muestro la informacion de las cuentas
        console.log(cuenta_1.toString()); // 0 euros
        console.log(cuenta_2.toString()); // 600 euros

// Nota: Println imprime , pero de momento java solo imprime por consola (Solo teniendo el proyecto java).

    }

    return main_method();

}

main_class();





//</editor-fold>
//</editor-fold>

*/


//<editor-fold desc="Punto 2">
// Punto_2
/*

//<editor-fold desc="Variables publicas">
const INFRAPESO = -1;

const  PESO_IDEAL = 0;

const SOBREPESO = 1;

const valor_statico_SEXO_DEF = 'H';
//</editor-fold>

function Persona() {

    //<editor-fold desc="Variables privadas">
    const SEXO_DEF = 'H';

    let nombre = String();

    let edad = Number();

    let DNI = String();

    let sexo = String(); // No se puede especificar valor Char

    let peso = Number();

    let altura = Number();
    //</editor-fold>

    //<editor-fold desc="Metodos privados">
    let comprobarSexo = function () { // No devuelve nada

        if (sexo !== 'H' || sexo !== 'M') {
            sexo = SEXO_DEF;
        } else {
            console.log("Error en comprobar sexo")
        }
    };

    let generarDni = function () {

        const divisor = Number(23);

        let numDNI = ((Math.floor(Math.random() * 10 + 10000000)));

        let res = numDNI - (numDNI / divisor * divisor);

        //Calculamos la letra del DNI

        let letraDNI = generaLetraDNI(res);

        //Pasamos el DNI a String

        DNI = toString(DNI) + toString(letraDNI);

    };

    let generaLetraDNI = function (res) {

        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
            'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
            'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        return letras[res];

    };


    /!*





     *!/


    //</editor-fold>

    //<editor-fold desc="Constructor">
    if (arguments.length === 5) {

        nombre = arguments[0];
        edad = arguments[1];
        peso = arguments[3];
        altura = arguments[4];
        generarDni();
        sexo = arguments[2];
        comprobarSexo();

    } else {
        console.log("error")
    }
    //</editor-fold>

    //<editor-fold desc="Metodos publicos y sobrecargados">

    return {


        toString: function () {

            if (sexo === 'H') {
                sexo = "hombre";
            } else {
                sexo = "mujer";
            }
            return "Informacion de la persona:\n"
                + "Nombre: " + nombre + "\n"
                + "Sexo: " + sexo + "\n"
                + "Edad: " + edad + " años \n"
                + "DNI: " + DNI + "\n"
                + "Peso: " + peso + " kg\n"
                + "Altura: " + altura + " metros\n";


        },

        //<editor-fold desc="Metodos publicos">


        setNombre: function (param) {

            ((typeof param === "string") ? nombre = param : console.log("Debe ser string"));

        },

        setEdad: function (param) {

            ((typeof param === "number") ? nombre = param : console.log("Debe ser number"));
        },

        setSexo: function (param) {

            ((typeof param === "string" && param.length > 1) ? nombre = param : console.log("Debe ser char"));
        },

        setPeso: function (param) {

            ((typeof param === "number") ? nombre = param : console.log("Debe ser number"));
        },

        setAltura: function (param) {

            ((typeof param === "number") ? nombre = param : console.log("Debe ser number"));
        },

        calcularIMC: function () {

            let pesoActual = peso / (Math.pow(altura, 2));

            if (pesoActual >= 20 && pesoActual <= 25) {
                return PESO_IDEAL;
            } else if (pesoActual < 20) {
                return INFRAPESO;
            } else {
                return SOBREPESO;
            }

        },


        esMayorDeEdad : function () {

            let mayor = false;
            if (edad >= 18) {
                mayor = true;
            }
            return mayor;


        },

 }
    //</editor-fold>


    //</editor-fold>


}



//<editor-fold desc="Main method">
function main_class_2(){

    function main_method() {

        let Juan = new Persona("Juan",19,"H",60,160,);

        console.log(Juan.toString())

    }

    main_method();

}

main_class_2();
//</editor-fold>
*/

//</editor-fold>

//<editor-fold desc="Punto 3">
function password() {

    //<editor-fold desc="Variables">
    const LONG_DEF = 8;

    let longitud = Number();

    let contrasena = String(); // sin ñ por el ASCII

    //</editor-fold>

    //<editor-fold desc="Constructores">
    if (arguments.length === 0) {

        arguments[0] = LONG_DEF;

    } else if (arguments.length === 1) {

        longitud = arguments[0];

        contrasena = password().generaPassword();

    }

    //</editor-fold>

    //<editor-fold desc="Metodos">

    return {

         getLongitud : function() {

            return longitud;

        },





     setLongitud : function(param) {

        if (longitud === "number") {

            return longitud = param;

        } else {

            return "Longitud no es un numero";

        }

    },


     getContraseña : function() {

        return contrasena;

    },


     generaPassword : function() {

        let password = "";

        // for (int i=0;i<longitud;i++){
        //Generamos un numero aleatorio, segun este elige si añadir una minuscula, mayuscula o numero
        let eleccion = ((Math.floor(Math.random() * 3 + 1)));

        if (eleccion === 1) {
            let minusculas = (Math.floor(Math.random() * (123 - 97) + 97));
            password += minusculas;
        } else {
            if (eleccion === 2) {
                let mayusculas = (Math.floor(Math.random() * (91 - 65) + 65));
                password += mayusculas;
            } else {
                let numeros = (Math.floor(Math.random() * (58 - 48) + 48));
                password += numeros;
            }
        }

        return password;
    },


     esFuerte : function() {

        let cuentanumeros = 0;
        let cuentaminusculas = 0;
        let cuentamayusculas = 0;

        //Vamos caracter a caracter y comprobamos que tipo de caracter es
        for (let i = 0; i < contrasena.length(); i++) {

            if (contrasena.charAt(i) >= 97 && contrasena.charAt(i) <= 122) {
                cuentaminusculas += 1;
            } else {
                if (contrasena.charAt(i) >= 65 && contrasena.charAt(i) <= 90) {
                    cuentamayusculas += 1;
                } else {
                    cuentanumeros += 1;
                }
            }
        }
        //Si la constraseña tiene mas de 5 numeros, mas de 1 minuscula y mas de 2 mayusculas
        return cuentanumeros >= 5 && cuentaminusculas >= 1 && cuentamayusculas >= 2;
    }



    }
    //</editor-fold>



}



function class_main_3(){

    function method_main(){


        let juan = new password("Hola");


        console.log(juan.getContraseña())

    }

    method_main();

}

class_main_3();
//</editor-fold>



















