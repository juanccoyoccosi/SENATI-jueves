const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Pon un número: ", (respuesta) => {
    const numero = parseInt(respuesta);
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
    rl.close();
});