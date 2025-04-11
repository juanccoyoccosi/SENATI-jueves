const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const correctPassword = "1234"; 
let attempts = 0; 
const maxAttempts = 3; 

function askPassword() {
    rl.question("Introduce la contraseña: ", (input) => {
        attempts++; 

        if (input === correctPassword) {
            console.log("¡Acceso concedido!");
            rl.close(); 
        } else {
            console.log(`Contraseña incorrecta. Intentos restantes: ${maxAttempts - attempts}`);
            
            if (attempts < maxAttempts) {
                askPassword();
            } else {
                console.log("Has alcanzado el número máximo de intentos.");
                rl.close(); 
            }
        }
    });
}

let condition = true;
while (condition && attempts < maxAttempts) {
    askPassword();
    condition = false; 
}