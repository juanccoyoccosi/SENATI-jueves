let sum = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) { 
        sum += i;
    }

    let tempSum = sum;
    while (tempSum > 500) { 
        console.log("La suma ha superado 500. proceso detenido.");
        break;
    }

    if (sum > 500) {
        break; 
    }
}

console.log("La suma total de los números impares es:", sum);