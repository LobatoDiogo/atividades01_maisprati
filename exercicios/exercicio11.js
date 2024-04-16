const prompt = require('prompt-sync')();

let numeros;

do {
    numeros = parseInt(prompt("Digite o número: "));
    if (numeros === null || numeros < 0) break;

    if (numeros % 2 === 0) {
        console.log("O número é Par!");
    } else {
        console.log("O número é Ímpar!");
    }
} while (numeros >= 0);
