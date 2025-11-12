const prompt = require('prompt-sync')();
const motDePasseCorrect = "secret123"
let tentatives = 0
let acces = false
while(tentatives < 3) {
    const motDePasse = prompt("entrer le mot de passe ")
    if(motDePasse == motDePasseCorrect) {
        console.log("Acces autorise")
        acces = true
        break
    }
    tentatives++
}
if(!acces) console.log("Acces bloque")
