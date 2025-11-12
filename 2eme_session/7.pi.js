/*
Écris un programme qui demande le rayon d’un cercle et calcule sa circonférence.
Formule :
C = 2 * Math.PI * r
*/
const prompt = require("prompt-sync")();
const rayon= prompt("entrer le rayon du circle : ");
let circonférence = 2*Math.PI*rayon;
console.log("la circonférence est : ", circonférence);
