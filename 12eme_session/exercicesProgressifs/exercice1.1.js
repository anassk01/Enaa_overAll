/*
### Exercice 1.1: Filtrer les disponibles
```javascript
let voitures = [
    {id: 1, disponible: true},
    {id: 2, disponible: false},
    {id: 3, disponible: true},
    {id: 4, disponible: false}
];

// TODO: Créer un tableau avec seulement les voitures disponibles
// Résultat attendu: [{id: 1, disponible: true}, {id: 3, disponible: true}]

*/


let voitures = [
    {id: 1, disponible: true},
    {id: 2, disponible: false},
    {id: 3, disponible: true},
    {id: 4, disponible: false}
];


let filtered = voitures.filter(f=> f.disponible===true)
console.log(filtered)