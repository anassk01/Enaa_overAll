/*

### Exercice 4.1: Compteur basique
```javascript
let compteur = 0;

// TODO: Créer un setInterval qui:
// - Incrémente compteur chaque seconde
// - Affiche "Seconde: X"
// - S'arrête à 5 secondes

// Résultat attendu dans console:
// Seconde: 1
// Seconde: 2
// Seconde: 3
// Seconde: 4
// Seconde: 5
// STOP!
```
*/
let compteur = 0;

let interval = setInterval(
    ()=>{
        compteur++
        console.log(compteur)
        if (compteur === 5 ) clearInterval(interval);
    }
    ,1000)