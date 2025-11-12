const prompt = require('prompt-sync')();
let age = parseInt(prompt("Entrez votre âge: "));

if (age >= 18) {
    console.log("Éligible au vote");
} else {
    console.log("Non éligible");
}
