function contarElementosPares(numeros) {
let contador = 0;
for (let numero of numeros) {
        if (numero % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(contarElementosPares(numeros)); 