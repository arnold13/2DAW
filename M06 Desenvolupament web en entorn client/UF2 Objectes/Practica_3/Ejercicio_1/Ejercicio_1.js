
// Al terminal la pagina cargara el JS.

    let articulo = function (codigo,descripcion,precio) {

        //<editor-fold desc="Propiedades del prototipo">
        let self = this;

        this.codi = codigo;

        this.descripcion = descripcion;

        this.precio = precio + " €";


        this.calculo_iva = function () {

            return precio / 100 * 21 + " €";

        };

        this.calculo_total = function () {

            return precio / 100 * 121 + " €";

        };
        //</editor-fold>

        //<editor-fold desc="Lanzadores de eventos">

        window.onload = function () {

            document.getElementById("b_bruto").addEventListener("click", function () {

                document.getElementById("Preu_brut").value = self.precio;

            }, false);


            document.getElementById("b_iva").addEventListener("click", function () {

                document.getElementById("Iva").value = self.calculo_iva();

            }, false);


            document.getElementById("b_total").addEventListener("click", function () {

                document.getElementById("Import_total").value = self.calculo_total();

            }, false);


        };
        //</editor-fold>
    };





    //<editor-fold desc="Probando el codigo">

    let boligrafo = new articulo("123","Sirve para escribir",1);

    console.log(boligrafo.codi);

    console.log(boligrafo.descripcion);

    console.log(boligrafo.precio);

    console.log(boligrafo.calculo_iva());

    console.log(boligrafo.calculo_total());

    //</editor-fold>











