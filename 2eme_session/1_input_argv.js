
console.log("usage: node userInfoArgs.js Nom Prénom age sexe telephone");
const nom = process.argv[2];
const prenom = process.argv[3];
const age = process.argv[4];
const sexe = process.argv[5];
const telephone = process.argv[6];

console.log("nom : " + nom);
console.log("prenom : " + prenom);
console.log("age : " + age);
console.log("sexe : " + sexe);
console.log("numero de telephone : " + telephone);