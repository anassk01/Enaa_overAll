const prompt = require('prompt-sync')();

let nombre= parseInt(prompt("donner une nombre entier "));
let puissance= parseInt(prompt("donner une nombre entier "));

puissance =0 ;
final=0;
cnt=1;


while(true) {
    cnt+=1;
    puissance = nombre*nombre;
    console.log(puissance)
    final = puissance * puissance
    if (cnt == puissance) break

}

console.log(final);
