const prompt = require('prompt-sync')(); 
const nombreEntier=prompt("entrer un nombre entier ");
const nombreArray=nombreEntier.split("");

for (i=nombreArray.length-1;i>=0;i--){
    console.log(nombreArray[i]); 
}
