const prompt = require('prompt-sync')();
const salaireBrut = parseFloat(prompt("entrer le salaire brut "));
const statut = prompt("entrer votre statut CDI CDD ou Stage ");
let tauxRetenu = 0
if(statut == "CDI") tauxRetenu = 0.22
if(statut == "CDD") tauxRetenu = 0.18
if(statut == "Stage") tauxRetenu = 0.10
const salaireNet = salaireBrut * (1 - tauxRetenu)
console.log("le salaire net est : ", salaireNet.toFixed(2))
