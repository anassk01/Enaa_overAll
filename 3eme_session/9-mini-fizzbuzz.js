const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("Entrez un nombre: "));

if (nombre % 3 === 0 && nombre % 5 === 0) {
    console.log("FizzBuzz");
} else if (nombre % 3 === 0) {
    console.log("Fizz");
} else if (nombre % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(nombre);
}
