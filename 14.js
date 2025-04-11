const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let number;

function preguntarNumero(callback) {
    rl.question('coloca número mayor que 0: ', (input) => {
        number = parseFloat(input);
        callback(number);
    });
}

do {
    preguntarNumero((input) => {
        if (!isNaN(input) && input > 0) {
            console.log(`numero válido: ${input}`);
            rl.close();
        } else {
            console.log('número no válido, coloca otra vez.');
        }
    });
} while (number <= 0 || isNaN(number));