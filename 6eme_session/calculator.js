const prompt = require('prompt-sync')();


function addition(nombre1,nombre2){return nombre1+nombre2 ;}

function soustraction(nombre1,nombre2){return nombre1 - nombre2 ;}

function multiplication(nombre1,nombre2){return nombre1*nombre2}

function division(nombre1,nombre2){return (nombre1/nombre2).toFixed(2) ;}

function puissance(nombre1, nombre2){return nombre1 ** nombre2}

function racineCarre(nombre1,nombre2){ return [Math.sqrt(nombre1).toFixed(2),Math.sqrt(nombre2).toFixed(2)]}

function factorielle (nombre){
    if (nombre < 0) return "erreur"
    if (nombre === 0) return 1;
    let re=1
    for (let i = 1 ;i<=nombre;i++){
        re *= i
    }
    return re;}


function multiFactiorielle(nombre1,nombre2){
    return [factorielle(nombre1), factorielle(nombre2)];}

let histoireActuelle=[]
let histoire=[];


while (true){


console.log("choisir la commande  : \n calculer : c \n quitter : q \n afficher l'historique : h  \n  ");

let menu= prompt("donner le l'operation  : ");

if (menu == "q") break;
else if (menu == "h") console.table(histoire);
else if (menu == "c") {



let nombre1= parseFloat(prompt("donner le nombre 1 : "));

let nombre2= parseFloat(prompt("donner le nombre 2 : "));
console.log("choisir l'operation \n + :addition \n - : soustraction \n * : multiplication \n / : division \n ** :puissance  \n sqrt :racince carre  \n ! :factorielle ")

let operation= prompt("donner l'operation : ");

let result = 0;
switch (operation) {
    case "+" :
        result=addition(nombre1,nombre2) ;break;
    case "-" :
        result=soustraction(nombre1,nombre2);break;
    case "*" :
        result=multiplication(nombre1,nombre2);break;
    case "/" :
        if (nombre2==0){console.log("tu peux pas diviser par zéro");continue}
        else{result=division(nombre1,nombre2);} break; 
    case "!" :
        result=multiFactiorielle(nombre1,nombre2);break; 
    case "**" :
        result=puissance(nombre1,nombre2);break; 
    case "sqrt" :
        result=racineCarre(nombre1,nombre2);break; 
    default : console.log("choisir une operation appropriée ");continue;
} 

histoireActuelle = [nombre1,operation,nombre2,"=",result]
histoire.push(histoireActuelle);
console.log(result)
}
else {
    console.log("donner une operation valide \n c pour calculer  \n h :afficher l'historique \n  q pour quitter")
}
}