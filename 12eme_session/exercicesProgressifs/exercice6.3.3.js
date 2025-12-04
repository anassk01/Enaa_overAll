let livreurs = [
    {id: 1, disponible: true, position: 0, tempsRestant: 0},
    {id: 2, disponible: false, position: 15, tempsRestant: 2}
];

let commande = {id: 1, position: 5, duree: 3, traitee: false};

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

// Test:
let success = assignerCommande(commande);
console.log(success); // true
console.log(livreurs[0].disponible); // false
console.log(livreurs[0].tempsRestant); // 3
console.log(commande.traitee); // true