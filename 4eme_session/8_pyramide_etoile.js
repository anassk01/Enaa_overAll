const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("donner un nombre entier: "));
let compteur = 0;
for (let i = 1; compteur < nombre; i++) {
    let estPremier = i*2- 1 >= 2;
    
    for (let j = 2; j < i * 2 - 1; j++) { 
             if ((i*2- 1) % j == 0) {estPremier = false;break;}
    }
    
    if (!estPremier) continue;
let spaces = " ".repeat(nombre - compteur-1);
    let etoiles = "*".repeat(i*2- 1);
    console.log(spaces + etoiles);
    compteur++
}