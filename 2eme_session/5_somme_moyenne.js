/*
programme qui demande 4 nombres et calcule :
 La somme
 La moyenne
*/

const prompt = require('prompt-sync')();

const nombre1 = prompt("entrer le nombre 1 ");
const nombre2 = prompt("entrer le nombre 2 ");
const nombre3 = prompt("entrer le nombre 3 ");
const nombre4 = prompt("entrer le nombre 4 ");
const arrNombres = [nombre1,nombre2,nombre3,nombre4];
const floatArray = arrNombres.map(function(number){
    return parseFloat(number)  ;
}

);
let somme  = floatArray.reduce(function (acc,curr){
    return acc+curr;
},0

)
let moyenne = somme/4;
console.log("la somme des 4 nombres est : " ,somme );
console.log("la moyenne des 4 nombres est : ", moyenne );
