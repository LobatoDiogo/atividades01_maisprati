const prompt = require('prompt-sync')();

let ladoA = parseInt(prompt("Insira a medida do primeiro lado: "));
let ladoB = parseInt(prompt("Insira a medida do segundo lado: "));
let ladoC = parseInt(prompt("Insira a medida do terceiro lado: "));
let triangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;
let nomeTriangulo;

if (triangulo) {
    if (ladoA === ladoB && ladoB === ladoC) {
        nomeTriangulo = "Triângulo Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        nomeTriangulo = "Triângulo Isósceles";
    } else {
        nomeTriangulo = "Triângulo Escaleno";
    }
} else {
    nomeTriangulo = "Não é um triângulo.";
}
console.log(nomeTriangulo);
