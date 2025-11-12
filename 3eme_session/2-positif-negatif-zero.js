const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("Entrez un nombre: "));

if (nombre > 0) {
    console.log("positif");
} else if (nombre < 0) {
    console.log("négatif");
} else {
    console.log("nul");
}
