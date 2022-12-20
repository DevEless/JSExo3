console.log(1 === "1");
console.log(1 === "1");
const prenom = prompt("Quel est ton prénom?");
if (prenom.length < 5) {
    alert("Ton nom est trop court");
}
const nombre1 = 5;
const nombre2 = 3;
const resultat = nombre1 + nombre2;
const reponse = prompt(`Quel est le résultat de ${nombre1} + ${nombre2} ?`);
if (reponse == resultat) {
    console.log("Bravo, tu as trouvé la bonne réponse!");
} else {
    console.log("Désolé, ce n'est pas la bonne réponse");
}
const tableau = [];
while (tableau.length < 3) {
    const element = prompt("Entre un élément à ajouter au tableau:");
    tableau.push(element);
}
alert(tableau);
const grandNombres = [];
const petitNombres = [];
while (true) {
    const nombre = prompt("Entre un nombre (ou appuie sur Annuler pour arrêter):");
    if (nombre === null) {
        break;
    }
    if (nombre >= 12) {
        grandNombres.push(nombre);
    } else {
        petitNombres.push(nombre);
    }
}
alert(`Grand nombres: ${grandNombres}\nPetit nombres: ${petitNombres}`);

const nombres = [];
while (true) {
    const nombre = prompt("Entre un nombre (ou appuie sur Annuler pour arrêter):");
    if (nombre === null) {
        break;
    }
    nombres.push(nombre);
    if (nombres.length >= 3 && nombres.every(n => n % 2 == 0)) {
        console.log("Félicitations, tu as entré 3 nombres pairs consécutifs!");
        break;
    }
}
