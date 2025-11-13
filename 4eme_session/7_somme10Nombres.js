const prompt = require('prompt-sync')();

let somme =0 ;
let cnt=0;

while (true){
    cnt++

 let nombre= parseFloat(prompt("donner une nombre entier "));
    if (nombre< 0 ){ continue }
    somme+=cnt;
if (cnt ==10 ) break

}

console.log(somme)