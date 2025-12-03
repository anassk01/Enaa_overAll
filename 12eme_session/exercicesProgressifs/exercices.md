# Exercices Progressifs - Préparation Smart Taxi

## NIVEAU 1 - Manipulation de Tableaux Basique

### Exercice 1.1: Filtrer les disponibles
```javascript
let voitures = [
    {id: 1, disponible: true},
    {id: 2, disponible: false},
    {id: 3, disponible: true},
    {id: 4, disponible: false}
];

// TODO: Créer un tableau avec seulement les voitures disponibles
// Résultat attendu: [{id: 1, disponible: true}, {id: 3, disponible: true}]
```

### Exercice 1.2: Trouver par ID
```javascript
let users = [
    {id: 1, nom: "Ali"},
    {id: 2, nom: "Sara"},
    {id: 3, nom: "Omar"}
];

// TODO: Trouver l'utilisateur avec id = 2
// Résultat attendu: {id: 2, nom: "Sara"}
```

### Exercice 1.3: Compter les actifs
```javascript
let etudiants = [
    {nom: "Ahmed", actif: true},
    {nom: "Fatima", actif: true},
    {nom: "Youssef", actif: false},
    {nom: "Samira", actif: true}
];

// TODO: Compter combien d'étudiants sont actifs
// Résultat attendu: 3
// Indice: filter puis .length
```

---

## NIVEAU 2 - Calcul de Distance

### Exercice 2.1: Distance simple
```javascript
function calculerDistance(positionA, positionB) {
    // TODO: Retourner la distance absolue entre A et B
}

// Tests
console.log(calculerDistance(5, 10));  // 5
console.log(calculerDistance(10, 5));  // 5
console.log(calculerDistance(3, 3));   // 0
```

### Exercice 2.2: Trouver le plus proche
```javascript
let points = [
    {id: 1, position: 5},
    {id: 2, position: 12},
    {id: 3, position: 20}
];

let cible = 8;

// TODO: Trouver quel point est le plus proche de la cible
// Résultat attendu: {id: 1, position: 5} car distance = 3
// Indice: Calculer distance pour chaque point, puis trouver le min
```

### Exercice 2.3: Plus proche avec reduce
```javascript
let magasins = [
    {nom: "Marjane", position: 15},
    {nom: "Carrefour", position: 5},
    {nom: "Acima", position: 22}
];

let maPosition = 10;

// TODO: Utiliser reduce() pour trouver le magasin le plus proche
// Résultat attendu: {nom: "Carrefour", position: 5}
```

---

## NIVEAU 3 - Files d'Attente (Queue)

### Exercice 3.1: FIFO Basique
```javascript
let file = [];

// TODO: 
// 1. Ajouter "Client1", "Client2", "Client3" à la file
// 2. Retirer le premier client
// 3. Ajouter "Client4"
// 4. Retirer le premier client
// 5. Afficher ce qui reste dans la file
// Résultat attendu: ["Client3", "Client4"]
```

### Exercice 3.2: Système de tickets
```javascript
let fileAttente = [];
let numeroTicket = 1;

function prendrTicket() {
    // TODO: Ajouter un ticket avec numéro incrémental
    // Retourner: {ticket: 1, status: "en attente"}
}

function servirClient() {
    // TODO: Retirer le premier de la file
    // Si file vide, retourner null
}

// Test
prendrTicket(); // {ticket: 1, status: "en attente"}
prendrTicket(); // {ticket: 2, status: "en attente"}
servirClient(); // Retourne ticket 1
servirClient(); // Retourne ticket 2
servirClient(); // null (file vide)
```

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

---

## NIVEAU 4 - Gestion du Temps Simple

### Exercice 4.1: Compteur basique
```javascript
let compteur = 0;

// TODO: Créer un setInterval qui:
// - Incrémente compteur chaque seconde
// - Affiche "Seconde: X"
// - S'arrête à 5 secondes

// Résultat attendu dans console:
// Seconde: 1
// Seconde: 2
// Seconde: 3
// Seconde: 4
// Seconde: 5
// STOP!
```

