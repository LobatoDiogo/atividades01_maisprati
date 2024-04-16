const prompt = require('prompt-sync')();

let codigo = parseInt(prompt("Informe o código de origem do produto: "));
let regiao;

regiao = codigo === 1 ? "Sul" :
    codigo === 2 ? "Norte" :
        codigo === 3 ? "Leste" :
            codigo === 4 ? "Oeste" :
                (codigo === 5 || codigo === 6) ? "Nordeste" :
                    (codigo === 7 || codigo === 8 || codigo === 9) ? "Sudeste" :
                        (codigo >= 10 && codigo <= 20) ? "Centro-Oeste" :
                            (codigo >= 25 && codigo <= 50) ? "Nordeste" :
                                "Produto importado";

console.log(`A região do produto é ${regiao}.`);
