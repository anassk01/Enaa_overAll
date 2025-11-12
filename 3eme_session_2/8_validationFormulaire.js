const prompt = require('prompt-sync')();
const nom = prompt("entrer votre nom ");
const age = parseInt(prompt("entrer votre age "));
const email = prompt("entrer votre email ");
let valide = nom != "" && age >= 13 && email.includes("@")
console.log(valide ? "formulaire valide" : "erreur dans le formulaire")
