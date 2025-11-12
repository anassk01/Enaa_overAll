    
const prompt = require('prompt-sync')();
let nombre = parseInt(prompt("Entrez un nombre: "));


switch (true) {
    case (nombre % 3 === 0 && nombre % 5 === 0):
        console.log("FizzBuzz");
        break;
    case (nombre % 3 === 0):
        console.log("Fizz");
        break;
    case (nombre % 5 === 0):
        console.log("Buzz");
        break;
    default:
        console.log(nombre);
        break;
}

  