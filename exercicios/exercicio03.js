const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Digite um número: "));
let num2 = parseInt(prompt("Digite um segundo número: "));
let num3 = parseFloat(prompt("Digite um terceiro número: "));
let num4 = parseInt(prompt("Digite um quarto número: "));

console.log(`Resultado esperado da primeira entrada: ${num1 + 25}`);
console.log(`Resultado esperado da segunda entrada: ${num2 * 3}`);
console.log(`Resultado esperado da terceira entrada: ${num3 * 1.12}`);
console.log(`Resultado esperado da última entrada: ${num1 + num2 + num3 + num4}`);