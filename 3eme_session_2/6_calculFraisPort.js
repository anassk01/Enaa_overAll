const prompt = require('prompt-sync')();
const montantAchat = parseFloat(prompt("entrer le montant d'achat "));
const pays = prompt("entrer votre pays France ou Autre ");
let fraisPort = 0
if(montantAchat < 50) {
    fraisPort = pays == "France" ? 5 : 10
}
console.log("le prix total est : ", montantAchat + fraisPort)
    