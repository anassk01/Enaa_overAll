/*
### Exercice 2.2: Trouver le plus proche
```javascript
let points = [
    {id: 1, position: 5},
    {id: 2, position: 12},
    {id: 3, position: 20}
];

let cible = 8;

// TODO: Trouver quel point est le plus proche de la cible
// Résultat attendu: {id: 1, position: 5} car distance = 3
// Indice: Calculer distance pour chaque point, puis trouver le min
```
*/

let points = [
    {id: 1, position: 5},
    {id: 2, position: 12},
    {id: 3, position: 20}
];

let cible = 8;
points.sort( (a,b)=> {
    let positionA = a.position - cible
    let positionB = b.position - cible
    return positionA - positionB
}  )

console.log(points[0])