const prompt = require('prompt-sync')();

let grausCelsius = parseInt(prompt("Informe a temperatura em graus Celsius: "));

let conversao = (grausCelsius * 1.8) + 32;
console.log(`A temperatura em Fahrenheit é ${conversao}.`);