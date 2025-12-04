/*
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
*/

let fileAttente = [];
let numeroTicket = 1;

function prendrTicket() {
    let tickets = {} 
    tickets.ticket = numeroTicket
    tickets.status =  "en attente"
    fileAttente.push(numeroTicket)
    numeroTicket++
    console.log("file ",fileAttente)

    console.log("file ",tickets)
    return tickets
}

function servirClient() {
    if (fileAttente.length === 0) return null
    const curr =  fileAttente.shift()

    console.log("servir ",curr)
    return curr
}

prendrTicket(); // {ticket: 1, status: "en attente"}
prendrTicket(); // {ticket: 2, status: "en attente"}
servirClient(); // Retourne ticket 1
servirClient(); // Retourne ticket 2
servirClient(); // null (file vide)
