const prompt = require('prompt-sync')();



class LIVRE {
    constructor(idLivre,titre,auteur,annee,disponible){
        this.idLivre = idLivre;
        this.titre = titre ;
        this.auteur = auteur;
        this.annee = annee ; 
        this.disponible =disponible ; 
    }

    afficherLivre(){
        console.log(`${this.idLivre} | ${this.titre} | ${this.auteur} | ${this.annee} | ${this.disponible} `)
    }
}

class ABONNE {
    constructor(id, nom, prenom, email){
        this.id = id ;
        this.nom = nom ;
        this.prenom = prenom ;
        this.email=email ;       
    }

    afficherAbonne(){
        console.log(`${this.id} | ${this.nom} | ${this.prenom} | ${this.email} `) ;
    }
}

class EMPRUNT{
    constructor(abonneId, idLivre, dateEmprunt){
        this.abonneId = abonneId ;
        this.idLivre = idLivre;
        this.dateEmprunt = dateEmprunt ;
    }
    afficherEmprunt(){
        console.log(`${this.abonneId} | ${this.idLivre} | ${this.dateEmprunt}  `);
    }
}

class BIBLIOTHEQUE {
    constructor(){
        this.livres =[new LIVRE(123, "Le Petit Prince", "Saint-Exupéry",  1943,  false) ,new LIVRE(456,"L'Étranger", "Camus", 1942,true ) ];
        this.abonnes =[new ABONNE(1, "Dupont", "Alice",  "alice@mail.com")]; 
        this.emprunts =[new EMPRUNT(1, 123,"2025-09-22")];
    }

    //operations generale sur les livres 
    introduireLivre(idLivre,titre,auteur,annee,disponible){
        let livre = new LIVRE(idLivre,titre,auteur,annee,disponible);
        this.livres.push(livre) ;
    }

    introduirePlusieursLivre(livresArray){
        livresArray.forEach(element => {
            this.introduireLivre(element.idLivre, element.titre , element.auteur , element.annee , element.disponible );
        });

    }

    // operations specifiques sur les livres
    trierParTitre(ordre){
        if (ordre === "asc"){
            this.livres.sort((a,b)=> a.titre.localeCompare(b.titre) );
        }
        else {
            this.livres.sort((a,b)=> b.titre.localeCompare(a.titre));
        }
        console.log(`trie par titre en ordre ${ordre==="asc" ? "ascendent" : "descendent"}`);
    }

    trierParAnnee(ordre){
        if (ordre === "asc"){
            this.livres.sort((a,b)=> a.annee - b.annee );
        }
        else {
            this.livres.sort((a,b)=> b.annee - a.annee);
        }
        console.log(`trie par annee de publication en ordre ${ordre==="asc" ? "ascendent" : "descendent"}`);
    }

    afficherLivresDispo(){
        let filteredParDispoArr = this.livres.filter(l=> l.disponible );
        filteredParDispoArr.forEach(element=>{
            element.afficherLivre();
        })
    }
    
    rechercheLivresParId(id){
        let livre = this.livres.find(l=> l.idLivre == id) ;
        if (livre) {
            livre.afficherLivre();
        } else {
            console.log("Aucun livre trouvé avec cet ID.");
        }

    }

    afficherTousLivres(){
        this.livres.forEach(element=>{
            element.afficherLivre();
        })
    }

    //operations sur les abonnes 
    ajouteAbonne(id, nom, prenom, email){
        let newAbonne = new ABONNE(id, nom, prenom, email);
        this.abonnes.push(newAbonne);
    }
    afficherTousAbonnes(){
        this.abonnes.forEach(element => element.afficherAbonne())
    }

    // operations sur les emprunts 
    enregistrerEmprunt(abonneId, idLivre, dateEmprunt){
        
        let findEmpruntLivre = this.livres.find(f => f.idLivre === idLivre );
        if (findEmpruntLivre && findEmpruntLivre.disponible) {
            findEmpruntLivre.disponible = false ;
            let newEmprunt = new EMPRUNT(abonneId, idLivre, dateEmprunt);
            this.emprunts.push(newEmprunt);
            console.log("emprunt enregistre");
        }
        else {
            console.log("livre non disponible");
        }
        
    }

    enregistrerRetour(idLivre){
        let livreRetourne = this.livres.find(f=> f.idLivre === idLivre);
        if (livreRetourne){
            livreRetourne.disponible = true ;
            this.emprunts = this.emprunts.filter(f=> f.idLivre != idLivre );
            console.log(`livre ${idLivre} a ete retournee`)
        }
    }

    afficherLivresEmpruntees(abonneeID) {
        let livresEmpruntesArr = this.emprunts.filter(f=> f.abonneId == abonneeID ) ;
        console.log(`livres empruntee par id ${abonneeID}`);

        livresEmpruntesArr.forEach(element =>{
            let livres = this.livres.find(l=>element.idLivre === l.idLivre ) ;
            if (livres){
            livres.afficherLivre();

            }
        })


    }

}


