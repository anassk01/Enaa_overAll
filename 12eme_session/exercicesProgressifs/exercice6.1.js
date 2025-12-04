/*
### Exercice 6.1: Livreurs et commandes
```javascript
let livreurs = [
    {id: 1, position: 0, disponible: true, commandes: 0},
    {id: 2, position: 10, disponible: true, commandes: 0}
];

let commandes = [
    {id: 1, position: 5},
    {id: 2, position: 8}
];

// TODO: 
// 1. Pour chaque commande, trouver le livreur disponible le plus proche
// 2. Assigner le livreur (disponible = false)
// 3. Incrémenter son nombre de commandes
// 4. Mettre à jour sa position

// Résultat attendu:
// Commande 1 (pos 5) -> Livreur 1 (distance 5)
// Commande 2 (pos 8) -> Livreur 2 (distance 2)
```
*/

let livreurs = [
    {id: 1, position: 0, disponible: true, commandes: 0},
    {id: 2, position: 10, disponible: true, commandes: 0}
];

let commandes = [
    {id: 1, position: 5},
    {id: 2, position: 8}
];

function calculerPlusProche(position){
    let disponibleLivreur = livreurs.filter(f=> f.disponible)
    let closestOnes = disponibleLivreur.sort((a,b)=> {
        let posA = Math.abs(a.position-position);
        let posB = Math.abs(b.position-position);
        return posA - posB
    })
    let closestOne=closestOnes[0];
    return closestOne
}

for (let i of commandes ) {
    let plusProche=calculerPlusProche(i.position)
    console.log(`Commande ${i.id} (pos ${i.position}) -> Livreur ${plusProche.id} (distance ${Math.abs(i.position-plusProche.position)}) `);

    plusProche.disponible=false ;
    plusProche.commandes++
    plusProche.position = i.position ;
}

console.log(livreurs)