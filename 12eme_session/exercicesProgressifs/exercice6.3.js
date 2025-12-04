
function mettreAJourLivreur(livreur) {
    if (livreur.disponible===false ){
        livreur.tempsRestant--
        console.log(`livreur ${livreur.id} - ${livreur.tempsRestant} minutes restantes`)

        if (livreur.tempsRestant === 0){
            livreur.disponible = true ;
            console.log(`livreur ${livreur.id} libere`)
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

function traiterNouvellesCommandes() {
    // TODO:
    // 1. filtrer commandes non traitees  et pour chacune push dans le queue et change son status comme traitee
    let commandesNonTraitee =  commandes.filter(f=>f.traitee === false)
    for (let commande of commandesNonTraitee ) {
        let assignedOne = assignerCommande(commande)
        if (assignedOne.success === false ) {
            Queue.push(commande);
            commande.traitee = true ;
            console.log(`commande ${commande.id} ajoutee a la file d'attente`)
        }
    }
}



function verifierQueue() {
    // TODO:
    // 1. Si queue vide ou aucun livreur dispo exit la fonctionne 
    // 2. Prendre premiere commande de queue (shift) et l'assigner avec le livreur 

    if (Queue.length === 0) return
    let livreurDispo = livreurs.find(f=>f.disponible)
    if (!livreurDispo) return
    
    let assignedQueue = Queue.shift()
     assignerCommande(assignedQueue)


}



function distanceProche(position){
    let livreurDisponible = livreurs.filter(f=>f.disponible)
    let livreursProcheCroissant =  livreurDisponible.sort((a,b)=>{
        let distanceA = Math.abs(a.position - position)
        let distanceB = Math.abs(b.position - position)
        return distanceA - distanceB ;
    })
    return livreursProcheCroissant[0] ;
}



let livreurs = [
    {id: 1, disponible: true, position: 0, tempsRestant: 0}
];

let commandes = [
    {id: 1, position: 5, duree: 3, traitee: false},
    {id: 2, position: 10, duree: 2, traitee: false}
];

let Queue = [];
let minute = 0 ;

function simulationTerminee() {
    // TODO:
    // verifier si toutes commandes traitees , livreurs disponibles  avec .every()
    // verifier si Queue vide avec .length
    // return true si les 3 conditions sont vraies

    let tousCommandesTraite =  commandes.every(e=>e.traitee)

    let tousLivreurDispo =  livreurs.every(e=>e.disponible )


    if (Queue.length === 0 && tousLivreurDispo && tousCommandesTraite ){
        return true ;
    }
    else {
        return false ;
    }
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

lancerSimulation()
