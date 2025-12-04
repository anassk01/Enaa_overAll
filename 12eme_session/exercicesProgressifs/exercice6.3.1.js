let livreur = {id: 1, disponible: false, position: 5, tempsRestant: 3};

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

// Test manuel:
mettreAJourLivreur(livreur); // "Livreur 1 - 2 minutes restantes"
mettreAJourLivreur(livreur); // "Livreur 1 - 1 minute restante"
mettreAJourLivreur(livreur); // "Livreur 1 libéré"
console.log(livreur.disponible); // true