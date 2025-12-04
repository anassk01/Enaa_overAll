/*
### Exercice 5.1: Gestion de tâches avec timer
```javascript
let taches = [
    {id: 1, nom: "Tâche A", duree: 3, enCours: false, tempsRestant: 0},
    {id: 2, nom: "Tâche B", duree: 2, enCours: false, tempsRestant: 0}
];

function demarrerTache(id) {
    // TODO: 
    // - Trouver la tâche
    // - Mettre enCours = true
    // - Mettre tempsRestant = duree
}

function mettreAJourTaches() {
    // TODO: Pour chaque tâche en cours:
    // - Décrémenter tempsRestant
    // - Si tempsRestant = 0, mettre enCours = false
    // - Afficher le statut
}

// Test: Démarrer tâche 1, puis appeler mettreAJourTaches() 3 fois
```

*/


let taches = [
    {id: 1, nom: "Tâche A", duree: 3, enCours: false, tempsRestant: 0},
    {id: 2, nom: "Tâche B", duree: 2, enCours: false, tempsRestant: 0}
];

function demarrerTache(id) {
    let desiredTache = taches.find(r=>r.id === id)
    desiredTache.enCours = true ;
    desiredTache.tempsRestant = desiredTache.duree;

}

function mettreAJourTaches() {
    taches.forEach( (i)=>{
        if (i.enCours){        
            i.tempsRestant -= 1
            console.log(`${i.nom}: ${i.tempsRestant} secondes restantes`);  

        if (i.tempsRestant === 0) {
            i.enCours = false ;
            console.log(`${i.nom}: TERMINÉE!`);  

        }}
        
    })
}


demarrerTache(1);
demarrerTache(2);

mettreAJourTaches();  
mettreAJourTaches();  
mettreAJourTaches();  