### Exercice 4.2: Chronomètre avec contrôle
```javascript
let temps = 0;
let chrono = null;

function demarrer() {
    // TODO: Démarrer le chronomètre
    // Ne rien faire si déjà démarré
}

function arreter() {
    // TODO: Arrêter le chronomètre
}

function reset() {
    // TODO: Remettre à 0 et arrêter
}

// Test
demarrer();
// Attendre 3 secondes
arreter();
console.log(temps); // 3
reset();
console.log(temps); // 0
```

### Exercice 4.3: Minuteur dégressif
```javascript
let tempsRestant = 10;

// TODO: Créer un compte à rebours qui:
// - Part de 10
// - Décrémente chaque seconde
// - Affiche le temps restant
// - Affiche "TERMINÉ!" à 0
// - S'arrête automatiquement

// Résultat:
// 10...
// 9...
// 8...
// ...
// 1...
// TERMINÉ!
```

---

## NIVEAU 5 - États Multiples

### Exercice 5.1: Gestion de tâches avec timer
```javascript
let taches = [
    {id: 1, nom: "Tâche A", duree: 3, enCours: false, tempsRestant: 0},
    {id: 2, nom: "Tâche B", duree: 2, enCours: false, tempsRestant: 0}
];

function demarrerTache(id) {
    // TODO: 
    // - Trouver la tâche
    // - Mettre enCours = true
    // - Mettre tempsRestant = duree
}

function mettreAJourTaches() {
    // TODO: Pour chaque tâche en cours:
    // - Décrémenter tempsRestant
    // - Si tempsRestant = 0, mettre enCours = false
    // - Afficher le statut
}

// Test: Démarrer tâche 1, puis appeler mettreAJourTaches() 3 fois
```

### Exercice 5.2: Feux de circulation
```javascript
let feu = {
    couleur: "rouge",
    tempsRestant: 5
};

// Cycles: Rouge (5s) -> Vert (5s) -> Orange (2s) -> Rouge

// TODO: Créer un système qui:
// 1. Décrémente tempsRestant chaque seconde
// 2. Affiche "Feu: ROUGE - 5s restant"
// 3. Quand tempsRestant = 0, change de couleur
// 4. Continue le cycle indéfiniment

// Résultat attendu:
// Feu: ROUGE - 5s
// Feu: ROUGE - 4s
// ...
// Feu: ROUGE - 0s
// Feu: VERT - 5s
// ...
```

---

## NIVEAU 6 - Système de Livraisons (Mini-version du Taxi)

### Exercice 6.1: Livreurs et commandes
```javascript
let livreurs = [
    {id: 1, position: 0, disponible: true, commandes: 0},
    {id: 2, position: 10, disponible: true, commandes: 0}
];

let commandes = [
    {id: 1, position: 5},
    {id: 2, position: 8}
];

// TODO: 
// 1. Pour chaque commande, trouver le livreur disponible le plus proche
// 2. Assigner le livreur (disponible = false)
// 3. Incrémenter son nombre de commandes
// 4. Mettre à jour sa position

// Résultat attendu:
// Commande 1 (pos 5) -> Livreur 1 (distance 5)
// Commande 2 (pos 8) -> Livreur 2 (distance 2)
```

### Exercice 6.2: File d'attente de commandes
```javascript
let livreurs = [
    {id: 1, disponible: true}
];

let fileCommandes = [];

function nouvelleCommande(position) {
    // TODO:
    // Si livreur disponible -> l'assigner
    // Sinon -> ajouter à fileCommandes
}

function libererLivreur(id) {
    // TODO:
    // Marquer livreur disponible
    // Si fileCommandes non vide -> prendre première commande
}

// Test
nouvelleCommande(5);   // Assigne livreur 1
nouvelleCommande(10);  // Va en file (pas de livreur)
libererLivreur(1);     // Prend commande en file automatiquement
```

