function revisando_email(){

var email = prompt("Inserte un email valido");

var comprobacion = false;

var count = 0;


// If


console.log(email.indexOf("@.") != -1)

console.log(email.indexOf(".@") != -1)




if (email.match(/@/ig) < 1){

alert("Tota adreça de correu ha de contenir el caracter @!")

count += 1;

}


if(email.match(/^@/) != null || email.match(/@$/) != null){

alert("L'@ no podrà estar situada ni a l'inici ni al final de l'adreça.");

count += 1;

}




if(email.indexOf(".") == -1 || email.match(/^\./) != null || email.match(/\.$/) != null){

alert("Ha d'haver-hi, com a mínim, un punt a la part que indica el domini. Cap punt podrà ser a l'inici ni al final de l'adreça.");

count += 1;


}


if(email.indexOf("@.") != -1 || email.indexOf(".@") != -1 ){

alert("Cap punt podrà anar pegat a l'@.");

count += 1;


}






}
