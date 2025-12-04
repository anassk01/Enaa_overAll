/*
### Exercice 6.2: File d'attente de commandes
```javascript
let livreurs = [
    {id: 1, disponible: true}
];

let fileCommandes = [];

function nouvelleCommande(position) {
    // TODO:
    // Si livreur disponible -> l'assigner
    // Sinon -> ajouter à fileCommandes
}

function libererLivreur(id) {
    // TODO:
    // Marquer livreur disponible
    // Si fileCommandes non vide -> prendre première commande
}

// Test
nouvelleCommande(5);   // Assigne livreur 1
nouvelleCommande(10);  // Va en file (pas de livreur)
libererLivreur(1);     // Prend commande en file automatiquement
```

*/

let livreurs = [
    {id: 1, disponible: true}
];

let fileCommandes = [];

function nouvelleCommande(position) {
    let livreur = livreurs.find(f=> f.disponible)
        if (livreur){
            livreur.commande = position
            livreur.disponible = false;
            console.log(`Commande ${position} assigne a livreur ${livreur.id}`);

        }
        else {
            fileCommandes.push(position);
            console.log(`Commande ${position} en file d'attente`);

        }
        console.log(fileCommandes)
    
}

function libererLivreur(id) {
    let desiredLivreur = livreurs.find(f=>f.id === id) ;
    desiredLivreur.disponible = true ;
    delete desiredLivreur.commande;
    if (fileCommandes.length > 0 ){
            let nextOne=fileCommandes.shift();
            nouvelleCommande(nextOne)
    }
}

// Test
nouvelleCommande(5);   // Assigne livreur 1
nouvelleCommande(10);  // Va en file (pas de livreur)
libererLivreur(1);     // Prend commande en file automatiquement
