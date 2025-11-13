const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("donner un nombre entier: "));

for (let i = 1; i <= nombre; i++) {
    let estPremier = i*2- 1 >= 2;
    
    for (let j = 2; j < i * 2 - 1; j++) { 
             if ((i*2- 1) % j == 0) {estPremier = false;break;}
    }
    
    if (!estPremier) continue;
let spaces = " ".repeat(nombre - i);
    let etoiles = "*".repeat(i*2- 1);
    console.log(spaces + etoiles);
}