const prompt = require('prompt-sync')();

let nombre= parseFloat(prompt("donner une nombre "));
for (let i=1 ; i<=10 ; i++) console.log(nombre*i)