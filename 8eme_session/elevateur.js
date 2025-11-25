/*

regles : 
    on avance par 2 ou on desencd par -1
    on peux successivement avancer ou reculer n fois a limite que le chemain doit etre le plus court 
observation :
    pour les nombre pair on peux avancer (nombres_etages / 2 fois) 
    pour les nombres impaire on doit avancer jusqu'au (nombres_etages - 1) et on recule une fois apres on avance par 2 

exemples des cas  :
0: 
3: (+2-1+2)
1:  (-1+2)
2: (+2)
4: (+2+2)
5: (+2+2-1+2)
6: (+2+2+2)
7: (+2+2+2-1+2)
8: (+2+2+2+2)

realisation 

*/

function elevator(etage) {

    let currentStage = 0;
    let chemain = "";
    let moves = 0
    let step = 0;

    while (etage != currentStage) {

        if (currentStage + 2 <= etage) {
            currentStage += 2;
            step = 2;
        }
        else {
            currentStage -= 1
            step = 1;
        }
        moves += 1
        chemain += "=>" + step

    }
    console.log(`${etage}(0 ${chemain}) `)
    return moves
}

console.log(elevator(5))