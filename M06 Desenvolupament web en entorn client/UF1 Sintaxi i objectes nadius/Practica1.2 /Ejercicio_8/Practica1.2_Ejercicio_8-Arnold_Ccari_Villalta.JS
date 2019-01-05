function info_fecha(){

var fecha = new Date();

var fecha_info = "Dia de la semana: "+ fecha.getDay() + "\n"+
			 	 "Mes del año: "+ fecha.getMonth() + "\n"+
			 	 "Año: "+ fecha.getFullYear() + "\n"+
			 	 "Hora: "+ fecha.getHours() + "\n"+
			 	 "Minutos: "+ fecha.getMinutes() + "\n"+
			 	 "Segundos: "+ fecha.getSeconds() + "\n";

return alert(fecha_info);


}