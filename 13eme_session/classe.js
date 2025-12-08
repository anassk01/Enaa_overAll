const fs = require("fs") ; 
const prompt = require('prompt-sync')();

function ReadFile(){
    try {
        let data = fs.readFileSync("classe.json","utf-8") ;
        let readData = JSON.parse(data)
        return readData
    }
    catch(error) {
        return []
    }
}

function writeData(data){
    let addData = JSON.stringify(data,null,2)
    fs.writeFileSync("classe.json",addData)
}

function ajouterEleve(nom){
    let id = classe.length > 0 ? Math.max(...classe.map(m=> m.id))  + 1 : 1 ;
    let DATA ={}
    DATA.id = id;
    DATA.nom = nom ;
    DATA.presence = false ;
    DATA.competences = {};
    classe.push(DATA)
}

function marquerPresence(id,presence){
    let foundClasse = classe.find(f=>f.id === id ) ;
    if (!foundClasse){
        console.log("eleve introuvable");
        return ;
    } 
    foundClasse.presence = presence === "oui" ;
}


function attribuerNiveaux(id,competence , niveau){
    let niveauxAccepte = ["Critique", "Moyen", "Bon", "Excellent"]
    let foundClasse = classe.find(f=>f.id === id ) ;
    if( !foundClasse){
        console.log("eleve introuvable");

        return ;
    }
    let validationNiveau = niveauxAccepte.includes(niveau)
    if (!validationNiveau){
    console.log("Niveau invalide");

        return ;
    }
    foundClasse.competences[competence] = niveau ;
}

function afficherFiche(id) {
    let foundClasse = classe.find(f=>f.id === id ) ;
    if (!foundClasse){
        return ;
    }
    console.log(`${foundClasse.nom}  ${foundClasse.presence}  `)

    for (const [key,value] of Object.entries(foundClasse.competences) ) {
        console.log(`${key} : ${value}`)
    }
}

function listerLesValidants(){
    let niveauxNonValide = ["Critique", "Moyen"]
    let elementsValidee = classe.filter((f)=>{
        let comp = Object.values(f.competences)
        return comp.length>0 && !comp.some(s=> niveauxNonValide.includes(s)  )
    })
    if (elementsValidee.length === 0) {
        console.log("aucun eleve validee")
        return ;
    }
    elementsValidee.forEach(element => {
        console.log(`etudiants validees sont \n${element.id} - ${element.nom}   `)
    });
    
}



let classe = ReadFile() ;

menuPrincipal = `
1. Ajouter un élève 
2. Marquer une présence 
3. Ajouter une compétence 
4. Afficher une fiche élève 
5. Voir les élèves validants 
6. Sauvegarder (écrire dans un fichier JSON) 
7. Charger (lire depuis un fichier JSON) 
8. Quitter` ;

while (true) {
console.log(menuPrincipal) ; 
let choixMenu = parseInt(prompt("entrer votre choix : ")) ; 

switch(choixMenu){
    case 1 :
        let ajoutEleveNom = prompt("entrer le nom de l eleve ") ;
        ajouterEleve(ajoutEleveNom);
        break;
    case 2 :
        let idChoixPresence = parseInt(prompt("choisir l id "))
        let presenceChoix = prompt("oui ou non ");
        marquerPresence(idChoixPresence,presenceChoix)
        break
    case 3 :
        let competenceChoix = prompt(" entrer la competence ")
        let niveauChoix = prompt("entrer le niveau (Critique/Moyen/Bon/Excellent) ")
        let idChoixNiveau = parseInt(prompt("choisir l id "))
        attribuerNiveaux(idChoixNiveau,competenceChoix,niveauChoix)
        break

    case 4 :
        let idChoixAffiche = parseInt(prompt("entrer id ")) ;
        afficherFiche(idChoixAffiche) ;
        break
    case 5 :
        listerLesValidants();
        break
    case 6 :
        writeData(classe);
        break
    case 7 :
        classe=ReadFile();
        break

    case 8 :
        process.exit()

    default :
    console.log("entrer une valeur valid ")
}

}