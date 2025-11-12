let annee = 2024;

if (annee % 400 === 0 || (annee % 4 === 0 && annee % 100 !== 0)) {
    console.log("bissextile");
} else {
    console.log("non bissextile");
}
