const prompt = require('prompt-sync')();

let nombre= parseInt(prompt("donner une nombre entier "));
let premiersArray=[];
let cont =true;

for (i=2 ; i<=nombre;i++){
    for (let j = 2 ; j<=10;i++){
        console.log(i % j )
        if (i % j == 0) {continue}
        else break
    }

    premiersArray.push(i);
}
console.log(premiersArray);

