function Array_Meses() {

var meses = {
 1:{"Enero":"Invierno"}
,2:{"Febrero":"Invierno"}
,3:{"Marzo":"Primavera"}
,4:{"Abril":"Primavera"}
,5:{"Mayo":"Primavera"}
,6:{"Junio":"Verano"}
,7:{"Julio":"Verano"}
,8:{"Agosto":"Verano"}
,9:{"Septiembre":"Tardor"}
,10:{"Octubre":"Tardor"}
,11:{"Noviembre":"Tardor"}
,12:{"Diciembre":"Invierno"}

}


return meses;


}



function Pregunta_Meses_temporada(){

document.getElementById('log').innerHTML = " ";

var meses = Array_Meses();

var mes_actual = prompt("En que mes estamos?");


for(var index in meses) {
    var attr = meses[index];

    if (index == mes_actual) {

        document.getElementById('log').innerHTML += JSON.stringify(meses[mes_actual]);

        console.log(meses[index]);

    }

}

}




