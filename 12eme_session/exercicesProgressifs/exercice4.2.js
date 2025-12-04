/*
### Exercice 4.2: Chronomètre avec contrôle
```javascript
let temps = 0;
let chrono = null;

function demarrer() {
    // TODO: Démarrer le chronomètre
    // Ne rien faire si déjà démarré
}

function arreter() {
    // TODO: Arrêter le chronomètre
}

function reset() {
    // TODO: Remettre à 0 et arrêter
}

// Test
demarrer();
// Attendre 3 secondes
arreter();
console.log(temps); // 3
reset();
console.log(temps); // 0
```

*/
let interval
let compteur = 0

function demarrer(){
    if (interval) return;
    interval = setInterval( ()=>{
    compteur++
    console.log(compteur)
    } ,1000)
}

function arreter(){
    if (interval) clearInterval(interval)
        interval = null
}

function reset(){
    arreter();
    compteur = 0
}

demarrer();
setTimeout(() => {
    arreter();
    console.log(compteur); // 3
    reset();
    console.log(compteur); // 0
}, 3010)

