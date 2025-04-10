// Conjunto de palabras
const palabras = ["innovador", "feliz", "rápido", "luz", "futuro", "verde", "mágico", "brillante", "creativo", "nuevo"];

// Función para generar una palabra aleatoria
function generarPalabraAleatoria() {
  const indiceAleatorio = Math.floor(Math.random() * palabras.length);
  return palabras[indiceAleatorio];
}

// Función para generar una combinación de palabras
function generarCombinacion() {
  const palabra1 = generarPalabraAleatoria();
  const palabra2 = generarPalabraAleatoria();
  // Asegurarse de que las palabras no sean iguales
  while (palabra1 === palabra2) {
    palabra2 = generarPalabraAleatoria();
  }
  return `${palabra1} ${palabra2}`;
}

// Generar y mostrar una combinación
const combinacion = generarCombinacion();
console.log("Tu combinación aleatoria de palabras es: " + combinacion);