const prompt = require('prompt-sync')();
const secretNumber=8 ;
let nombreDevinee=parseInt(prompt("entrer un nombre pour deviner "));
if (nombreDevinee == secretNumber ) resultat ="Exact !";
    else   {resultat =  nombreDevinee > secretNumber ? "Trop haut" : "trop bas" ;}

console.log(resultat)