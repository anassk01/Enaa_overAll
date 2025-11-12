const prompt = require('prompt-sync')();
const a = parseFloat(prompt("entrer le premier nombre "));
const b = parseFloat(prompt("entrer le deuxieme nombre "));
const c = parseFloat(prompt("entrer le troisieme nombre "));
if(a == b || b == c || a== c) {
    console.log("Les nombres doivent etre uniques")
} else {
    let nombres = [a, b, c].sort((x, y) => x - y)
    console.log("ordre croisssant : ", nombres.join(", "))
}
