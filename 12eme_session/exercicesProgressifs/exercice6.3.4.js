let livreurs = [
    {id: 1, disponible: true, position: 0, tempsRestant: 0}
];

let commandes = [
    {id: 1, position: 5, duree: 3, traitee: false},
    {id: 2, position: 10, duree: 2, traitee: false}
];

let Queue = [];

function traiterNouvellesCommandes() {
    // TODO:
    // 1. Filtrer commandes non traitées (traitee = false)
    commandesNonTraitee =  commandes.filter(f=>f.traitee === false)
    // 2. Pour chaque commande non traitée:
    for (let commande of commandesNonTraitee ) {
        let assignedOne = assignerCommande(commande)
        if (assignedOne === false ) {
            Queue.push(commande);
            commande.traitee = true ;
            console.log(`Commande ${commande.id} ajoutée à la file d'attente`)
        }
    }
}

// Test:
traiterNouvellesCommandes();
// Affiche:
// Commande 1 assignée à Livreur 1 (distance: 5)
// Commande 2 ajoutée à la file d'attente
console.log(Queue.length); // 1




function distanceProche(position){
    let livreurDisponible = livreurs.filter(f=>f.disponible)
    let livreursProcheCroissant =  livreurDisponible.sort((a,b)=>{
        let distanceA = Math.abs(a.position - position)
        let distanceB = Math.abs(b.position - position)
        return distanceA - distanceB ;
    })
    return livreursProcheCroissant[0] ;
}


function mettreAJourLivreur(livreur) {
    if (livreur.disponible===false ){
        console.log(`Livreur ${livreur.id} - ${livreur.tempsRestant} minutes restantes`)
        livreur.tempsRestant--
        if (livreur.tempsRestant === 0){
            livreur.disponible = true ;
            console.log(`Livreur ${livreur.id} libéré`)
        }

    }
}
function mettreAJourTousLesLivreurs() {
    for (let livreur of livreurs){
        mettreAJourLivreur(livreur)
    }
}

function assignerCommande(commande) {

    // TODO:
    // 1. Trouver livreurs disponibles
    let livreursDispo = livreurs.filter(f=>f.disponible);
    // 2. Si aucun dispo → return false
    if (livreursDispo.length === 0){
        return false
    }
    // 3. Trouver le plus proche (fonction distanceProche que tu as déjà)
    let livreur = distanceProche(commande) ; 
    // 4. Modifier le livreur:
    //    - disponible = false

    livreur.disponible=false
    //    - tempsRestant = commande.duree
    livreur.tempsRestant = commande.duree
    //    - position = commande.position
    livreur.position = commande.position
    // 5. Modifier la commande:
    //    - traitee = true
    commande.traitee = true ;
    // 6. Afficher "Commande X assignée à Livreur Y (distance: Z)"
    console.log(`Commande ${commande.id} assignée à Livreur ${livreur.id}(distance: ${Math.abs(livreur.position - livreur.position)})`)
    // 7. return true
    return true
}

