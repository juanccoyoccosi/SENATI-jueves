const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let option;

function mostrarMenu() {
    console.log("Menú:");
    console.log("1. Gaseosa");
    console.log("2. Té");
    console.log("3. Chocolatada");
    console.log("4. Salir");
}

function manejarOpciones() {
    rl.question("Elige una opción: ", (input) => {
        option = parseInt(input, 10);
        switch (option) {
            case 1:
                console.log("Elegiste la Opción 1: Gaseosa");
                break;
            case 2:
                console.log("Elegiste la Opción 2: Té");
                break;
            case 3:
                console.log("Elegiste la Opción 3: Chocolatada");
                break;
            case 4:
                console.log("Saliendo del menú...");
                rl.close(); 
                return;
            default:
                console.log("Opción inválida. Intenta de nuevo.");
        }
        
        mostrarMenu();
        manejarOpciones();
    });
}

mostrarMenu(); 
manejarOpciones(); 