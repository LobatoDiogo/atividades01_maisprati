const prompt = require('prompt-sync')();

let N = parseInt(prompt("Digite um número: "));

for (let index = 1; index <= 5; index += 1) {
    console.log(`${N} x ${index} = ${index * N}`);
}
