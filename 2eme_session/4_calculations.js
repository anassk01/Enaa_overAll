const prompt = require('prompt-sync')();

/*
demande deux entiers a et b, puis affiche :
● a + b
● a - b
● a * b
● a / b (quotient de la division)
● a % b (reste de la division)
*/

const a = prompt("entrer la valeur de a ");
const b = prompt("entrer la valeur de b ");

console.log("a + b =", a+b)
console.log("a - b =",a-b)
console.log("a * b =",a*b)
console.log("a / b =", a/b)
console.log("a % b =",a%b)
