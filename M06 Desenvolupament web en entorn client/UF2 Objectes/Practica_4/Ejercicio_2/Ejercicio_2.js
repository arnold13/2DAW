
//<editor-fold desc="Prototipo">
function Viaje(origen,destino,transporte,precio){

        return {

            origen: origen,

            destino: destino,

            transporte: transporte,

            precio: precio + "€",

            precio_total: function () {

                return (precio / 100 * 121) + "€";

            }

        };


    }
    //</editor-fold>

//<editor-fold desc="Lanzador de eventos">
    window.onload = function () {

    document.getElementById("Viaje").addEventListener("click",function () {

        let origen = prompt("Origen?");

        let destino = prompt("Destino?");

        let transporte = prompt("Medio de transporte?");

        let precio = prompt("Precio pagado?");



        let viaje_1 = new Viaje(origen,destino,transporte,precio);

        document.write("Ha reservado una viaje con las siguientes caracteristicas:"+ "</br>" +
            "Origen: "+ viaje_1.origen + "</br>" +
            "Destino:"+ viaje_1.destino + "</br>" +
            "Transporte: " + viaje_1.transporte + "</br>" +
            "Precio base: "+ viaje_1.precio + "</br>"  +
            "Precio Total: " + viaje_1.precio_total() + "</br>");


    },false)

};
    //</editor-fold>










// //<editor-fold desc="Description">
// Exc2. Dissenya un prototip anomenat viatge que disposi de quatre propietats
// (origen, destí, transport, preu), els valors de les quals seran sol.licitades a
// l'usuari mitjançant un quadre de diàleg (prompt()). A més, el prototip disposarà d'
// un mètode que mostri l'import total del viatge sol.licitat (iva inclòs).
// En prémer el botó de la imatge, es procedirà a demanar els valors de les quatre propietats
// i, en acabar, es mostrarà la informació del viatge, de la seüent forma:
//</editor-fold>