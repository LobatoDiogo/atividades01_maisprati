const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "));

console.log(`Percentual de ${((votosBrancos/eleitores) * 100)}% de votos brancos.`);
console.log(`Percentual de ${((votosNulos/eleitores) * 100)}% de votos nulos.`);
console.log(`Percentual de ${((votosValidos/eleitores) * 100)}% de votos válidos.`);