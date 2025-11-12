/*
Écris un programme qui demande un nombre entier à 3 chiffres et affiche son inverse.
Exemple : 234 → 432
Astuce : utiliser les chaînes de caractères (split, reverse, join).
*/
const prompt = require('prompt-sync')(); 
const nombreEntier=parseInt(prompt("entrer un nombre de 3 chiffre "));

const centaines=Math.floor(nombreEntier/100);
console.log(centaines);
const dizaines= Math.floor((nombreEntier%100)/10);
console.log(dizaines);
const unites = Math.floor(nombreEntier%10);
console.log(unites);

const nombreReversed = unites*100+dizaines*10+centaines;
console.log(nombreReversed);

