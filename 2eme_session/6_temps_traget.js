/*
Demander la distance et la vitesse d’une voiture et calculer le temps de trajet.
Formule :
distance = vitesse * temps
*/

const prompt = require('prompt-sync')();

const distance = prompt("entrer la distance ");
const vitesse = prompt("entrer la vitesse ");

let tempsTrajet = distance/vitesse ;
console.log("temps du trajet est :", tempsTrajet);

