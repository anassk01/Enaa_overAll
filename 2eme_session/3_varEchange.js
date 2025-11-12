const prompt = require('prompt-sync')();


let a = prompt("Entrez la valeur de A :");
let b = prompt("Entrez la valeur de B :");
let c = prompt("Entrez la valeur de C :");
console.log("avant echange : A =", a, ", B =", b, ", C =", c);

let tmp=a;
a=b;
b=c;
c=tmp;
console.log("apres echange : A =", a, ", B =", b, ", C =", c);