let menuPrincipale =
`
====== Menu Principale ====== 
1.Introduire un livre 
2.Ajouter plusieurs livres 
3.Opérations sur les livres 
4.Ajouter un abonné 
5.Afficher tous les abonnés 
6.Gestion des emprunts 
7.Quitter l’application 
`
let menuLivres = 
`
====== Opérations sur les livres ====== 
1.Afficher tous les livres 
2.Trier les livres par titre (ascendant/descendant)
3.Trier les livres par année de publication 
4.Afficher uniquement les livres disponibles 
5.Rechercher un livre par ID_livre 
`


let menuEmprunts = 
`
====== Gestion des emprunts ====== 
1.Enregistrer un emprunt 
2.Enregistrer un retour 
3.Afficher les livres empruntés par un abonné donné.
`

function saisirInfoLivre() {
    console.log("--- Saisie d'un livre ---");
    let idLivre = parseInt(prompt("Entrer l'ID du livre : "));
    let titre = prompt("Entrer le titre : ");
    let auteur = prompt("Entrer l'auteur : ");
    let annee = parseInt(prompt("Entrer l'année : "));
    
    return { 
        id: idLivre, 
        titre: titre, 
        auteur: auteur, 
        annee: annee 
    };
}

let biblio = new BIBLIOTHEQUE();


while(true){
    console.log(menuPrincipale)
    choixMenuP=parseInt(prompt("entrer un choix : "));
    switch (choixMenuP) {
        //1. Introduire un livre 

        case 1 : {
            let livreInfo = saisirInfoLivre()
            biblio.introduireLivre(livreInfo.id,livreInfo.titre,livreInfo.auteur,livreInfo.annee,true)
            break ;
        }
        //2. Ajouter plusieurs livres
        case 2 :{
            
            let nbreLivres=parseInt(prompt("entrer le nombre de livres a ajoutee : "));
            for (let i=0 ; i<nbreLivres ; i++){
                let livreInfo = saisirInfoLivre()
                biblio.introduireLivre(livreInfo.id,livreInfo.titre,livreInfo.auteur,livreInfo.annee,true)
            }
            break ;
            }
        // autres operations sur les livres
        case 3 : {

           console.log(menuLivres);
            let choixLivre=parseInt(prompt("choisir un choix "));
            // afficher tous les livres
            if (choixLivre === 1 ){
                biblio.afficherTousLivres();
            }
            // 2.Trier les livres par titre (ascendant/descendant)

            else if (choixLivre === 2){
                let choixOrdre = prompt("asc ou desc : ")  ;
                biblio.trierParTitre(choixOrdre);
            }
            // Trier les livres par année de publication

            else if (choixLivre === 3) {
                let choixOrdre = prompt("asc ou desc : ")  ;
                biblio.trierParAnnee(choixOrdre);
            }
            //Afficher uniquement les livres disponibles
            else if (choixLivre === 4){
                biblio.afficherLivresDispo(); 

            }
            // Rechercher un livre par ID_livre  
            else if (choixLivre === 5){
                let choixID = parseInt(prompt("Rechercher un livre par id : "))  ;
                biblio.rechercheLivresParId(choixID)
            }

            else {
                console.log("choisir une choix valid")
            }
            break ;
        }
        // 4.Ajouter un abonné 

        case 4 : {
        let id = parseInt(prompt("entrer ID de l'abonnee: "));
        let nom = prompt("entrer le nom de l'abonnee: ");
        let prenom = prompt("entrer le prenom de l'abonnee: ") ;
        let email = prompt("entrer l'email de l'abonnee: ") ;
        biblio.ajouteAbonne(id,nom,prenom,email)
        break ;
    
        }

    
        // 5.Afficher tous les abonnés 

        case 5 :{
            biblio.afficherTousAbonnes();
            break ;
        }

        // 6.Gestion des emprunts 

        case 6 : 
{            console.log(menuEmprunts);
            let choixEmprunt=parseInt(prompt("choisir un choix : "));


            // 1.Enregistrer un emprunt 

            if (choixEmprunt ===1 ){
                let abonneId = parseInt(prompt("entrer l'id abonne : ")) ;
                let idLivre = parseInt(prompt("entrer L'id livre : "))
                let dateEmprunt = prompt("entrer La date du livre : ")
                biblio.enregistrerEmprunt(abonneId,idLivre,dateEmprunt)
            }
            // 2.Enregistrer un retour 

            else if (choixEmprunt === 2){
                let idLivre = parseInt(prompt("entrer l'id du livre retournee : ")) ;
                biblio.enregistrerRetour(idLivre);
            }

            // 3.Afficher les livres empruntés par un abonné donné.

            else if (choixEmprunt === 3) {
                let abonneeID = parseInt(prompt("entrer l'id de l'abonne : ")) ;
                biblio.afficherLivresEmpruntees(abonneeID);
            }
            else {
                console.log("choisir une choix valid")
            }
            break ;
        }

        // 7.Quitter l’application 
        case 7 : process.exit();
        default : console.log("selectionner un choix valid")

    }
    
}