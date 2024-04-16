const prompt = require('prompt-sync')();

let numeros;
let soma = 0;
let quantidade = 0;

while (numeros !== 0) {
    numeros = parseFloat(prompt("Digite o número: "));
    if (numeros !== 0) {
        soma += numeros;
        quantidade++;
    }
}

if (quantidade > 0) {
    let media = soma / quantidade;
    console.log(`Média aritmética dos números digitados: ${media}`);
};
