/*
### Exercice 2.3: Plus proche avec reduce
```javascript
let magasins = [
    {nom: "Marjane", position: 15},
    {nom: "Carrefour", position: 5},
    {nom: "Acima", position: 22}
];

let maPosition = 10;

// TODO: Utiliser reduce() pour trouver le magasin le plus proche
// Résultat attendu: {nom: "Carrefour", position: 5}
```

*/

let magasins = [
    {nom: "Marjane", position: 15},
    {nom: "Carrefour", position: 5},
    {nom: "Acima", position: 22}
];

let maPosition = 10;

let closest = magasins.reduce((a,b)=>
    Math.abs(a.position - maPosition) <= Math.abs(b.position-maPosition) ? a : b
)

console.log(closest)