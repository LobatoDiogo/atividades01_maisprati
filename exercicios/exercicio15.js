const prompt = require('prompt-sync')();

let num;
let peso;
let somaNum = 0;
let somaPesos = 0;


do {
    num = parseFloat(prompt("Digite um número: "));
    peso = parseInt(prompt("Insira o peso: "));
    if (num === 0 || peso === 0) break;
    somaNum += num * peso;
    somaPesos += peso;
} while (num !== 0);

if (somaPesos > 0) {
    const media = somaNum / somaPesos;
    console.log(`Média ponderada: ${media}`);
};
