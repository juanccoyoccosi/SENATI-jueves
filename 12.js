const readline = require('readline');

// Configuración de la interfaz de entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 10) + 1; 

let adivinado = false;

function preguntarNumero() {
    rl.question("Adivina el número (entre 1 y 10): ", (respuesta) => {
        let intento = parseInt(respuesta, 10); 
        while (!adivinado) { 
            if (intento === numeroSecreto) {
                console.log("Adivinaste");
                adivinado = true;
                rl.close(); 
                break; 
            } else {
                console.log("no adivinaste,XD");
                return preguntarNumero(); 
            }
        }
    });
}

preguntarNumero();