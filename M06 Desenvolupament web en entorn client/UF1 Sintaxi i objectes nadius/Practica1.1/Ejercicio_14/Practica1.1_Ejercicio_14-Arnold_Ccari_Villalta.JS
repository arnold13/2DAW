function Informacion_de_pantalla(){

var informacion_pantalla = "Amplària total és : "+window.screen.width+ "\n" +  // Amplito total
                           "Alçada total és : "+window.screen.height + "\n" +  // Altura total
                           "Amplària disponible és : "+window.screen.availWidth + "\n" + // medidas disponibles reales
                           "Alçada disponible és : "+window.screen.availHeight + "\n" + // medidas disponibles reales
                           "Profunditat de color és : "+window.screen.colorDepth+ "\n"; // Profundidad del color


return alert(informacion_pantalla);


}