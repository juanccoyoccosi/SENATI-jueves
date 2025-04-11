
const fibonacci = [];
const n = 10;

for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
        fibonacci.push(1);
    } else {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
}

console.log("Serie de Fibonacci:", fibonacci);