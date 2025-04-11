function obtenerMayorYMenor(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
  }

  let mayor = Math.max(...numeros);
  let menor = Math.min(...numeros);

  return { mayor, menor };
}

const numeros = [3, 7, 1, 9, 4];
const resultado = obtenerMayorYMenor(numeros);
console.log(`Mayor: ${resultado.mayor}, Menor: ${resultado.menor}`);