function juego_raton(){

    let campo_raton = document.getElementById("campo_raton");

    campo_raton.addEventListener("mousemove",Mostrar_Coordenadas);

    campo_raton.addEventListener("mouseout",function () {

        document.getElementById("demo").innerHTML = "Fuera de rango";

    });


    function Mostrar_Coordenadas(event) {
        let x = event.clientX;
        let y = event.clientY;
        document.getElementById("demo").innerHTML = "X coords: " + x + ", Y coords: " + y;
    }







}