const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let sum = 0; // Suma total
let number = NaN; // Inicializamos como NaN para que entre al bucle

function preguntarNumero() {
    rl.question("Ingresa un número (0 para terminar): ", (input) => {
        number = parseInt(input, 10); // Convertimos la entrada a un número entero

        if (isNaN(number)) {
            console.log("Por favor, ingresa un número válido.");
        } else {
            sum += number; // Sumamos el número válido
        }

        while (number !== 0) {
            preguntarNumero(); // Pedimos otro número
            return; // Salimos del bucle después de procesar
        }

        // Si el usuario ingresa 0, mostramos la suma total y cerramos
        if (number === 0) {
            console.log(`La suma total es: ${sum}`);
            rl.close();
        }
    });
}

preguntarNumero(); // Iniciamos el flujo