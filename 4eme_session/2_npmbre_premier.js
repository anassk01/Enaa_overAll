const prompt = require('prompt-sync')();

let nombre= parseInt(prompt("donner une nombre entier "));
let estPremier = false 
for (let i = 2 ; i<=nombre-1 ;i++) {
    if (nombre % i == 0 ){
        break;
    }
    else estPremier = true
}

if (estPremier == true) console.log ("le nombre",nombre,"est premier")
    else console.log ("le nombre n'est pas premier ")
