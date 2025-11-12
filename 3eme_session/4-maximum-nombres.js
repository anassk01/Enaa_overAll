const prompt = require('prompt-sync')();
let nombre1 = parseInt(prompt("Entrez le premier nombre: "));
let nombre2 = parseInt(prompt("Entrez le deuxième nombre: "));

if (nombre1 > nombre2) {
    console.log(nombre1);
} else {
    console.log(nombre2);
}
