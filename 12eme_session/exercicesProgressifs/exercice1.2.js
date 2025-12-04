/*
### Exercice 1.2: Trouver par ID
```javascript
let users = [
    {id: 1, nom: "Ali"},
    {id: 2, nom: "Sara"},
    {id: 3, nom: "Omar"}
];

// TODO: Trouver l'utilisateur avec id = 2
// Résultat attendu: {id: 2, nom: "Sara"}
```
*/

let users = [
    {id: 1, nom: "Ali"},
    {id: 2, nom: "Sara"},
    {id: 3, nom: "Omar"}
];


let found = users.find(r=> r.id===2)
console.log(found)