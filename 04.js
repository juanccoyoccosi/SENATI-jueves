function ordenar(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Ejemplo de uso
const numeros = [5, 3, 8, 1, 2];
console.log(ordenar(numeros)); // [1, 2, 3, 5, 8]