### Exercice 6.3: Simulation avec temps
```javascript
let livreurs = [
    {id: 1, disponible: true, position: 0, tempsRestant: 0}
];

let commandes = [
    {id: 1, position: 5, duree: 3, traitee: false},
    {id: 2, position: 10, duree: 2, traitee: false}
];

let minute = 0;

// TODO: Créer une simulation qui chaque seconde:
// 1. Incrémente minute
// 2. Traite les nouvelles commandes non traitées
// 3. Décrémente tempsRestant des livreurs occupés
// 4. Libère les livreurs quand tempsRestant = 0
// 5. Affiche les événements
// 6. S'arrête quand toutes commandes traitées

// Résultat attendu:
// Minute 0: Commande 1 assignée au livreur 1 (distance: 5)
// Minute 1: Livreur 1 - 2 minutes restantes
// Minute 2: Livreur 1 - 1 minute restante
// Minute 3: Livreur 1 libéré - Commande 2 assignée
// ...
```

---

## NIVEAU 7 - Challenge Final (avant Taxi)

### Exercice 7: Mini Smart Delivery System

**Données:**
```javascript
let livreurs = [
    {id: 1, position: 5, disponible: true, tempsRestant: 0, livraisons: 0},
    {id: 2, position: 15, disponible: true, tempsRestant: 0, livraisons: 0}
];

let commandes = [
    {id: 1, position: 10, duree: 2, minuteArrivee: 0},
    {id: 2, position: 3, duree: 3, minuteArrivee: 1},
    {id: 3, position: 20, duree: 1, minuteArrivee: 2}
];
```

**TODO:**
1. Créer un système de simulation minute par minute
2. À chaque minute, traiter les commandes qui arrivent (minuteArrivee)
3. Assigner le livreur le plus proche disponible
4. Si aucun livreur disponible, mettre en file d'attente
5. Décrémenter tempsRestant des livreurs occupés
6. Libérer et réassigner automatiquement
7. Afficher les logs détaillés
8. Générer rapport final avec stats

**Format de sortie attendu:**
```
Minute 0:
→ Commande 1 (pos 10) assignée à Livreur 1 (distance: 5, durée: 2min)

Minute 1:
→ Livreur 1: 1min restante
→ Commande 2 (pos 3) assignée à Livreur 2 (distance: 12, durée: 3min)

Minute 2:
→ Livreur 1 libéré (nouvelle position: 10)
→ Livreur 2: 2min restantes
→ Commande 3 (pos 20) assignée à Livreur 1 (distance: 10, durée: 1min)

...

=== RAPPORT FINAL ===
Livreur 1: 2 livraisons, position finale: 20
Livreur 2: 1 livraison, position finale: 3
Total livraisons: 3
Durée simulation: X minutes
```

**Indice structure:**
```javascript
let fileAttente = [];
let minute = 0;

function simuler() {
    let interval = setInterval(() => {
        minute++;
        
        // 1. Mettre à jour livreurs
        // 2. Traiter nouvelles commandes
        // 3. Gérer file d'attente
        // 4. Vérifier si terminé
        
        if (simulationTerminee()) {
            clearInterval(interval);
            afficherRapport();
        }
    }, 1000);
}
```

---

## Ordre de Travail Recommandé

1. ✅ Niveau 1 (1.1 → 1.3) - Bases tableaux
2. ✅ Niveau 2 (2.1 → 2.3) - Calculs distance
3. ✅ Niveau 3 (3.1 → 3.3) - Files d'attente
4. ✅ Niveau 4 (4.1 → 4.3) - Timers
5. ✅ Niveau 5 (5.1 → 5.2) - États multiples
6. ✅ Niveau 6 (6.1 → 6.3) - Mini-système
7. ✅ Niveau 7 - Challenge complet
8. 🎯 **TON APPLICATION TAXI**

**Conseil:** Ne passe au niveau suivant que quand tu maîtrises le niveau actuel. Chaque exercice prépare une partie de ton application finale.

Bonne chance! 💪 Commence par le niveau 1 et avance progressivement.