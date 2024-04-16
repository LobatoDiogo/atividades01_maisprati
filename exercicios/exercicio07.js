const prompt = require('prompt-sync')();

let quantidade = parseFloat(prompt("Quantidade de maçãs compradas: "));
let total = 0;

if (quantidade >= 12) {
    total = quantidade * 0.25;
} else {
    total = quantidade * 0.30;
}
console.log(`Valor total da compra: R$ ${total}`);
