traiterDemandesArrivantMaintenant(minuteActuelle)

afficherRapportFinal()



function assignerCommande(commande) {

    // TODO:
    // 1. trouver livreurs disponibles  si aucun dispo  return false
    // 2. trouver le plus proche 
    // 3. modifier le livreur et commande proprieties
    // 4. return true

    let livreursDispo = livreurs.filter(f=>f.disponible);
    if (livreursDispo.length === 0){
        return {success: false, livreur: null};
    }
    let livreur = distanceProche(commande.position) ; 
    let distance = Math.abs(livreur.position - commande.position)

    livreur.disponible=false
    livreur.tempsRestant = commande.duree
    livreur.position = commande.position
    commande.traitee = true ;
    console.log(`Commande ${commande.id} assignée à Livreur ${livreur.id}(distance: ${distance})`)
    return {success: true, livreur: livreur};

}

function lancerSimulation() {
    console.log("Minute 0:")
    traiterNouvellesCommandes() 
    let interval = setInterval(() => {
        minute++
        console.log(`Minute ${minute}:`)
        mettreAJourTousLesLivreurs();
        verifierQueue();
        let estLaSimulationTerminee=simulationTerminee();
        if (estLaSimulationTerminee) {
            console.log("fin de simulation")
            clearInterval(interval)
        }
}, 1000);

}