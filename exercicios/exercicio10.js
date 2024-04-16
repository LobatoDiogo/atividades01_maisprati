const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "));

for (let index = 1; index <= 10; index += 1) {
    console.log(num);
}
