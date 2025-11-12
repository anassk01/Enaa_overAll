const prompt = require('prompt-sync')();
const pays = prompt("entrer votre pays France ou USA ");
const age = parseInt(prompt("entrer votre age "));
let ageMajorite = pays == "France" ? 18 : 21
console.log(age >= ageMajorite ? "Tu es majeur" : "Tu es mineur")
