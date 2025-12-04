/*
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
*/

let file = [];
file.push("Client1")
file.push("Client2")
file.push("Client3")
file.shift()
file.push("Client4")
file.shift()
console.log(file)