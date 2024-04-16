let contador = 1;
let num = 101;


while (contador <= 50) {
    let numPrimo = true;
    for (let index = 2; index * index <= num; index += 1) {
        if (num % index === 0) {
            numPrimo = false;
            break;
        };
    };

    if (numPrimo) {
        console.log(`contador ${contador}: ${num}`);
        contador += 1;
    };
    num += 1;
};
