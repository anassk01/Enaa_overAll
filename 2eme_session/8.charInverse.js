/*
Écris un programme qui demande un nombre entier à 3 chiffres et affiche son inverse.
Exemple : 234 → 432
Astuce : utiliser les chaînes de caractères (split, reverse, join).
*/
const prompt = require('prompt-sync')(); 
const nombreEntier=prompt("entrer un nombre de 3 chiffre ");
const nombreArray=nombreEntier.split("");
const reversedArray = nombreArray.reverse();
const reversedNumber=reversedArray.join("");


console.log(reversedNumber)