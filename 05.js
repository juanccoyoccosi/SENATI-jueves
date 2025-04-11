function buscarElemento(array, nombre) {
    const posicion = array.indexOf(nombre);
    if (posicion !== -1) {
        return `nombre "${nombre}" está en la posición ${posicion}.`;
    } else {
        return `nombre "${nombre}" no esta en el array`;
    }
}

const nombres = ["juan", "javier", "walter", "andres"];
const nombreBuscado = "javier";
console.log(buscarElemento(nombres, nombreBuscado));