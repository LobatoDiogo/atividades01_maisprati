const prompt = require('prompt-sync')();

let nota1 = parseInt(prompt("Informa a nota da primeira avaliação: "));
let nota2 = parseInt(prompt("Informa a nota da segunda avaliação: "));
let media = (nota1 + nota2) / 2;

if (media >= 6 && media < 11) {
    console.log(`Nota: ${media}\nPARABÉNS! Você foi aprovado.`);
} else if (media < 6) {
    console.log(`Nota: ${media}\nVocê foi REPROVADO!`);
} else {
    console.log("Digite valores de notas de 0 à 10");
}