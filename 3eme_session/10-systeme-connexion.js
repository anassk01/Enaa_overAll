const prompt = require('prompt-sync')();
let username = prompt("Entrez votre nom d'utilisateur: ");
let password = prompt("Entrez votre mot de passe: ");

if (username === "admin" && password === "1234") {
    console.log("Bienvenue Admin");
} else if (username === "admin") {
    console.log("Mot de passe incorrect");
} else {
    console.log("Utilisateur introuvable");
}
