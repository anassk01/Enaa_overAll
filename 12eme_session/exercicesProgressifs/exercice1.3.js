/*
### Exercice 1.3: Compter les actifs
```javascript
let etudiants = [
    {nom: "Ahmed", actif: true},
    {nom: "Fatima", actif: true},
    {nom: "Youssef", actif: false},
    {nom: "Samira", actif: true}
];

// TODO: Compter combien d'étudiants sont actifs
// Résultat attendu: 3
```
*/

let etudiants = [
    {nom: "Ahmed", actif: true},
    {nom: "Fatima", actif: true},
    {nom: "Youssef", actif: false},
    {nom: "Samira", actif: true}
];

let actifs = etudiants.filter(f => f.actif)
console.log(actifs.length)