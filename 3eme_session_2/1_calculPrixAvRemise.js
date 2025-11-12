const prompt = require('prompt-sync')();
const prixProduit= parseFloat(prompt("entrer le prix du produit "));
const categorie=prompt("entrer votre categorie etudiant senior ou autre ");
let remise =0
if(categorie=="etudiant") remise+=0.2
if (categorie=="senior") remise+=0.3
console.log("le prix de produit apres remise est : ", prixProduit*(1+remise)) 