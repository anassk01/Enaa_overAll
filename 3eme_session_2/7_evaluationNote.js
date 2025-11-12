const prompt = require('prompt-sync')();
const note = parseFloat(prompt("entrer une note entre 0 et 20 "));
let appreciation = ""
if(note < 0 || note > 20) appreciation = "Note invalide"
else if(note == 20) appreciation = "paarfait "
else if(note >= 16) appreciation = "tres bien"
else if(note >= 12) appreciation = "assez bien"
else if(note >= 10) appreciation = "peut mieux faire"
else appreciation = "echec"
console.log(appreciation)
