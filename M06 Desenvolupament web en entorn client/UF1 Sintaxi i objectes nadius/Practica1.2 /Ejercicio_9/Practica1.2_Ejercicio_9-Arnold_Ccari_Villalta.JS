function tictac(){

var seconds = 0;

var fecha_antes_prompt = new Date().getTime(); // Apunta el tiempo antes de la pregunta

console.log(fecha_antes_prompt)

var pregunta = prompt("Quien descubrio america?");

var fecha_despues_prompt = new Date().getTime(); // apunta el tiempo despues de la pregunta

var distance = fecha_despues_prompt - fecha_antes_prompt;

var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Calcula los segundos del gettime (Formula sacada de w3schools)

console.log(seconds)

return alert("Te has tardado " + seconds + " segundos en responder la pregunta")



}

