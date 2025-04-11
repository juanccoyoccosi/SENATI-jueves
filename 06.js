function revertirArray(arr) {
  let resultado = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        resultado.push(arr[i]);
    }
return resultado;
}
const arrayOriginal = [1, 2, 3, 4, 5];
 const arrayInvertido = revertirArray(arrayOriginal);
console.log(arrayInvertido); 