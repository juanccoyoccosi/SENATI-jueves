function sumarElementos(array) {
  return array.reduce((acumulador, numero) => acumulador + numero, 0);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
console.log(sumarElementos(numeros)); // Salida: 15