const prompt = require('prompt-sync')();
let somme = 0;
let max = 0;

while(true){

let nombre= parseInt(prompt("donner une nombre entier "));
    if (nombre === 0) break; 
    
    if (nombre > 100) continue; 
    
somme += nombre;
max = nombre > max ? nombre : max;
}
console.log ("la somme est ", somme);
console.log("la max est " , max);
