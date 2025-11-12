const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("Entrez un nombre: "));

if (nombre % 2 === 0) {
    console.log("pair");
} else {
    console.log("impair");
}
