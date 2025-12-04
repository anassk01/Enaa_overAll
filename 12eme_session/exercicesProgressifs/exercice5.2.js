/*
### Exercice 5.2: Feux de circulation
```javascript
let feu = {
    couleur: "rouge",
    tempsRestant: 5
};

// Cycles: Rouge (5s) -> Vert (5s) -> Orange (2s) -> Rouge

// TODO: Créer un système qui:
// 1. Décrémente tempsRestant chaque seconde
// 2. Affiche "Feu: ROUGE - 5s restant"
// 3. Quand tempsRestant = 0, change de couleur
// 4. Continue le cycle indéfiniment

// Résultat attendu:
// Feu: ROUGE - 5s
// Feu: ROUGE - 4s
// ...
// Feu: ROUGE - 0s
// Feu: VERT - 5s
// ...
```

 */



let feu = {
    couleur: "rouge",
    tempsRestant: 5
};

let interval = setInterval(()=>{
    feu.tempsRestant -= 1
    if ( feu.tempsRestant==0 && feu.couleur === "rouge" ) {
        feu.couleur = "vert" ;
        feu.tempsRestant = 5 ;
    }
    else if ( feu.tempsRestant==0 && feu.couleur === "vert" ) {
    feu.couleur = "orange" ;
    feu.tempsRestant = 2 ;
    } 
    else if ( feu.tempsRestant==0 && feu.couleur === "orange" ) {
    feu.couleur = "rouge" ;
    feu.tempsRestant = 5 ;
    } 
    console.log(feu)

},1000)

