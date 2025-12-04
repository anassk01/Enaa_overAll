/*
### Exercice 4.3: Minuteur dégressif
```javascript
let tempsRestant = 10;

// TODO: Créer un compte à rebours qui:
// - Part de 10
// - Décrémente chaque seconde
// - Affiche le temps restant
// - Affiche "TERMINÉ!" à 0
// - S'arrête automatiquement

// Résultat:
// 10...
// 9...
// 8...
// ...
// 1...
// TERMINÉ!
```

*/

let compteur = 10 ;
let interval = setInterval(()=>{
    console.log(compteur)

    compteur--

    if (compteur === 0) {
        console.log(compteur)
        console.log('TERMINÉ')
        clearInterval(interval)

    }
},1000)


