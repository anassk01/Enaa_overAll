const prompt = require('prompt-sync')();
let motDePasse = prompt("Entrez un mot de passe: ");

let contientChiffre = /\d/.test(motDePasse);
let contientSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(motDePasse);

if (motDePasse.length >= 8 && contientChiffre && contientSpecial) {
    console.log("Fort");
} else if (motDePasse.length >= 6 && contientChiffre) {
    console.log("Moyen");
} else {
    console.log("Faible");
}