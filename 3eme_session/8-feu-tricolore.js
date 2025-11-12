const prompt = require('prompt-sync')();
let couleur = prompt("Entrez une couleur (rouge/jaune/vert): ");

switch (couleur) {
    case "rouge":
        console.log("Arrêt");
        break;
    case "jaune":
        console.log("Préparez-vous");
        break;
    case "vert":
        console.log("Allez");
        break;
}
