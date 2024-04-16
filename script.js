const prompt = require('prompt-sync')();

// //Exercício 1
// let grausCelsius = parseInt(prompt("Informe a temperatura em graus Celsius: "));

// let conversao = (grausCelsius * 1.8) + 32;
// console.log(`A temperatura em Fahrenheit é ${conversao}.`);

// // Exercicio 2
// let eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));
// let votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
// let votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
// let votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "));

// console.log(`Percentual de ${((votosBrancos/eleitores) * 100)}% de votos brancos.`);
// console.log(`Percentual de ${((votosNulos/eleitores) * 100)}% de votos nulos.`);
// console.log(`Percentual de ${((votosValidos/eleitores) * 100)}% de votos válidos.`);

// //Exercício 3
// let num1 = parseInt(prompt("Digite um número: "));
// let num2 = parseInt(prompt("Digite um segundo número: "));
// let num3 = parseFloat(prompt("Digite um terceiro número: "));
// let num4 = parseInt(prompt("Digite um quarto número: "));

// console.log(`Resultado esperado da primeira entrada: ${num1 + 25}`);
// console.log(`Resultado esperado da segunda entrada: ${num2 * 3}`);
// console.log(`Resultado esperado da terceira entrada: ${num3 * 1.12}`);
// console.log(`Resultado esperado da última entrada: ${num1 + num2 + num3 + num4}`);

// //Exercício 4 e 5
// let nota1 = parseInt(prompt("Informa a nota da primeira avaliação: "));
// let nota2 = parseInt(prompt("Informa a nota da segunda avaliação: "));
// let media = (nota1 + nota2) / 2;

// if (media >= 6 && media < 11) {
//     console.log(`Nota: ${media}\nPARABÉNS! Você foi aprovado.`);
// } else if (media < 6) {
//     console.log(`Nota: ${media}\nVocê foi REPROVADO!`);
// } else {
//     console.log("Digite valores de notas de 0 à 10");
// }

//Exercício 6

// let ladoA = parseInt(prompt("Insira a medida do primeiro lado: "));
// let ladoB = parseInt(prompt("Insira a medida do segundo lado: "));
// let ladoC = parseInt(prompt("Insira a medida do terceiro lado: "));
// let triangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;
// let nomeTriangulo;

// if (triangulo) {
//     if (ladoA === ladoB && ladoB === ladoC) {
//         nomeTriangulo = "Triângulo Equilátero";
//     } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//         nomeTriangulo = "Triângulo Isósceles";
//     } else {
//         nomeTriangulo = "Triângulo Escaleno";
//     }
// } else {
//     nomeTriangulo = "Não é um triângulo.";
// }
// console.log(nomeTriangulo);

// Exercício 7
// let quantidade = parseFloat(prompt("Quantidade de maçãs compradas: "));
// let total = 0;

// if (quantidade >= 12) {
//     total = quantidade * 0.25;
// } else {
//     total = quantidade * 0.30;
// }
// console.log(`Valor total da compra: R$ ${total}`);

//Exercício 8
let valor1 = parseInt(prompt("Informe o primeiro valor: "));
let valor2 = parseInt(prompt("Informe o segundo valor: "));

if (valor1 === valor2) {
    console.log("Valores não podem ser iguais.");
} else if (valor1 > valor2) {
    console.log(`${valor2}\n${valor1}`);
} else {
    console.log(`${valor1}\n${valor2}`);
}
