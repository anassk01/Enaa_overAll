
let livreurs = [
    {id: 1, disponible: false, position: 5, tempsRestant: 2},
    {id: 2, disponible: false, position: 10, tempsRestant: 1}
];


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

// Test:
mettreAJourTousLesLivreurs();
// Affiche:
// Livreur 1 - 1 minute restante
// Livreur 2 libéré

mettreAJourTousLesLivreurs();
// Affiche:
// Livreur 1 libéré