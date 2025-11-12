const prompt = require('prompt-sync')();

const notesInput = prompt("Entrez 3 notes séparées par des virgules (ex: 17,14.5,9) : ");

let notesArray = notesInput.split(",");

let somme = notesArray.reduce((acc, curr) => parseFloat(acc) + parseFloat(curr), 0);
let moyenne = somme / notesArray.length;

let mention = "";

switch (true) {
    case moyenne >= 16:
    mention = "Excellent";break;
    case moyenne >= 12:
        mention = "Bien";break;
    case moyenne >= 10:
        mention = "Passable";break;
    default:
        mention = "Echec";
}

console.log(`Moyenne : ${moyenne.toFixed(2)}`);
console.log(`Mention : ${mention}`);