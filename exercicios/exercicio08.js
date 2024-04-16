const prompt = require('prompt-sync')();

let valor1 = parseInt(prompt("Informe o primeiro valor: "));
let valor2 = parseInt(prompt("Informe o segundo valor: "));

if (valor1 === valor2) {
    console.log("Valores não podem ser iguais.");
} else if (valor1 > valor2) {
    console.log(`${valor2}\n${valor1}`);
} else {
    console.log(`${valor1}\n${valor2}`);
}
