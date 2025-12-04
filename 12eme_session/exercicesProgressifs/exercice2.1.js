/*
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

*/

function calculerDistance(positionA, positionB) {
    return Math.abs(positionA-positionB)
} 
console.log(calculerDistance(5, 10));
console.log(calculerDistance(10, 5));  
console.log(calculerDistance(3, 3));   
