const prompt = require('prompt-sync')();
const menu =`=== To-Do List ===
1. Afficher les taches
2. Ajouter une tache
3. Rechercher une tache
4. Modifier une tache
5. Supprimer une tache
6. Marquer une tache comme Termine
7. Afficher taches Termines / en attente
0. Quitter
`

let list = []

function afficheTache(){
    list.forEach(element => {
        let status = element.isDone ? "Termine" : "En attente";
        console.log(`${element.id}. ${element.description} [${status}]`);});
}

function ajoutTache(){
    let idT = Date.now();
    let descriptionT = prompt("entrez la description de la tache : ");
    let completed = prompt("est ce que la tache est Termine ou En attente entrer (t ou a) : ");
    if (completed === "t") completed = true;
    else if (completed === "a") completed = false;
    else {
        console.log("entrer une valeur correcte");
        ajoutTache();
        return;
    }
    let tache = {id: idT, description: descriptionT, isDone: completed};
    list.push(tache);
    console.log("tacche est ajoute ");
}

function rechercheTache(){
    let keyword = prompt("entrer la keyword de recherche : ");
    let resultatRecherche = [];
    list.forEach(element => {
        if(element.description.toLowerCase().includes(keyword.toLowerCase())){
            resultatRecherche.push(element);
        }
    });
resultatRecherche.forEach(element => {
    let status = element.isDone ? "Termine" : "En attente";
    console.log(`${element.id}. ${element.description} [${status}]`);
});

return resultatRecherche;
}

function modifierTache(){
    let id =printTacheID("entrer Id de la tache a modifier la description ");
    let descriptionM = prompt("entrer la nouvelle description ")
    let index = findIndex(id);
    list[index].description = descriptionM;
}

function supprimerTache(){
    let id =printTacheID("entrer Id de la tache a supprimer")
    let index = findIndex(id);
        list.splice(index, 1);
}

function changeStatusTache(){
    id =printTacheID("entrer Id de la tache a modifier le status ");
    let newValue = printTermine();
    let index = findIndex(id);
        list[index].isDone = newValue;
}

function filterTache(){
    let status = printTermine();
    return list.filter(t => t.isDone === status);
}

function printTacheID(message){
    console.log(message + " en fonction de son id");
    list.forEach(element => {
        console.log(element.id + " - " + element.description);
    });
    let idTo = parseInt(prompt("Entrez id de la tache : "));
    return idTo;
}

function printTermine() {
    let input = prompt("Est-ce que la tache est Termine ou En attente entrer (t ou a) : ");
    if (input === "t") {return true;} 
    else if (input === "a") { return false; } 
    else {
        console.log("entrer une valeur correcte (t ou a)");
        return printTermine(); 
    }
}

function findIndex(id){
    return list.findIndex(t => t.id === id);
}


while (true){
    console.log(menu);
    let choice = parseInt(prompt('choisissez une option : '));
    switch (choice) {
        case 1:
            afficheTache();break;
        case 2:
            ajoutTache();break;
        case 3:
            rechercheTache();
            break;
        case 4:
            modifierTache();

            break;
        case 5:
            supprimerTache()
            break;
        case 6:
            changeStatusTache()
            break;
        case 7:
            
            let filtered = filterTache();     
            filtered.forEach(element => {
            let status = element.isDone ? "termine" : "en attente";
            console.log(`${element.id}. ${element.description} [${status}]`); });
            break;
        case 0:
            process.exit();
        default : {console.log("entrer une valeur valid ") ;}
    }
}