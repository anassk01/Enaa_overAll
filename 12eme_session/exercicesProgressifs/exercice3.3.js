/*
### Exercice 3.3: File avec priorité
```javascript
let filePrioritaire = [];
let fileNormale = [];

function ajouterDemande(client, prioritaire) {
    // TODO: Ajouter dans filePrioritaire si prioritaire=true
    // Sinon dans fileNormale
}

function traiterDemande() {
    // TODO: Prendre d'abord de filePrioritaire
    // Si vide, prendre de fileNormale
    // Si les deux vides, retourner null
}

// Test
ajouterDemande("Client A", false);
ajouterDemande("Client B", true);
ajouterDemande("Client C", false);
traiterDemande(); // Doit retourner "Client B" (prioritaire)
traiterDemande(); // Doit retourner "Client A"
```

*/

let filePrioritaire = [];
let fileNormale = [];

function ajouterDemande(client, prioritaire) {
    if (prioritaire === true ) {
        filePrioritaire.push(client)
    }
    else {
        fileNormale.push(client)
    }
}

function traiterDemande() {
        let client ;
        if (filePrioritaire.length > 0) {
            client = filePrioritaire.shift();
        }
        else if (filePrioritaire.length == 0 && fileNormale.length > 0 ){
            client = fileNormale.shift();
        }
        console.log(client)
    
}

ajouterDemande("Client A", false);
ajouterDemande("Client B", true);
ajouterDemande("Client C", false);
traiterDemande(); // Doit retourner "Client B" (prioritaire)
traiterDemande(); // Doit retourner "Client A"
