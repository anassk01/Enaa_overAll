const prompt = require('prompt-sync')();
const age = parseInt(prompt("entrer votre age "));
const permis = prompt("avez-vous un permis de conduire oui ou non ");
const vehicule = prompt("possedez-vous un vehicule oui ou non ");
let message = ""
if(age >= 18 && permis == "oui" && vehicule == "oui") {
    message = "Pret a conduire"
} else {
    let manque = []
    if(age < 18) manque.push("age minimum")
    if(permis != "oui") manque.push("permis de conduire")
    if(vehicule != "oui") manque.push("vehicule")
    message = "il manque : " + manque.join(", ")
}
console.log(message)
